import ServerConstants from "../../constants/ServerConstants";

class ServiceDelete {
    static async DeleteCar (idToDelete) {
        const deleteCar = await fetch(ServerConstants.URL_API + ServerConstants.API_DELETE_CAR, {
            body: JSON.stringify({
                carId: idToDelete
            }),
            credentials: 'include',
            headers: ServerConstants.DEFAULT_HEADERS,
            method: ServerConstants.TYPE_POST
        })

        return await deleteCar.json()
    }
}

export default ServiceDelete