import React, { useState } from "react";
import s from "./Modal.module.css"
import img from "../../../../../assets/images/bg.png"

const ModalSignIn = () => {

    const [openModal, setOpenModal] = useState(false)

    if(!openModal) return null;
    
    return(
        <div className={s.overlay}>
            <div className={s.modalContainer}>
                <img src={img} alt="modal-image" />
            </div>
        </div>
    )
}

export default ModalSignIn;