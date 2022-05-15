import React, { useState } from 'react';
import s from './When.module.css';
import when from "../../../../assets/icons/when.svg";
import Search from './Search/Search';


const When = () => {
    const[showWhen, setShowWhen] = useState(false)

    return (  
        <div className={s.whenCalender}>
            <p className={s.caption} >Прибытие/Выезд</p>
            <img className={s.when} src={when} alt="calender-icon" />
            <input className={s.whenInput} type="text" name='date' placeholder='Когда?' onClick={() => setShowWhen(!showWhen)} />
            {showWhen && (
                <div className={s.dropdownContent}>
                    <Search />
                </div>
            )}
        </div>
    )
}

export default When;