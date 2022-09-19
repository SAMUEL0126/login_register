import React from 'react';
import { Form } from './Components/Pages/Form/Form.jsx';
import { Navigator } from './Components/Pages/Nav/Navigator';
import { Register } from './Components/Pages/Register/Register';
import {Route , Routes} from 'react-router-dom';
import {Home} from './Components/Pages/Home/Home.jsx';
import {List} from './Components/Pages/List/List.jsx';

function App() {
  return (
    <div>
    <Navigator/>
    <Routes>
      <Route path='/' element = {<Register/>} />
      <Route path= '/Login' element  = {<Form/>} />
      <Route path= '/Home' element  = {<Home/>} />
      <Route path= '/List' element  = {<List/>} />
    </Routes>
    </div>
  );
}

export default App;