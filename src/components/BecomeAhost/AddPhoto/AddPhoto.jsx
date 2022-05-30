import React, {useState} from "react";
import s from "./AddPhoto.module.css"


const AddPhoto = (props) => {

    function handleImageChange(event) {
        props.setPlace({
            ...props.place,
            photo: event.target.files[0]
        })
    }

    
    return (
        <div>
            <div className={ s.photos }>
                <p><span className={ s.photoText } value ={props.place.photo} >Добавьте фотографии сюда</span></p>
                <input  className={ s.photoLoad } name="photo" type="file" onChange={handleImageChange}/>
                {/* <div action="/action_page.php" className={ s.photoLoad }>
                    <input type="file" id="myFile" name="filename" />
                </div> */}
            </div>
        </div>
        
    )
}

export default AddPhoto;