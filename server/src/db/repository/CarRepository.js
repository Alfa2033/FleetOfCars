/* eslint-disable valid-typeof */
const db = require('../models')
const { Response, ServerConstants, utils, ValidModel } = require('../../dependencies/Dependencies')

class CarRepository {
  static async RegisterCar ({ _trademark, _model, _year, _licensePlate, _state, _userId }) {
    const response = new Response()
    const validModel = this.#ValidRegisterCar({
      year: _year,
      model: _model,
      state: _state,
      userId: _userId,
      trademark: _trademark,
      licensePlate: _licensePlate
    })

    if (validModel.ModalOk === false) {
      response.StatusCode = ServerConstants.CODE_BAD_REQUEST
      response.MessageOperation = validModel.MessageInvalidModal
      return response
    }

    await db.Cars.create({
      model: _model,
      year: Number(_year),
      state: Number(_state),
      trademark: _trademark,
      user_id: Number(_userId),
      license_plate: _licensePlate
    }).then(() => {
      response.IsOk = true
      response.MessageOperation = ServerConstants.CAR_CREATE_OK
    }).catch(() => {
      response.StatusCode = ServerConstants.CODE_BAD_REQUEST
      response.MessageOperation = ServerConstants.CAR_CREATE_ERROR
    })

    return response
  }

  static async ModifyCar ({ _trademark, _model, _year, _licensePlate, _state, _userId, _carId }) {
    const response = new Response()
    const validModel = this.#ValidRegisterCar({
      year: _year,
      model: _model,
      state: _state,
      userId: _userId,
      trademark: _trademark,
      licensePlate: _licensePlate
    })

    if (validModel.ModalOk === false) {
      response.StatusCode = ServerConstants.CODE_BAD_REQUEST
      response.MessageOperation = validModel.MessageInvalidModal
      return response
    }

    const existCar = !utils.IsNullOrUndefined(await this.#FindCarByIdAndUser(_userId, _carId))

    if (existCar === false) {
      response.StatusCode = ServerConstants.CODE_BAD_REQUEST
      response.MessageOperation = ServerConstants.NO_EXIST_CAR
      return response
    }

    await db.Cars.update({
      model: _model,
      year: Number(_year),
      state: Number(_state),
      trademark: _trademark,
      license_plate: _licensePlate
    }, {
      where: {
        user_id: _userId,
        id: _carId
      }
    }).then(() => {
      response.IsOk = true
      response.MessageOperation = ServerConstants.UPDATE_CAR_OK
    }).catch(() => {
      response.StatusCode = ServerConstants.CODE_BAD_REQUEST
      response.MessageOperation = ServerConstants.UPDATE_CAR_ERROR
    })

    return response
  }

  static async DeleteCar (_userId, _carId) {
    const response = new Response()
    if (utils.StringIsNullOrEmpty(_userId) || utils.StringIsNullOrEmpty(_carId)) {
      response.StatusCode = ServerConstants.CODE_BAD_REQUEST
      response.MessageOperation = ServerConstants.WRONG_DELETE_CAR
      return response
    }

    const existCar = !utils.IsNullOrUndefined(await this.#FindCarByIdAndUser(_userId, _carId))

    if (existCar === false) {
      response.StatusCode = ServerConstants.CODE_BAD_REQUEST
      response.MessageOperation = ServerConstants.NO_EXIST_CAR
      return response
    }

    await db.Cars.destroy({
      where: {
        user_id: _userId,
        id: _carId
      }
    }).then(() => {
      response.IsOk = true
      response.MessageOperation = ServerConstants.DELETE_CAR_OK
    }).catch(() => {
      response.StatusCode = ServerConstants.CODE_BAD_REQUEST
      response.MessageOperation = ServerConstants.DELETE_CAR_ERROR
    })

    return response
  }

  static async ShowAllCarsByUser (_userId) {
    const response = new Response()
    if (utils.StringIsNullOrEmpty(_userId)) {
      response.StatusCode = ServerConstants.CODE_BAD_REQUEST
      response.MessageOperation = ServerConstants.WRONG_SHOW_CARS
      return response
    }

    await db.Cars.findAll({
      include: [{
        model: db.States_Car,
        as: 'stateInfo',
        attrbiutes: ['description_status']
      }],
      where: {
        user_id: _userId
      }
    }).then((content) => {
      response.IsOk = true
      response.Content = content
    }).catch((error) => {
      console.log(error)
      response.StatusCode = ServerConstants.CODE_BAD_REQUEST
      response.MessageOperation = ServerConstants.SHOW_CARS_ERROR
    })

    return response
  }

  static #ValidRegisterCar ({ trademark, model, year, licensePlate, state, userId }) {
    const validModel = new ValidModel()
    const _year = Number(year)
    const _state = Number(state)
    const _userId = Number(userId)

    if (
      _year === 0 ||
      _state === 0 ||
      _userId === 0 ||
      isNaN(_year) ||
      isNaN(_userId) ||
      isNaN(_state) ||
      utils.StringIsNullOrEmpty(model) ||
      utils.StringIsNullOrEmpty(licensePlate) ||
      utils.StringIsNullOrEmpty(trademark)
    ) {
      validModel.MessageInvalidModal = ServerConstants.WRONG_MODEL_CAR
      return validModel
    }

    validModel.ModalOk = true
    return validModel
  }

  static async #FindCarByIdAndUser (_userId, _carId) {
    return await db.Cars.findOne({
      where: {
        user_id: _userId,
        id: _carId
      }
    })
  }
}

module.exports = CarRepository
