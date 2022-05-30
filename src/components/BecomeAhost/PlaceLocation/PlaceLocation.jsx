import React, {useState, useRef, useEffect} from "react";
import s from "./PlaceLocation.module.css"

const PlaceLocation = (props) => {

    const [selected, setSelected] = useState("")

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


    function changeCity(event) {
        props.setPlace({
            ...props.place,
            city: event.target.value
        })
    }

    function changeBuilding(event) {
        props.setPlace({
            ...props.place,
            building: event.target.value
        })
    }
    
    function changeFlat(event) {
        props.setPlace({
            ...props.place,
            flat: event.target.value
        })
    }

    return <div className={s.location}>
                <input className={s.locationDetail} type="text" placeholder="Город" autoComplete="off" required 
                onChange={(e) => changeCity(e)}
                value={ selected } 
                // value = { props.place.city }
                onClick={ () => setOpen(open => !open) } />
                <div ref={refOne}>
                    {open && (
                    <div className={s.dropdownContent} >
                        {options.map(option => (
                            <div onClick = { e => { setSelected(option); setOpen(false) }} className={s.dropdownItem}>
                                {option}
                            </div>
                        ))}
                    </div>
                    )} 
                </div>     
                            
                        
                <input className={s.locationDetail} type="text" placeholder="Дом №" autoComplete="off" required value ={props.place.building} onChange={(e) => changeBuilding(e)}/>
                <input className={s.locationDetail} type="text" placeholder="Квартира № (не обязательно)" autoComplete="off" value ={props.place.flat} onChange={(e) => changeFlat(e)}/>
            </div>
}

export default PlaceLocation;
