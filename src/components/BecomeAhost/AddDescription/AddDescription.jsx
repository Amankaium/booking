import React, {useState} from "react";
import s from "./AddDescription.module.css"


const AddDescription = (props) => {

    function changeDescription(event) {
        props.setPlace({
            ...props.place,
            description: event.target.value
        })
    }
    
    return (
        <div>
            <h3 className={ s.title }>Добавьте описание</h3>
            <textarea className={ s.description }name="" id="" cols="100" rows="10" 
            placeholder="Например: Расслабьтесь и забудьте о тревогах в тихом оазисе."
            value ={props.place.description} onChange={changeDescription}></textarea>
        </div>
    )
}

export default AddDescription;