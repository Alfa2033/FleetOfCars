class Utils {    
    static StringEmpty = ''
    static TranformDateMX = (date) => {
        if (date === this.StringEmpty) {
            return this.StringEmpty
        }

        const partsDate = date.split("T")[0].split("-")
        return `${partsDate[2]}/${partsDate[1]}/${partsDate[0]}`
    }
    
    static DecodeJWT = (JWT) => {
        const base64Url = JWT.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    }

    static CleanToken = () => {
        localStorage.clear()
    }
}

export default Utils