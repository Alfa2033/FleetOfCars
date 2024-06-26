import ServerConstants from "../constants/ServerConstants";
import Utils from "./Utils";

const VerifyAuth = () => {
    const infoToken = localStorage.getItem(ServerConstants.KEY_TOKEN);
    const expiration = localStorage.getItem(ServerConstants.KEY_DATE_CREATION)

    if (!infoToken || !expiration) {
        Utils.CleanToken()
        return false
    }

    const actualMinutes = new Date().getMinutes()
    const minutesExpiration = new Date().getMinutes(expiration)

    if (actualMinutes - minutesExpiration >= ServerConstants.MINUTES_EXPIRATION_TOKEN) {
        Utils.CleanToken()
        return false
    }

    return true
}

export {
    VerifyAuth
}