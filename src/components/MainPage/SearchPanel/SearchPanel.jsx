import React, { useState } from 'react';
import s from './SearchPanel.module.css';
import SearchBtn from "../../../assets/icons/search_btn.svg";
import Location from './Location/Location';
import When from './When/When';
import GuestsQuantity from './GuestsQuantity/GuestsQuantity';


const SearchPanel = () => {
    const [selected, setSelected] = useState("")

    return (  
        <div className={s.search}>
            <form className={s.form}>
                <div className={s.formItem}>
                    <Location selected = {selected} setSelected = {setSelected} />
                </div>
                <div className={s.formItem}>
                    <When />
                </div> 
                <div className={s.formItem}>
                    <GuestsQuantity />
                </div> 
                <div className={s.formItem}>
                    <img className={s.searchImg} src={ SearchBtn } alt="search-button" />
                </div>                 
            </form>
        </div>   
        
    )
}

export default SearchPanel;