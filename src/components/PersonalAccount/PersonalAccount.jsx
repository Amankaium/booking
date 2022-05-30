import React, {useContext, useState} from "react";
import { Link } from 'react-router-dom';
import s from "./PersonalAccount.module.css"
import styles from "../../App.module.css"
import { LoginContext } from "../../App";
import ModalSignUp from "../MainPage/Header/AuthorDropdown/ModalSignUp/ModalSignUp"
import ModalSignIn from "../MainPage/Header/AuthorDropdown/ModalSignIn/ModalSignIn"


const PersonalAccount = ({ functionForTokenUpdate, setLogin }) => {

    const Login = useContext(LoginContext)

    const [modalSignUp, setModalSignUp] = useState(false);
    const [modalSignIn, setModalSignIn] = useState(false);


    const toggleModalSignUp = () => {
        setModalSignUp(!modalSignUp)
    }

    const toggleModalSignIn = () => {
        setModalSignIn(!modalSignIn)
    }

    const [user, setUser] = useState({})

    function updateInput(event) {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }


    function auth(event) {
        event.preventDefault()
        fetch(
            'http://kaiaman.pythonanywhere.com/api/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify({
                    username: user.username,
                    password: user.password,
                })
            }
        ).then(r => r.json())
            .then(({ key }) => {
                functionForTokenUpdate(key)
                setLogin(true)
                setModalSignIn(!modalSignIn)
            })
    }

    function register(event) {
        event.preventDefault()
        fetch(
            'http://kaiaman.pythonanywhere.com/api/registration',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify({
                    username: user.username,
                    password: user.password,
                    email: user.email,
                })
            }
        ).then(r => r.json())
            .then(() => {
                alert('Success, please login');
                setModalSignUp(false)
                setModalSignIn(true)
            })
    }


    return (
        <div className={ s.mainWrap }>
            {Login ? <div className={ s.header }>
                <Link to="/my-trips" className={ s.myTrips }>
                    Мои поездки
                </Link>
                <Link to="/reservations" className={  s.reservations }>
                    Бронирование Вашего жилья
                </Link>
                <Link to="/my-list" className={  s.myList }>
                    Мои объявления
                </Link>
                <Link to="/become-a-host" className={ s.becomeAhost }>
                    Создать новое объявление
                </Link>
                <Link to="/my-profile" className={ s.myProfile }>
                    Мой профиль
                </Link>
            </div> : <div className={s.btns}><button className={`${styles.primaryBtn} ${s.entryBtn}`} onClick={(e) => { toggleModalSignIn(e) }} >Войдите</button>
            <p>или</p>
            <button className={`${styles.primaryBtn} ${s.entryBtn}`} onClick={(e) => { toggleModalSignUp(e) }} >Зарегистрируйтесь</button>
            </div>
            }


            {modalSignUp && (
                <ModalSignUp toggleModalSignUp={toggleModalSignUp} register={register} user={user} setUser={setUser} updateInput={updateInput} />
            )}

            {modalSignIn && (
                <ModalSignIn toggleModalSignIn={toggleModalSignIn} auth={auth} user={user} setUser={setUser} updateInput={updateInput} />
            )}

        </div>
    )
}

export default PersonalAccount;