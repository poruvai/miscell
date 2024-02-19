import logo from './logo.svg';
import './App.css';
import React from 'react';
import './Signup.css'
import Signup from './Signup';
import IfCheck from './Ifcondition';
import Loop from './Map';
import Navbar from './components/Navbar';
import Home from './components/Home';
function App() {
  return (
    <div className='Sigh-up-container'>
    {/* <Signup/> */}
    <Signup/>

         {/* <IfCheck/>*/}
      {/* <Loop/>*/}
    </div>
  );
}

export default App;
