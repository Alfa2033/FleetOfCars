const db = require('../models')
const bcrypt = require('bcrypt')

const { Response, ServerConstants, utils, ValidModel, jwt } = require('../../dependencies/Dependencies')
const { SALT_ROUNDS, SECRET_JWT_KEY } = require('../../dependencies/Config')

class UserRepository {
  static async RegisterUser ({ _username, _password }) {
    const response = new Response()

    const validModal = this.#ValidModalUser(_username, _password)
    if (validModal.ModalOk === false) {
      response.StatusCode = ServerConstants.CODE_BAD_REQUEST
      response.MessageOperation = validModal.MessageInvalidModal
      return response
    }

    if (_password.length <= 6) {
      response.StatusCode = ServerConstants.CODE_BAD_REQUEST
      response.MessageOperation = ServerConstants.WRONG_LENGTH_PASSWORD
      return response
    }

    const userFind = await db.User.findAll({
      where: {
        username: _username
      }
    })

    if (userFind.length > 0) {
      response.StatusCode = ServerConstants.CODE_BAD_REQUEST
      response.MessageOperation = ServerConstants.USER_EXIST
      return response
    }

    const hashPassword = await bcrypt.hash(_password, Number(SALT_ROUNDS))

    await db.User.create({
      username: _username,
      password: hashPassword
    }).then(() => {
      response.IsOk = true
      response.MessageOperation = ServerConstants.USER_CREATE_OK
    }).catch(() => {
      response.StatusCode = ServerConstants.CODE_BAD_REQUEST
      response.MessageOperation = ServerConstants.USER_CREATE_ERROR
    })

    return response
  }

  static async Login ({ _username, _password }) {
    const response = new Response()

    const validModal = this.#ValidModalUser(_username, _password)
    if (validModal.ModalOk === false) {
      response.StatusCode = ServerConstants.CODE_BAD_REQUEST
      response.MessageOperation = validModal.MessageInvalidModal
      return response
    }

    const userFind = await db.User.findOne({
      where: {
        username: _username
      }
    })

    if (utils.IsNullOrUndefined(userFind)) {
      response.StatusCode = ServerConstants.CODE_BAD_REQUEST
      response.MessageOperation = ServerConstants.WRONG_USER_OR_PASSWORD
      return response
    }

    const validPassword = await bcrypt.compare(_password, userFind.password)
    if (validPassword === false) {
      response.StatusCode = ServerConstants.CODE_BAD_REQUEST
      response.MessageOperation = ServerConstants.WRONG_USER_OR_PASSWORD
      return response
    }

    const token = jwt.sign({
      user_id: userFind.id,
      username: userFind.username
    }, SECRET_JWT_KEY, {
      algorithm: 'HS256',
      expiresIn: '5m'
    })
    response.IsOk = true
    response.Content = token
    response.MessageOperation = 'Login Ok'
    return response
  }

  static #ValidModalUser (username, password) {
    const validModal = new ValidModel()

    if (utils.StringIsNullOrEmpty(username) || utils.StringIsNullOrEmpty(password)) {
      validModal.MessageInvalidModal = ServerConstants.WRONG_PASSWORD_USER
      return validModal
    }

    if (username.length <= 3) {
      validModal.MessageInvalidModal = ServerConstants.WRONG_USER
      return validModal
    }

    validModal.ModalOk = true
    return validModal
  }
}

module.exports = UserRepository
