import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {  } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import ModalSignIn from './components/MainPage/Header/Dropdown/Modals/ModalSignIn';
import ModalSignUp from './components/MainPage/Header/Dropdown/Modals/ModalSignUp';
import Header from './components/MainPage/Header/Header';
import Footer from './components/Footer/Footer';
import SearchPage from './components/SearchPage/SearchPage';

function App() {

  return (
      <div className="App">
        <Router>
          <Header />
          <ModalSignIn />
          <ModalSignUp />

          

          <Routes>
            <Route path = '/main' element = {<MainPage />} />
            <Route path = '/searchPage' element = {<SearchPage />} />
          </Routes>

          <Footer />   
        </Router>
      </div>
  );
}

export default App;
