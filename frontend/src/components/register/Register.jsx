import { useState } from 'react'
import ServiceRegister from './ServiceRegister'
import { Utils } from '../../dependencies/Dependencies'
import { Link } from 'react-router-dom'

const Register = () => {
    const [ok, setOk] = useState(Utils.StringEmpty)
    const [error, setError] = useState(Utils.StringEmpty)
    const [password, setPassword] = useState(Utils.StringEmpty)
    const [username, setUsername] = useState(Utils.StringEmpty)

    const CreateUser = async () => {
        setOk(Utils.StringEmpty)
        setError(Utils.StringEmpty)

        try {
            const register = await ServiceRegister.CreateUser(username, password)
            if (register.IsOk === false) {
                setError(`Error: ${register.MessageOperation}`)
                return
            }

            setError(Utils.StringEmpty)
            setPassword(Utils.StringEmpty)
            setUsername(Utils.StringEmpty)
            setOk(register.MessageOperation)
        } catch (error) {
            setError(`Error: ${error.message}`)
        }
    }

    return (
        <div className='border border-dark p-4 rounded bg-white'>
            <form className='d-flex flex-column'>
                <h3 className='text-center'>Registrar usuario</h3>
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
                    <button onClick={CreateUser} className='btn btn-primary w-50 mt-3' type="button">Registrar</button>
                </div>
                <Link to={'/login'} className='text-center'>Ya cuentas con usuario, inicia sesión</Link>
            </form>
        </div>
    )
}

export default Register