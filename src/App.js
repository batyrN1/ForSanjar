import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {Route,Routes,Router} from 'react-router-dom';

import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Registr from './components/Register/Register'
import Saved from './components/Save/Save'
import Footer from './components/Footer/Footer';

function App() {
  return (
      <>
    <Header/>
    <Routes>
      <Route exact path='/home'
       element={<Home/>}/>
      <Route 
       path='/about-us'
        element={<AboutUs/>}/>
      <Route exact path='/save'
       element={<Saved/>}/>
      <Route 
       path='/register'
        element={<Registr/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
