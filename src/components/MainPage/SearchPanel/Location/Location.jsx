import React, { useState, useRef, useEffect } from 'react';
import s from "./Location.module.css"
import location from "../../../../assets/icons/location.svg";


const Location = ({selected, setSelected}) => {
    const [open, setOpen] = useState(false)
    const options = ['Бишкек', 'Ош', 'Джалал-Абад', 'Чолпон-Ата', 'Каракол', 'Талас', 'Нарын']


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
        <div className={s.location}>
            <p className={s.caption} >Местоположение</p>
            <img className={s.locationImg} src={location} alt="locaton-icon" />
            <input className={s.locationInput} type="text" autoComplete="off" name='city' placeholder='Куда едете?' 
            defaultValue={selected} 
            onClick={ () => setOpen(open => !open) } />
            <div ref={refOne}>
                {open && (
                <div className={s.dropdownContent} >
                    {options.map(option => (
                        <div onClick = { e => { setSelected(option); setOpen(false) }}className={s.dropdownItem}>
                            {option}
                        </div>
                    ))}
                </div>
                )} 
            </div>         
        </div>       
    )
}

export default Location;