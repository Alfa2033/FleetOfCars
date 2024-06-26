import { Outlet, Navigate } from 'react-router-dom'
import { VerifyAuth } from '../utils/Auth'

function PrivateRoutes() {
    const token = VerifyAuth()
    return token ? <Outlet></Outlet> : <Navigate to='/login' />
}

export default PrivateRoutes