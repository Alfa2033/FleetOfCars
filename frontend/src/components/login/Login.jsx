import { useState } from 'react'
import ServiceLogin from './ServiceLogin'
import { ServerConstants, Utils } from '../../dependencies/Dependencies'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const [ok, setOk] = useState(Utils.StringEmpty)
    const [error, setError] = useState(Utils.StringEmpty)
    const [password, setPassword] = useState(Utils.StringEmpty)
    const [username, setUsername] = useState(Utils.StringEmpty)

    const StartSession = async () => {
        setOk(Utils.StringEmpty)
        setError(Utils.StringEmpty)

        try {
            const register = await ServiceLogin.Login(username, password)
            if (register.IsOk === false) {
                setError(`Error: ${register.MessageOperation}`)
                return
            }

            setError(Utils.StringEmpty)
            setPassword(Utils.StringEmpty)
            setUsername(Utils.StringEmpty)
            setOk(register.MessageOperation)

            const tokenDecoded = Utils.DecodeJWT(register.Content)
            localStorage.setItem(ServerConstants.KEY_TOKEN, register.Content)
            localStorage.setItem(ServerConstants.KEY_DATE_CREATION, Date.now())
            localStorage.setItem(ServerConstants.KEY_USERNAME, tokenDecoded.username)
            navigate("/home");
        } catch (error) {
            setError(`Error: ${error.message}`)
        }
    }

    return (
        <div className='border border-dark p-4 rounded bg-white'>
            <form className='d-flex flex-column'>
                <h3 className='text-center'>Iniciar sesión</h3>
                <div className='form-group'>
                    <label htmlFor="txt_UserName">Nombre de usuario</label>
                    <input id='txt_UserName' className='form-control' type="text" autoComplete='off' value={username} onChange={(ev) => setUsername(ev.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor="txt_PasswordUser">Contraseña</label>
                    <input id='txt_PasswordUser' className='form-control' type="password" autoComplete='off' value={password} onChange={(ev) => setPassword(ev.target.value)} />
                </div>
                <div className='text-center mb-2'>
                    <span id='error_register' className='text-danger d-block'>{error}</span>
                    <span id='ok_register' className='text-success d-block'>{ok}</span>
                    <button onClick={StartSession} className='btn btn-primary w-50 mt-3' type="button">Iniciar sesión</button>
                </div>
                <Link className='text-center' to={"/register"}>No cuentas con usuario, registrar usuario</Link>
            </form>
        </div>
    )
}

export default Login