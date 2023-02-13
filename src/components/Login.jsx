import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../CSS/login.css'

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();


  const loginn = () => {
    if (name == "sam" && password == "admin") {

      navigate('/Superadmin');
      localStorage.setItem("authenticated", 1);

    } else if (name == "sam" && password == "user") {
      navigate('/Admin');
      localStorage.setItem("authenticated", 1);

    } else {
      alert("invalid");
    }
  };
  return (
    <div>
      <div className="container cont text-white pt-4">
        <h1 className="m-2">Login</h1>

        <div  >
          <form>
            <div className="form-outline mt-5 ">
              <input type="email" id="form2Example1" className="px-5 " placeholder="Email" onChange={(e) => setName(e.target.value)} />

            </div>

            <div className="form-outline mt-5  ">
              <input
                type="password"
                id="form2Example2"
                className="px-5 "
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />

            </div>

            <button
              type="button"
              className="btn btn-light text-black btn-block mt-5"
              onClick={loginn}
            >
              Sign in
            </button>



          </form>
        </div>
      </div>
    </div>
  );
}
