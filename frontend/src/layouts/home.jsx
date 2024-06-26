import List from '../components/listscars/ListCar'
import ServerConstants from '../constants/ServerConstants'

const Home = () => {
    return (
        <>
            <div>
                <div>
                    <h1>Listado de vehiculos de {localStorage.getItem(ServerConstants.KEY_USERNAME)}</h1>
                </div>
                <List></List>
            </div>
        </>
    )
}

export default Home