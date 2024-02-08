import React,{useState} from 'react'
import axios from 'axios';

function Quat() {
    const [Text,setText]=useState("")
    const [Quat,setQuat]=useState("")

    function getq(){
       
        axios.get('http://localhost:2000/',{crossdomain:true})
        .then(response=>{
            setText(response.data.text);
            setQuat(response.data.author);
        })
    
    }
    
  return (
    <div><button onClick={getq}>
        gen
    </button>
    <button onClick={getq}>
        ooop
    </button>
    <h1>{Text}</h1>
    <h2>{Quat}</h2>

    </div>
  )
}





export default Quat