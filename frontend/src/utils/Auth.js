import ServerConstants from "../constants/ServerConstants";
import Utils from "./Utils";

const VerifyAuth = () => {
    const infoToken = localStorage.getItem(ServerConstants.KEY_TOKEN);
    const creation = localStorage.getItem(ServerConstants.KEY_DATE_CREATION)

    if (!infoToken || !creation) {
        Utils.CleanToken()
        return false
    }

    if (Math.abs(new Date() - new Date(Number(creation))) >= ServerConstants.MINUTES_EXPIRATION_TOKEN) {
        console.log("sin sesion")
        Utils.CleanToken()
        return false
    }

    return true
}

export {
    VerifyAuth
}