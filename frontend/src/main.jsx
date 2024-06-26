import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login/Login'
import Home from './layouts/home';
import Register from './components/register/Register'
import PrivateRoutes from './routes/Private';
import PublicRoutes from './routes/Public';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<PrivateRoutes></PrivateRoutes>}>
        <Route path='/home' element={<Home></Home>}></Route>
      </Route>
      <Route element={<PublicRoutes></PublicRoutes>}>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Route>
      <Route path='*' element={<h1 className='text-center'>Not Found</h1>}></Route>
    </Routes>
  </BrowserRouter>
)
