import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { GoogleOAuthProvider } from '@react-oauth/google';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

function App() {
  return ( 
  // <GoogleOAuthProvider clientId='Your Clent ID.'>
    <BrowserRouter>
  <div className='container'>
    <Navbar />
    <Routes>
      <Route exact path='/auth' element = {<Auth/>} />
      <Route exact path='/' element = {<Home/>} />
    </Routes>
  </div>
  </BrowserRouter>
  // </GoogleOAuthProvider>
  );
}

export default App;
