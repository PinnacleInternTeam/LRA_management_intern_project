

import React from "react";
import { Route, Routes } from "react-router-dom";
//import NotFound from "../layout/NotFound";
import Login from '../components/Login';
//user Section
import Superadmin from "../components/Superadmin";
import Admin from "../components/Admin";


const Routefile = () => {
    console.log("inside rote")
  return (

    <section>
      <Routes>
      <Route exact path="/login" element={<Login/>} /> 
        <Route exact path="/Superadmin" element={<Superadmin/>} />
        <Route exact path="/Admin" element={<Admin/>} />
        
        {/* <Route component={NotFound} /> */}
      </Routes>
    </section>
  );
};

export default Routefile;
