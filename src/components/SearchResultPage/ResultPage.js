import React from 'react';
import s from '../../App.module.css';
import './ResultPage.css';
import SearchCard from './SearchCard/SearchCard';


function CardList() {
    return (
        <div className='result-wrapper'>
            <div className='sub-header'>
                <button>Выгодные предложения</button>
                <button>Новые</button>
                <button>По региону</button>
            </div>
            <div className='result-list'>
                <div className='result-status'>Найдено 0 вариантов</div>
                <SearchCard />
                <SearchCard />
                <SearchCard />
                <SearchCard />
                <SearchCard />
                
            </div>
            <div className='map'>Место для карты</div>
        </div>
    )
}

export default CardList