import React from 'react';
import s from './MainPage.module.css';
import Header from './../MainPage/Header/Header';
import SearchPanel from './../MainPage/SearchPanel/SearchPanel';


const MainPage = () => {
    return (
        <div className={s.mainPage}>
            <div className={s.header}>
                <Header /> 
            </div>
            <div className={s.search}>
                <SearchPanel />
            </div>           
        </div>
    )
}

export default MainPage;