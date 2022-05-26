import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Header from './components/MainPage/Header/Header';
import Footer from './components/Footer/Footer';
import ResultPage from './components/SearchResultPage/ResultPage';
import PersonalAccount from './components/PersonalAccount/PersonalAccount';
import BecomeAhost from './components/BecomeAhost/BecomeAhost';
import OnePlaceInfo from './components/OnePlaceInfo/OnePlaceInfo';
import Payment from './components/Payment/Payment';

function App() {

  return (
      <div className="App">
        <Router>
          <Header />

          <Routes>
            <Route path = '/' element = {<MainPage />} />
            <Route path = '/personal-account' element = {<PersonalAccount />} />
            <Route path = '/become-a-host' element = {<BecomeAhost />} />
            <Route path = '/placeInfo' element = {<OnePlaceInfo />} />
            <Route path = '/searchPage' element = {<ResultPage />} />
            <Route path = '/catalogue' element = {<ResultPage />} />
            <Route path = '/payment' element = {<Payment />} />
          </Routes>
  
          <Footer />   
        </Router>
      </div>
  );
}

export default App;
