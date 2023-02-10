import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

export default function Home1() {
    let navigate = useNavigate();

    let aut= localStorage.getItem("authenticated")
    console.log(aut);
  
    if(!aut){
        navigate('/Login');
        localStorage.setItem("authenticated", false);
    }

        
    

    const logout=()=>{
        navigate('/Login');
        localStorage.setItem("authenticated", false);
    }

  return (
    
    <div>
      
        <div>Admin</div>
        <button className='btn btn-danger' onClick={logout}>Logout</button>


    </div>
  )
}
