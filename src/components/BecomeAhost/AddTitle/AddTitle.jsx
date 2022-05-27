import React, {useState} from "react";
import s from "./AddTitle.module.css"


const AddTitle = (props) => {

    function changeTitle(event) {
        props.setPlace({
            ...props.place,
            title: event.target.value
        })
    }
    
    return (
        <div>
            <h3 className={ s.title }>Добавьте заголовок</h3>
            <textarea className={ s.adTitle }name="" id="" cols="100" rows="10" 
            placeholder="Например: Прекрасный загородный дом с видом на горы"
            value ={props.place.title} onChange={changeTitle}></textarea>
        </div>
    )
}

export default AddTitle;