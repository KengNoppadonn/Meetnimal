import * as React from "react";
import Axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {
  const [Phone, setPhone] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const Check = () => {
    Axios.post("http://localhost:2000/login", {
        
        Phone : Phone,
        
        Password : password
       
    }).then((response) => {
      console.log(response)
        // setche(response)

      });
  };

  return (
    <div>
      <input type="text" onChange={(event) =>{setPhone(event.target.value)}}  />
      <input type="password" onChange={(event) =>{setpassword(event.target.value)}}  />
      <button onClick={Check}>Login</button>
      </div>
  );
}
