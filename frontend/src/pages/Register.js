import * as React from "react";
import Axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Register() {
  const [First_name, setFirst_name] = useState("");
  const [Last_name, setLast_name] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [che,setche]=useState("")
  const navigate = useNavigate();

  const addcustomer = () => {
    Axios.post("http://localhost:2000/register", {
        First_name : First_name,
        Last_name : Last_name,
        Phone : Phone,
        Email: Email,
        password : password
       
    }).then((response) => {
      if (Response.data === "Values inserted"){
        navigate('/', { replace: true });
      }else{
        navigate('/Reg_f', { replace: true });
    }

      });
  };

  return (
    <body>
        <h1>Hello {che}</h1>
        <div className="box" >
         <div class="form">
         
            <div class='topic'>SIGN UP</div>
            <div className='text'>First Name : </div>
                      <input
                          type='text'
                          placeholder='Enter First Name'
                          onChange={(event) =>{
                                setFirst_name(event.target.value)
                          }}  
                          required
                      />
            <div className='text'>Last Name : </div>
                      <input
                          type='text'
                          
                          placeholder='Enter Last Name'
                          onChange={(event) =>{
                            setLast_name(event.target.value)
                          }}
                          required
                      />
            <div className='text'>Phone Number : </div>
                      <input
                          type='text'
                          
                          placeholder='Enter Phone Number'
                          onChange={(event) =>{
                            setPhone(event.target.value)
                          }}  
                          required
                      />
            <div className='text'>Email : </div>
                      <input
                          type='email'
                          
                          placeholder='Enter email'
                          onChange={(event) =>{
                            setEmail(event.target.value)
                          }}  
                          required
                      />

            <div className='password'  >Password : </div>
                      <input
                          type='password'
                          
                          placeholder='Enter password'
                          onChange={(event) =>{
                            setpassword(event.target.value)
                          }}  
                          required
                      />

            <button onClick={addcustomer}> Sign up</button>

            <p class="message">Already register? <a href="login">Login</a></p>
        </div>
        </div>
        </body>
  );
}
