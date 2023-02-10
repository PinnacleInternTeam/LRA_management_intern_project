import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Route, Routes} from "react-router-dom";
import Routefile from './Routes/Routefile';
import Login from './components/Login';
import Home1 from "./components/home1";
import Home2 from "./components/home2";
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>

  <React.StrictMode>
  <Routes>
                <Route exact path="/" element={ <App /> } />
                  <Route exact path="/login" element={<Login/>} /> 
                  <Route exact path="/home1" element={<Home1/>} /> 
                  <Route exact path="/home2" element={<Home2/>} /> 
                 
                <Route element={<Routefile/>} />
  </Routes>
   
  </React.StrictMode>
  </BrowserRouter>,

)
