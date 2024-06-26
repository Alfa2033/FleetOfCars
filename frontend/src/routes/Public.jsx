import { Outlet, Navigate } from 'react-router-dom'
import { VerifyAuth } from '../utils/Auth'

function PublicRoutes() {
    const token = VerifyAuth()
    return token ? <Navigate to='/home' /> : <Outlet />
}

export default PublicRoutes