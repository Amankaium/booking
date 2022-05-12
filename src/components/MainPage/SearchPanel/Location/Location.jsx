import React, { useState } from 'react';
import s from "./Location.module.css"
import location from "../../../../assets/icons/location.svg";


const Location = ({selected, setSelected}) => {
    const [active, setActive] = useState(false)
    const options = ['Бишкек', 'Ош', 'Джалал-Абад', 'Чолпон-Ата', 'Каракол', 'Талас', 'Нарын']

    return ( 
        <div className={s.location}>
            <p className={s.caption} >Местоположение</p>
            <img className={s.locationImg} src={location} alt="locaton-icon" />
            <input className={s.dropdownBtn} type="text" name='city' placeholder='Куда едете?' value={selected} onClick={ e => setActive(!active) } />
            {active && (
                <div className={s.dropdownContent}>
                    {options.map(option => (
                        <div onClick = { e => { setSelected(option); setActive(false) }}
                            className={s.dropdownItem}>{option}</div>
                    ))}
                </div>
            )}          
        </div>       
    )
}

export default Location;