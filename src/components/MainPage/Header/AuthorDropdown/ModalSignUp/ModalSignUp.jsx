import React from "react";
import s from "./ModalSignUp.module.css";
import styles from "../../../../../App.module.css";
import close from "../../../../../assets/icons/close.svg"
import FB from "../../../../../assets/icons/modalFacebook.svg"
import Google from "../../../../../assets/icons/ModalGoogle.svg"
import Apple from "../../../../../assets/icons/ModalApple.svg"
import Mail from "../../../../../assets/icons/ModalMail.png"


const Modal = ({toggleModalSignUp, register, user, updateInput}) => {
    return (
        <div className={s.modal}>
            <div className={s.overlay} >
                <div className={s.modalContent}>
                    <div className={s.modalText}>
                        <p className={s.welcome}>Добро пожаловать в KONOO!</p>

                        <input className={s.modalInput} type="text" placeholder="Ваше имя" name="first_name" required
                            value={user.first_name ?? ""} onChange={updateInput} />

                        <input className={s.modalInput} type="text" placeholder="Ваша фамилия" name="last_name" required
                            value={user.last_name ?? ""} onChange={updateInput} />

                        <input className={s.modalInput} type="email" placeholder="Ваша электронная почта" name="email" required
                            value={user.email ?? ""} onChange={updateInput} />

                        <input className={s.modalInput} type="text" placeholder="Логин" name="username" required
                            value={user.username ?? ""} onChange={updateInput} />

                        <input className={s.modalInput} type="password" placeholder="Пароль" name="password" required
                            value={user.password ?? ""} onChange={updateInput} />

                        <p className={s.modalText}>Мы позвоним вам или отправим SMS, чтобы подтвердить номер телефона. <br />
                            Применяются стандартные условия вашего тарифа на прием сообщений и передачу данных. <br />
                            Политика конфиденциальности</p>
                        <button className={`${styles.primaryBtn} ${s.modalBtn}`}
                            onClick={register}>Продолжить</button>

                        <p>или</p>

                        <button className={s.signWithBtn} onClick={e => toggleModalSignUp(e)}>
                            <img className={s.signWithIcon} src={FB} alt="facebookIcon" />
                            <a className={s.signWithLink} href="#">С помощью Facebook</a>
                        </button>
                        <button className={s.signWithBtn} onClick={e => toggleModalSignUp(e)}>
                            <img className={s.signWithIcon} src={Google} alt="GoogleIcon" />
                            <a className={s.signWithLink} href="#">С помощью Google</a>
                        </button>
                        <button className={s.signWithBtn} onClick={e => toggleModalSignUp(e)}>
                            <img className={s.signWithIcon} src={Apple} alt="AppleIcon" />
                            <a className={s.signWithLink} href="#">Продолжить с Apple</a>
                        </button>
                        <button className={s.signWithBtn} onClick={e => toggleModalSignUp(e)}>
                            <img className={s.signWithIcon} src={Mail} alt="MailIcon" />
                            <a className={s.signWithLink} href="#">С помощью эл.почты</a>
                        </button>
                    </div>
                    <div className={s.closeModal} onClick={e => toggleModalSignUp(e)}><img src={close} alt="closeMark" /></div>
                </div>
            </div>
        </div>
    )
}

export default Modal;