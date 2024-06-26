const respository = require('../db/repository/CarRepository')

class CarController {
  static Register = async ({ trademark, model, year, licensePlate, state, userId }) =>
    respository.RegisterCar({
      _year: year,
      _model: model,
      _state: state,
      _userId: userId,
      _trademark: trademark,
      _licensePlate: licensePlate
    })

  static Modify = async ({ trademark, model, year, licensePlate, state, userId, carId }) =>
    respository.ModifyCar({
      _year: year,
      _carId: carId,
      _state: state,
      _model: model,
      _userId: userId,
      _trademark: trademark,
      _licensePlate: licensePlate
    })

  static Delete = async (userId, carId) => respository.DeleteCar(userId, carId)
  static Show = async (userId) => respository.ShowAllCarsByUser(userId)
}

module.exports = CarController
