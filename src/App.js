import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <MainPage />
      <Routes>
        {/* <Route path = "/main" element = {<MainPage />} />
        <Route path = "/rent" element = {<Rent />} />
        <Route path = "/personalAccount" element = {<PersonalAccount />} />
        <Route path = "/login" element = {<Login />} /> */}
      </Routes>
    </div>
  );
}

export default App;
