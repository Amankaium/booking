import React, {useState} from "react";
import s from "./AddPrice.module.css"


const AddPrice = (props) => {

    function changePrice(event) {
        props.setPlace({
            ...props.place,
            price: event.target.value
        })
    }
    
    return (
        <div>
            <h3 className={ s.title }>Цена за 1 ночь</h3>
            <input className={ s.price } type="number" placeholder="100 Сом" value ={props.place.price} onChange={changePrice}/>
        </div>
    )
}

export default AddPrice;