import React, { useState } from 'react';
import s from './GuestsQuantity.module.css';
import quantity from "../../../../assets/icons/quantity.svg";


const GuestsQuantity = () => {
    const[showQuantity, setShowQuantity] = useState(false)

    return (  
        <div className={s.guestsQuantity}>
            <p className={s.caption} >Количество гостей</p>
            <img className={s.quantity} src={quantity} alt="quests-quantity" />
            <input className={`${s.input} ${s.quantity}`} type="text" name='guest' placeholder='Сколько?' onClick={() => setShowQuantity(!showQuantity)} />
            {showQuantity && (
                <div className={s.dropdownContent}>
                    <label htmlFor="adult">Взрослые (от 13 лет):</label>
                    <input min={0} defaultValue={2} type="number" name='adult'/>
                    <label htmlFor="kids">Дети (2 - 12 лет):</label>
                    <input min={0} defaultValue={0} type="number" name='kids'/>
                    <label htmlFor="infants">Младенцы (до 2 лет):</label>
                    <input min={0} defaultValue={0} type="number" name='infants'/>
                </div> 
            )}
        </div>  
    )
}

export default GuestsQuantity;