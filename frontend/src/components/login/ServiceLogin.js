import { ServerConstants } from '../../dependencies/Dependencies'

class ServiceLogin {
    static async Login (username, password) {
        const response = await fetch(ServerConstants.URL_API + ServerConstants.API_LOGIN, {
            headers: ServerConstants.DEFAULT_HEADERS,
            method: ServerConstants.TYPE_POST,
            body: JSON.stringify({
                username: username,
                password: password
            }),
            credentials: 'include'
        })

        return await response.json()
    }
}

export default ServiceLogin