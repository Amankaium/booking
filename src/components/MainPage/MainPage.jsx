import React from 'react';
import s from './MainPage.module.css';
import Header from './../MainPage/Header/Header';
import Title from './../MainPage/Title/Title';
import SearchPanel from './../MainPage/SearchPanel/SearchPanel';


const MainPage = () => {
    return (
        <div className={s.mainPage}>
           <Header /> 
           <Title />
           <SearchPanel />
        </div>
    )
}

export default MainPage;