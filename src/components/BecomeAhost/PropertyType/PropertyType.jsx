import React, {useState} from "react";
import s from "./PropertyType.module.css"


const PropertyType = (props) => {

    const[active, setActive] = useState("");

    const handleClick = (type) => {
        setActive(type)
        props.setPlace({...props.place, type: type})
    }


    return (
        <div className={ s.propertyType }>
            <div className={ s.propertyItem } onClick={() => handleClick ("Комната")} 
            style={{
                backgroundColor: active === "Комната" ? 'rgb(243, 240, 240)' : '',
                border: active === "Комната" ? "1px solid black" : '1px solid lightgrey'
            }}>Комната</div>

            <div className={ s.propertyItem } onClick={() => handleClick ("Квартира")} 
            style={{
                backgroundColor: active === "Квартира" ? 'rgb(243, 240, 240)' : '',
                border: active === "Квартира" ? "1px solid black" : '1px solid lightgrey'
            }}>Квартира</div>

            <div className={ s.propertyItem } onClick={() => handleClick ("Частный дом")} 
            style={{
                backgroundColor: active === "Частный дом" ? 'rgb(243, 240, 240)' : '',
                border: active === "Частный дом" ? "1px solid black" : '1px solid lightgrey'
            }}>Частный дом</div>

            <div className={ s.propertyItem } onClick={() => handleClick ("Место в хостеле")} 
            style={{
                backgroundColor: active === "Место в хостеле" ? 'rgb(243, 240, 240)' : '',
                border: active === "Место в хостеле" ? "1px solid black" : '1px solid lightgrey'
            }}>Место в хостеле</div>

            <div className={ s.propertyItem } onClick={() => handleClick ("Уникальное жилье")}  
            style={{
                backgroundColor: active === "Уникальное жилье" ? 'rgb(243, 240, 240)' : '',
                border: active === "Уникальное жилье" ? "1px solid black" : '1px solid lightgrey'
            }}>Уникальное жилье</div>
        </div>
    )
}

export default PropertyType;