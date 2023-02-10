

import React from "react";
import { Route, Routes } from "react-router-dom";
//import NotFound from "../layout/NotFound";
import Login from '../components/Login';
//user Section
import Home1 from "../components/home1";
import Home2 from "../components/home2";
import Home3 from "../components/home3";

const Routefile = () => {
    console.log("inside rote")
  return (

    <section>
      <Routes>
      <Route exact path="/login" element={<Login/>} /> 
        <Route exact path="/" element={<Home1/>} />
        <Route exact path="/home2" element={<Home2/>} />
        <Route exact path="/home3" element={<Home3/>} />
        {/* <Route component={NotFound} /> */}
      </Routes>
    </section>
  );
};

export default Routefile;
