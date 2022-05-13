import React from 'react';
import '../../../App.css';
import './ResultPage.css';


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