import React, { useState } from 'react'
import { useEffect } from "react";

export const List = () => {


  const [list , setList] = useState ([]);

  useEffect(()=>{
    const list2 = async () =>{
        const rest = await fetch("https://backend-edw.herokuapp.com/usuarios")
        const data = await rest.json()
        console.log(data);
        setList(data)
    }
    list2()
  },[])



  return (
    

    <div className='home3'>
      <table className='table'>
      {list.map(data => {
        return (
          <tr>
          <td>{data[0]}</td>
          <td>{data[1]}</td> 
          <td>{data[2]}</td>  
          <td>{data[3]}</td>  
          </tr>

        )  
      })}
      </table>
    </div>

    

  )
}
