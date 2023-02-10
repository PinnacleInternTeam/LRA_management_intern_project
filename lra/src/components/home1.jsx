import React, { useEffect } from 'react'
import { Navigate, useNavigate } from "react-router-dom";

export default function Home1() {
    let navigate = useNavigate();

    let aut= localStorage.getItem("authenticated")
   
    console.log( typeof(aut)+" "+aut);
    

    const logout=()=>{
        navigate('/Login');
        localStorage.setItem("authenticated", 0);
    }

    if(aut=="0"){
        return (
            <Navigate replace to="/login" />
          )
    }
    else
    {
  return (

    <div>  
        <div>Admin</div>
        <button className='btn btn-danger' onClick={logout}>Logout</button>
    </div>
  )}
}
