import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Route, Routes} from "react-router-dom";
import Routefile from './Routes/Routefile';
import Login from './components/Login';
import Superadmin from "./components/Superadmin";
import Admin from "./components/Admin";
import App from './App'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>

  <React.StrictMode>
  <Routes>
                <Route exact path="/" element={ <App /> } />
                  <Route exact path="/login" element={<Login/>} /> 
                  <Route exact path="/Superadmin" element={<Superadmin/>} /> 
                  <Route exact path="/Admin" element={<Admin/>} /> 
                 
                <Route element={<Routefile/>} />
  </Routes>
   
  </React.StrictMode>
  </BrowserRouter>,

)
