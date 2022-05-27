import React, {useState} from "react";
import s from "./AddPhoto.module.css"


const AddPhoto = (props) => {

    function changePhoto(event) {
        props.setPlace({
            ...props.place,
            photo: event.target.value
        })
    }
    
    return (
        <div>
            <h3 className={ s.title }>Добавьте фотографии</h3>
            <div className={ s.photos }>
                <p><span className={ s.photoText } value ={props.place.photo} onChange={(e) => changePhoto(e)}>Добавьте фотографии сюда</span></p>
                <div action="/action_page.php" className={ s.photoLoad }>
                    <input type="file" id="myFile" name="filename" />
                </div>
            </div>
        </div>
        
    )
}

export default AddPhoto;