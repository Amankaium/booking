import React, { useState } from 'react';
import s from './GuestsQuantity.module.css';
import quantity from "../../../../assets/icons/quantity.svg";


const GuestsQuantity = () => {
    const[showQuantity, setShowQuantity] = useState(false)
    const[selected, setSelected] = useState("")
    const[adults, setAdults] = useState("")
    const[kids, setKids] = useState("")
    const[infants, setInfants] = useState("")

    return (  
        <div className={s.guestsQuantity}>
            <p className={s.caption} >Количество гостей</p>
            <img className={s.quantity} src={quantity} alt="quests-quantity" />
            <input className={`${s.guestsInput} ${s.quantity}`} type="text" name='guest' placeholder='Сколько?' 
            onClick={() => setShowQuantity(!showQuantity)} value = {`${adults} + ${kids} + ${infants}`} />
            {showQuantity && (
                <div className={s.dropdownContent}>
                    <label htmlFor="adults">Взрослые (от 13 лет):</label>
                    <input min={0} defaultValue={2} type="number" name='adults' 
                    onChange={(e) => setAdults(e.target.value) }/>

                    <label htmlFor="kids">Дети (2 - 12 лет):</label>
                    <input min={0} defaultValue={0} type="number" name='kids' 
                    onChange={(e) => setKids(e.target.value)}
                    />

                    <label htmlFor="infants">Младенцы (до 2 лет):</label>
                    <input min={0} defaultValue={0} type="number" name='infants' 
                    onChange={(e) => setInfants(e.target.value)} />
                </div> 
            )}
        </div>  
    )
}

export default GuestsQuantity;