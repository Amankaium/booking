import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import {  } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainPage />
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
