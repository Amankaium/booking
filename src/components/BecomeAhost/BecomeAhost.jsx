import React, { useState } from "react";
import axios from "axios";
import s from "./BecomeAhost.module.css"
import styles from "../../App.module.css"
import PropertyType from "./PropertyType/PropertyType";
import FloorPlan from "./FloorPlan/FloorPlan";
import PlaceLocation from "./PlaceLocation/PlaceLocation";
import Convenience from "./Convenience/Convenience";
import AddPhoto from "./AddPhoto/AddPhoto";
import AddTitle from "./AddTitle/AddTitle";
import AddDescription from "./AddDescription/AddDescription";
import AddPrice from "./AddPrice/AddPrice";
import ImportantInfo from "./ImportantInfo/ImportantInfo";


const BecomeAhost = () => {

    const [place, setPlace] = useState({
        type: "",
        guest: "",
        bed: "",
        room:"",
        bath: "",
        city: "",
        building: "",
        flat: "",
        wifi: "",
        tv: "",
        kitchen: "",
        washmash: "",
        conditioner: "",
        medicine: "",
        photo: "",
        title: "",
        description: "",
        price: "",
    })

    
    function sendForm(event) {
        event.preventDefault()

        axios.post(
            "http://kaiaman.pythonanywhere.com/api/booking/apartments/",
            place
        ).then(response => {
            console.log(response)
            if (response.status === 201) {
                alert("Ваше жилье добавлено в базу")
                setPlace({
                    type: "",
                        guest: "",
                        bed: "",
                        room:"",
                        bath: "",
                        city: "",
                        building: "",
                        flat: "",
                        wifi: "",
                        tv: "",
                        kitchen: "",
                        washmash: "",
                        conditioner: "",
                        medicine: "",
                        photo: "",
                        title: "",
                        description: "",
                        price: "",
                })
            }
        }).catch(error => {
            if (error.response.status === 400) {
                alert("Форма заполнена неверно")
            }
        })      
    }

    return (
        <form className={ s.property } onSubmit={sendForm}>
            <h3 className={ s.propertyTitle }>
                Какое у Вас жилье?
            </h3>
            <div className={ s.propertyGroup }>
                <PropertyType place={place} setPlace={setPlace}/>
                
                <FloorPlan place={place} setPlace={setPlace}/>
                
                <PlaceLocation place={place} setPlace={setPlace}/>
                
            </div>
            <hr />

            <Convenience place={place} setPlace={setPlace}/>            
            <hr />

            <AddPhoto place={place} setPlace={setPlace}/>            
            <hr />

            <AddTitle place={place} setPlace={setPlace}/>            
            <hr />

            <AddDescription place={place} setPlace={setPlace}/>            
            <hr />

            <AddPrice place={place} setPlace={setPlace}/>
            <hr />
            <ImportantInfo place={place} setPlace={setPlace}/>
            
            <button className={ `${styles.primaryBtn} ${s.Btn}` }>Сохранить объявление</button>
        </form>
        
    )
}

export default BecomeAhost;