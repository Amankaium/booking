import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Header from './components/MainPage/Header/Header';
import Footer from './components/Footer/Footer';
import ResultPage from './components/SearchResultPage/ResultPage';
import OfferBlock from './components/OfferBlock/OfferBlock';
import OnePlaceInfo from './components/OnePlaceInfo/OnePlaceInfo';

function App() {

  return (
      <div className="App">
        <Router>
          <Header />

          <Routes>
            <Route path = '/searchPage' element = {<ResultPage />} />
            <Route path = '/' element = {<MainPage />} />
          </Routes>
          <OnePlaceInfo/>
          <Footer />   
        </Router>
      </div>
  );
}

export default App;
