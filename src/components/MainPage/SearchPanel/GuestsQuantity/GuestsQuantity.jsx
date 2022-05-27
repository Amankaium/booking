import React, { useState, useRef, useEffect } from 'react';
import s from './GuestsQuantity.module.css';
import quantity from "../../../../assets/icons/quantity.svg";


const GuestsQuantity = () => {
    const [open, setOpen] = useState(false)
    const[adults, setAdults] = useState(0)
    const[kids, setKids] = useState(0)
    const[infants, setInfants] = useState(0)

    // get the target element to toggle 
    const refOne = useRef(null)

    useEffect(() => {
        // event listeners
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnClickOutside, true)
    }, [])

    // hide dropdown on ESC press
    const hideOnEscape = (e) => {
        // console.log(e.key)
        if( e.key === "Escape" ) {
            setOpen(false)
        }
    }

    // Hide dropdown on outside click
    const hideOnClickOutside = (e) => {
        // console.log(refOne.current)
        // console.log(e.target)
        if( refOne.current && !refOne.current.contains(e.target) ) {
            setOpen(false)
        }
    }

    return (  
        <div className={s.guestsQuantity}>
            <p className={s.caption} >Количество гостей</p>
            <img className={s.quantity} src={quantity} alt="quests-quantity" />
            <input className={`${s.guestsInput} ${s.quantity}`} type="text" autoComplete="off" name='guest' placeholder='Сколько?' 
            onClick={ () => setOpen(open => !open) } 
            defaultValue = {adults || kids || infants ? `${adults} + ${kids} + ${infants}` : '' } />

            <div ref={refOne}>
                {open && (
                    <div className={s.dropdownContent} >
                        <label htmlFor="adults">Взрослые (от 13 лет):</label>
                        <input min={0} defaultValue={0} type="number" name='adults' 
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
        </div>  
    )
}

export default GuestsQuantity;