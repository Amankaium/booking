import React from 'react';
import s from './MainPage.module.css';
import SearchPanel from './../MainPage/SearchPanel/SearchPanel';
import OfferBlock from '../OfferBlock/OfferBlock';


const MainPage = () => {
    return (
        <div className={s.mainPage}>
            <div className={s.search}>
                <SearchPanel />
            </div>   
            <OfferBlock />
        </div>
    )
}

export default MainPage;