class ServerConstants {
    static URL_API = 'http://localhost:3000'
    static API_REGISTER = '/register'
    static API_LOGIN = '/login'
    static API_GET_CARS = '/show-cars'
    static API_UPDATE_CAR = '/update-car'
    static API_CREATE_CAR = '/register-car'
    static API_DELETE_CAR = '/delete-car'
    static TYPE_POST = 'POST'
    static TYPE_GET = 'GET'
    static KEY_TOKEN = 'access-token'
    static KEY_DATE_CREATION = 'creation'
    static KEY_USERNAME = 'username'
    static DEFAULT_HEADERS = {
        'Content-Type': 'application/json'
    }
    static CODE_NOT_AUTHORIZE = 401
    static MINUTES_EXPIRATION_TOKEN = 5
}

export default ServerConstants