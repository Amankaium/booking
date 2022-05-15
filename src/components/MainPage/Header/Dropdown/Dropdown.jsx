import React, { useState } from "react";
import s from "./Dropdown.module.css";

const Dropdown = () => {
    const [isActive, setIsActive] = useState(false)
    const[modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <div className={s.dropdown}>
            <div className={s.dropdownBtn} onClick={ (e) => setIsActive(!isActive) }>Вход</div>
            {isActive && (
                <div className={s.dropdownContent}>
                    <div className={s.dropdownItem} onClick={toggleModal}>
                        Регистрация
                    </div>
                    <div className={s.dropdownItem} onClick={toggleModal}>
                        Вход
                    </div>
                </div>
            )}  
            {modal && (
                <div className={s.modal}>
                    <div className={s.overlay} onClick={toggleModal}>
                        <div className={s.modalContent}>
                            <div className={s.modalText}>
                                <p className={s.modalSignin}>Войдите или зарегистрируйтесь</p>
                                <h2>Добро пожаловать в KONOO!</h2>
                                <input className={s.modalInput} type="text" placeholder="Страна/регион" />
                                <input className={s.modalInput} type="phone" placeholder="Номер телефона в формате +996 777 777 777"/>
                                <p className={s.modalText}>Мы позвоним вам или отправим SMS, чтобы подтвердить номер телефона. <br/>
                                Применяются стандартные условия вашего тарифа на прием сообщений и передачу данных. <br/>
                                Политика конфиденциальности</p>
                                <button className={s.modalBtn}>Продолжить</button>
                                <p>или</p>
                                <button className={s.signWithBtn}><a href="#">С помощью Facebook</a></button>
                                <button className={s.signWithBtn}><a href="#">С помощью Google</a></button>
                                <button className={s.signWithBtn}><a href="#">Продолжить с Apple</a></button>
                                <button className={s.signWithBtn}><a href="#">С помощью эл.почты</a></button>
                            </div>
                            <div className={s.closeModal} onClick={toggleModal}>X</div>
                        </div>                       
                    </div>    
                </div> 
            )}
                   
        </div>
    )
}

export default Dropdown;