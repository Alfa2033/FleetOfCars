import { ServerConstants } from "../../dependencies/Dependencies";

class ServiceAddUpdate {
    static async UpdateCar ({ state, trademark, model, year, licensePlate, carId }) {
        const respone = await fetch(ServerConstants.URL_API + ServerConstants.API_UPDATE_CAR, {
            method: ServerConstants.TYPE_POST,
            body: JSON.stringify({
                year: year,
                carId: carId,
                state: state,
                model: model,
                trademark: trademark,
                licensePlate: licensePlate
            }),
            credentials: 'include',
            headers: ServerConstants.DEFAULT_HEADERS
        })

        return await respone.json()
    }

    static async CreateCar ({ state, trademark, model, year, licensePlate }) {
        const respone = await fetch(ServerConstants.URL_API + ServerConstants.API_CREATE_CAR, {
            method: ServerConstants.TYPE_POST,
            credentials: 'include',
            headers: ServerConstants.DEFAULT_HEADERS,
            body: JSON.stringify({
                year: year,
                state: state,
                model: model,
                trademark: trademark,
                licensePlate: licensePlate
            })
        })

        return await respone.json()
    }
}

export default ServiceAddUpdate