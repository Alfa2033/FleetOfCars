import { ServerConstants } from '../../dependencies/Dependencies'

class ServiceRegister {
    static async CreateUser(username, password) {
        const response = await fetch(ServerConstants.URL_API + ServerConstants.API_REGISTER, {
            headers: ServerConstants.DEFAULT_HEADERS,
            method: ServerConstants.TYPE_POST,
            body: JSON.stringify({
                username: username,
                password: password
            })
        })

        return await response.json()
    }
}

export default ServiceRegister