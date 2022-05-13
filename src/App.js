import React, { useState } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import {  } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import ModalSignIn from './components/MainPage/Header/Dropdown/Modals/ModalSignIn';
import ModalSignUp from './components/MainPage/Header/Dropdown/Modals/ModalSignUp';
import Header from './components/MainPage/Header/Header';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainPage />
        <ModalSignIn />
        <ModalSignUp />
        <Footer />
        <Routes>
          {/* <Route path = "/main" element = {<MainPage />} />
          <Route path = "/rent" element = {<Rent />} />
          <Route path = "/personalAccount" element = {<PersonalAccount />} />
          <Route path = "/login" element = {<Login />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
