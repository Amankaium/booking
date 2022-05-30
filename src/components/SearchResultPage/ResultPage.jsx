import React, {useState, useEffect} from 'react';
import s from './ResultPage.module.css';
import SearchCard from './SearchCard/SearchCard';
import axios from 'axios';



function CardList() {
    const [list, setList] = useState([])

    function getList() {
        axios.get("http://kaiaman.pythonanywhere.com/api/booking/apartments/")
            .then(response => setList (response.data))
    }

    useEffect(getList, [])

    return (
        <div className={s.resultWrapper}>
            <div className={s.subHeader}>
                <button>Выгодные предложения</button>
                <button>Новые</button>
                <button>По региону</button>
            </div>
                <div className={s.resultStatus}>Найдено 0 вариантов</div>
            <div className={s.resultList}>
                {list.map((place) => <SearchCard place={place} key={place.id}/>)}
            
                
            </div>
            {/* <div className='map'>Место для карты</div> */}
        </div>
    )
}

export default CardList