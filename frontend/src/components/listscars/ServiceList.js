import { ServerConstants } from '../../dependencies/Dependencies'

class ServiceList {
    static async GetAllCarsByUser () {
        const response = await fetch(ServerConstants.URL_API + ServerConstants.API_GET_CARS, {
            method: ServerConstants.TYPE_GET,
            headers: ServerConstants.DEFAULT_HEADERS,
            credentials: 'include'
        })
        return await response.json()
    }
}

export default ServiceList