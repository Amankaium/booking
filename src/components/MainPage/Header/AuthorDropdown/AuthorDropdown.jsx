import React, { useState } from "react";
import s from "./AuthorDropdown.module.css";
import styles from "../../../../App.module.css";
import close from "../../../../assets/icons/close.svg"
import FB from "../../../../assets/icons/modalFacebook.svg"
import Google from "../../../../assets/icons/ModalGoogle.svg"
import Apple from "../../../../assets/icons/ModalApple.svg"
import Mail from "../../../../assets/icons/ModalMail.png"

const AuthorDropdown = () => {
    const [isActive, setIsActive] = useState(false)
    const[modal, setModal] = useState(false);

    const toggleModal = (e) => {
        setModal(!modal)
    }

    
    return (
        <div className={s.dropdown}>
            <div className={s.dropdownBtn} onClick={ (e) => setIsActive(!isActive) }>Вход</div>
            {isActive && (
                <div className={s.dropdownContent} onMouseLeave={() => setIsActive(!isActive)}>
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
                    <div className={s.overlay} >
                        <div className={s.modalContent}>
                            <div className={s.modalText}>
                                <p className={s.modalSignin}>Войдите или зарегистрируйтесь</p>
                                <p className={s.welcome}>Добро пожаловать в KONOO!</p>
                                <input className={s.modalInput} type="text" placeholder="Страна/регион" />
                                <input className={s.modalInput} type="phone" placeholder="Номер телефона в формате +996 777 777 777"/>
                                <p className={s.modalText}>Мы позвоним вам или отправим SMS, чтобы подтвердить номер телефона. <br/>
                                Применяются стандартные условия вашего тарифа на прием сообщений и передачу данных. <br/>
                                Политика конфиденциальности</p>
                                <button className={`${styles.primaryBtn} ${s.modalBtn}`} 
                                onClick={ e =>  toggleModal(e)}>Продолжить</button>
                                <p>или</p>
                                <button className={s.signWithBtn} onClick={ e =>  toggleModal(e)}>
                                    <img className={s.signWithIcon} src={FB} alt="facebookIcon" />
                                    <a className={s.signWithLink} href="#">С помощью Facebook</a>
                                </button>
                                <button className={s.signWithBtn} onClick={ e =>  toggleModal(e)}>
                                    <img className={s.signWithIcon} src={Google} alt="GoogleIcon" />
                                    <a className={s.signWithLink} href="#">С помощью Google</a>
                                </button>
                                <button className={s.signWithBtn} onClick={ e =>  toggleModal(e)}>
                                    <img className={s.signWithIcon} src={Apple} alt="AppleIcon" />
                                    <a className={s.signWithLink} href="#">Продолжить с Apple</a>
                                </button>
                                <button className={s.signWithBtn} onClick={ e =>  toggleModal(e)}>
                                    <img className={s.signWithIcon} src={Mail} alt="MailIcon" />
                                    <a className={s.signWithLink} href="#">С помощью эл.почты</a>
                                </button>
                            </div>
                            <div className={s.closeModal} onClick={ e =>  toggleModal(e)}><img src={close} alt="closeMark" /></div>
                        </div>                       
                    </div>    
                </div> 
            )}
                   
        </div>
    )
}

export default AuthorDropdown;