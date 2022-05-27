import React, {useState} from "react";
import s from "./PlaceLocation.module.css"

const PlaceLocation = (props) => {

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
        <input className={s.locationDetail} type="text" placeholder="Город" required value ={props.place.city} onChange={(e) => changeCity(e)}/>
        <input className={s.locationDetail} type="text" placeholder="Дом №" required value ={props.place.building} onChange={(e) => changeBuilding(e)}/>
        <input className={s.locationDetail} type="text" placeholder="Квартира" required value ={props.place.flat} onChange={(e) => changeFlat(e)}/>
    </div>
}

export default PlaceLocation;
