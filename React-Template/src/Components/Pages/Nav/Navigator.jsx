import React from 'react';
import { Link } from 'react-router-dom';


export const Navigator = () => {
  return (
    <nav className="navigator">
      <Link to="/">Registro</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Home">Home</Link>
      <Link to="/List">List</Link>

    </nav>
  )
}