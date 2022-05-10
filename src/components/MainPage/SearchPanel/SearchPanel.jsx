import React from 'react';
import s from './SearchPanel.module.css';
import SearchBtn from "../../../assets/icons/search_btn.svg";
import location from "../../../assets/icons/location.svg";
import when from "../../../assets/icons/when.svg";
import quantity from "../../../assets/icons/quantity.svg";


const SearchPanel = () => {
    return (  
        <div className={s.search}>
            <form className={s.form}>
                <div className={s.formItem}>
                    <p className={s.caption} >Местоположение</p>
                    <img className={s.location} src={location} alt="locaton-icon" />
                    <input type="text" name='city' placeholder='Куда едете?' />
                </div>
                <div className={s.formItem}>
                    <p className={s.caption} >Прибытие/Выезд</p>
                    <img className={s.when} src={when} alt="calender-icon" />
                    <input className={s.input} type="text" name='date' placeholder='Когда?' />
                </div> 
                <div className={s.formItem}>
                    <p className={s.caption} >Количество гостей</p>
                    <img className={s.quantity} src={quantity} alt="quests-quantity" />
                    <input className={`${s.input} ${s.quantity}`} type="text" name='guest' placeholder='Сколько?' />
                </div> 
                <div className={s.formItem}>
                    <img className={s.searchImg} src={ SearchBtn } alt="search-button" />
                </div>                 
            </form>
        </div>   
        
    )
}

export default SearchPanel;