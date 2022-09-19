import React, { useState } from "react";
import { useEffect } from "react";

export const Form=()=> {
  const [nombre, setNombre] = useState("");
  const [contraseña, setcontraseña] = useState("");

  const [nombreapi, setNombreapi] = useState([]);
  const [contraseñaapi , setContraseñaapi] = useState([]);

  const [error , setError] = useState([]);

  useEffect(()=>{
    const loginapi = async () =>{
        const rest = await fetch("https://backend-edw.herokuapp.com/usuarios")
        const data = await rest.json()
        setNombreapi(data)
        setContraseñaapi(data)
    }
    loginapi()
  },[])

  function validateLogin(event) {
    setNombre(event.target.value)
  }

  function validatePassword(event) {
    setcontraseña(event.target.value)
    
  }

  const validacion = () => {
    if(nombre == nombreapi[278][1]){
        setError('Usuario existente')
    }else if(contraseña == contraseñaapi[278][3])
        setError('Contraseña existente')

    if (nombre != nombreapi[278][1]) {
        setError('Nombre no existente')
        
    }else if(contraseña != contraseñaapi[278][3]){
        setError('Contraseña no existente')
    }

  }



  
  return (
    <div className="container2">
      <div className="home2">
      <header>   
      </header>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1 className="title2">Inicio Sesion</h1> <br/>

      <br/>
      <br/>
      <label className="Label2">Nombre: </label>
      <input className="input"
        id="nombre"
        name="nombre"
        value={nombre}
        onChange={validateLogin}
      ></input>
       <div>
        <p className="errorcontraseña">{error}</p>
      </div>

      <br/>
      <br/>
      <label className="Label3">Contraseña: </label>
      <input className="input"
        id="contraseña"
        name="contraseña"
        value={contraseña}
        onChange={validatePassword}
        type="password"
      ></input>
      <div>
        <p className="errorcontraseña">{error}</p>
      </div>

      <br/>
      <br/>
      <button className="Guardar"onClick={validacion}>Iniciar Sesion</button>
      
      </div>
    </div>
    
  );
}