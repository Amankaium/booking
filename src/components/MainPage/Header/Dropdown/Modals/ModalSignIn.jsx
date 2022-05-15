import React, { useState } from "react";
import s from "./Modal.module.css"

const ModalSignIn = () => {

    const[modal, setModal] = useState(false);

    return(
        <div className={s.overlay}>
            <div className={s.modalContainer}>
              
            </div>
        </div>
    )
}

export default ModalSignIn;