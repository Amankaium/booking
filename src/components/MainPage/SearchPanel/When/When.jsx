import React, { useState } from 'react';
import s from './When.module.css';
import when from "../../../../assets/icons/when.svg";
import Search from './Search/Search';


const When = () => {
    const[showWhen, setShowWhen] = useState(false)
    const[startDate, setStartDate] = useState("")
    const[endDate, setEndDate] = useState("")

    // const startDateValue = startDate ? startDate.dateString.slice(0, 1).join(' ') : '';
    // const endDateValue = endDate ? endDate.dateString.slice(0, 1).join(' ') : '';
    // defaultValue={`${startDateValue} ${endDateValue}`}
    return (  
        <div className={s.whenCalender}>
            <p className={s.caption} >Прибытие/Выезд</p>
            <img className={s.when} src={when} alt="calender-icon" />
            <input className={s.whenInput} type="text" name='date' placeholder='Когда?' 
            onClick={() => setShowWhen(!showWhen)} />
            {showWhen && (
                <div className={s.dropdownContent} onMouseLeave={() => setShowWhen(!showWhen)}>
                    <Search setInputFirstDate={setStartDate} setInputLastDate={setEndDate}/>
                </div>
            )}
        </div>
    )
}

export default When;