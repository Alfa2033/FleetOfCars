class ServerConstants {
  static SERVER_START_SUCCESSFUL = 'El servidor ha iniciado con éxito'
  static METHOD_POST = 'POST'
  static METHOD_GET = 'GET'
  static USER_EXIST = 'El nombre de usuario ingresado ya existe'
  static WRONG_PASSWORD_USER = 'El usuario y la contraseña no pueden estar vacios'
  static WRONG_USER = 'El nombre de usuario debe ser mayor a 3 caracteres'
  static USER_CREATE_OK = 'El usuario se ha creado con éxito'
  static USER_CREATE_ERROR = 'No se pudo crear el usuario, intente mas tarde'
  static WRONG_USER_OR_PASSWORD = 'Usuario o contraseña incorrecta'
  static WRONG_MODEL_CAR = 'La información del vehiculo es incorrecta, revise su solicitud'
  static CAR_CREATE_OK = 'El vehiculo ha sido registrado con éxito'
  static CAR_CREATE_ERROR = 'No se pudo registrar el vehiculo, intente mas tarde'
  static TYPE_STRING = 'string'
  static UPDATE_CAR_OK = 'El vehiculo se ha actualizado con éxito'
  static UPDATE_CAR_ERROR = 'No se pudo actualizar la información del vehiculo, intente mas tarde'
  static NO_EXIST_CAR = 'No existen registros que coincidan con la búsqueda'
  static WRONG_DELETE_CAR = 'El usuario y el vehiculo no pueden estar vacios'
  static DELETE_CAR_OK = 'El vehiculo fue eliminado con éxito'
  static DELETE_CAR_ERROR = 'No se pudo eliminar el registro, intente mas tarde'
  static WRONG_SHOW_CARS = 'El usuario no puede estar vacio'
  static SHOW_CARS_ERROR = 'No se pudo listar los vehiculos, intente mas tarde'
  static WRONG_LENGTH_PASSWORD = 'La contraseña debe tener un tamaño mayor a 6 caracteres'
  static NOT_AUTHORIZED = 'Se ha denegado la solicitud por falta de autorizacion'
  static TOKEN_INVALID = 'El token indicado es invalido'

  static CODE_NOT_FOUND = 404
  static CODE_BAD_REQUEST = 400
  static CODE_TOKEN_INVALID = 403
  static CODE_NOT_AUTHORIZED = 401
}

module.exports = ServerConstants
