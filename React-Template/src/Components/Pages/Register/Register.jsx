import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const Register=()=> {
const [nombre, setNombre] = useState("");
const [email, setEmail] = useState("");
const [contraseña, setcontraseña] = useState("");
const [contraseña2, setcontraseña2] = useState("");

const [namevalidate , setNamevalidate] = useState("");
const [emailvalidate , setEmailvalidate] = useState("");
const [contraseñavalidate , setContraseñavalidate] = useState("");
const [contraseña2validate , setContraseña2validate] = useState("");

const cambiarNombre = (e) => {
  const value = e.target.value;
  console.log(value);
  setNombre(value);
};



const cambiaremail = (e) => {
  const value = e.target.value;
  console.log(value);
  setEmail(value);
};
const cambiarcontraseña= (e) => {
  const value = e.target.value;
  console.log(value);
  setcontraseña(value);
};
const cambiarcontraseña2= (e) => {
  const value = e.target.value;
  console.log(value);
  setcontraseña2(value);
};

const guardarcontraseña2 = () => {
  console.log("Esta es mi estdo local: ", email);
};

const limiteCharacters = /^[a-zA-Z0-9_?-@*+&#¿}]{8,20}$/; 


useEffect(() => {
    if(limiteCharacters.test(contraseña)){
        setContraseñavalidate('')
    }else if(contraseña === ''){
        setContraseñavalidate('Porfavor no dejar este campo sin llenar')
            
    }else{
        setContraseñavalidate('tu contraseña no debe ser menor a 8 caracteres')
    }

},[limiteCharacters])


const SpecialCharacterUs = /^[a-zA-Z0-9]{3,20}$/; 

useEffect(() => {
    if(SpecialCharacterUs.test(nombre)){
        setNamevalidate('')
    }else if(nombre == ''){
        setNamevalidate('Porfavor no dejes este campo sin llenar')
    }else{
        setNamevalidate('Error porfavor no escribir caracteres especiales')
    }

     },[SpecialCharacterUs])

const specialsCharactersEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

useEffect (() => {
    if(specialsCharactersEmail.test(email)){
        setEmailvalidate('')
    }else if(email == ''){
        setEmailvalidate('Porfavor no dejes este campo sin llenar')
    }else{
        setEmailvalidate('Error porfavor no olvides escribir @gmail.com')
    }
    },[specialsCharactersEmail])

useEffect (()=>{
    if(contraseña === contraseña2){
        setContraseña2validate('')
    }else if(contraseña != contraseña2){
        setContraseña2validate('Su contraseña es distinta a la anterior')
}else{
    setContraseña2validate('Porfavor no dejar este campo sin llenar')
} })


const postFuction = () => {
  axios.post('https://backend-edw.herokuapp.com/usuario',{
    "username" : nombre,
    "name" : email,
    "password" : contraseña,
    
  })
  .then(function(response){
    console.log(response.data);
    setMessagge(response.data);
  })
  .catch(value =>{
    console.log(value.data);
  })

}

const [messagge , setMessagge] = useState("");
return (
  <div className="App">
    <header>   
    </header>
    <div className="App-header">
    <h1 className="title">Register</h1> <br/>
    <label className="Label">Nombre: </label>
    <input className="input2"  id="email"
      name="email"
      value={nombre}
      onChange={cambiarNombre}> 
    </input>
    <p className='errorcontraseña'>{namevalidate} </p>

    <br/>
    <br/>
    <label className="Label2">Email: </label>
    <input className="input"
      id="nombre"
      name="nombre"
      value={email}
      onChange={cambiaremail}
    ></input>
    <p className="errorcontraseña">{emailvalidate}</p>
    

    <br/>
    <br/>
    <label className="Label3">Contraseña: </label>
    <input className="input"
      id="contraseña"
      name="contraseña"
      value={contraseña}
      onChange={cambiarcontraseña}
      type="password"
    ></input>
    <p className="errorcontraseña"  >{contraseñavalidate} </p>

    <br/>
    <br/>
    <label className="Label4">Confirmar Contraseña: </label>
    <input className="input"
      id="contraseña2"
      name="contraseña2"
      value={contraseña2}
      onChange={cambiarcontraseña2}
      type="password"
    ></input>
    <p className="errorcontraseña">{contraseña2validate}</p>
    <button className="Guardar"onClick={postFuction}>Register</button>
    <p className="errorcontraseña">{messagge.Message}</p>

    </div>
    </div>)
}