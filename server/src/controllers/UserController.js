const repository = require('../db/repository/UserRepository')

class UserController {
  static Register = async ({ username, password }) => await repository.RegisterUser({ _username: username, _password: password })
  static Login = async ({ username, password }) => await repository.Login({ _username: username, _password: password })
}

module.exports = UserController
