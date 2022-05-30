import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Header from './components/MainPage/Header/Header';
import Footer from './components/Footer/Footer';
import ResultPage from './components/SearchResultPage/ResultPage';
import PersonalAccount from './components/PersonalAccount/PersonalAccount';
import BecomeAhost from './components/BecomeAhost/BecomeAhost';
import OnePlaceInfo from './components/OnePlaceInfo/OnePlaceInfo';
import Payment from './components/Payment/Payment';


export const LoginContext = React.createContext(false);


function App() {
  const [token, setToken] = useState("")

  function updateToken(newToken) {
    setToken(newToken)
  }  

  const[login, setLogin] = useState(false)
  
  return (
      <div className="App">
        <LoginContext.Provider value={login} >
          <Router>
            <Header functionForTokenUpdate={updateToken} setLogin={setLogin}/>

            <Routes>
              <Route path = '/' element = {<MainPage />} />
              <Route path = '/personal-account' element = {<PersonalAccount functionForTokenUpdate={updateToken} setLogin={setLogin}/>} />
              <Route path = '/become-a-host' element = {<BecomeAhost functionForTokenUpdate={updateToken} setLogin={setLogin} />} />
              <Route path = '/place-info/:id' element = {<OnePlaceInfo />} />
              <Route path = '/search-page' element = {<ResultPage />} />
              <Route path = '/catalogue' element = {<ResultPage />} />
              <Route path = '/payment' element = {<Payment />} />
            </Routes>
    
            <Footer />   
          </Router>
        </LoginContext.Provider>
        
      </div>
  );
}

export default App;
