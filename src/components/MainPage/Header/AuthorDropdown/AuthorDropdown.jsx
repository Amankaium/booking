import React, { useState, useContext } from "react";
import s from "./AuthorDropdown.module.css";
import { LoginContext } from "../../../../App";
import ModalSignUp from "./ModalSignUp/ModalSignUp";
import ModalSignIn from "./ModalSignIn/ModalSignIn";

const AuthorDropdown = ({ functionForTokenUpdate, setLogin }) => {
    const [isActive, setIsActive] = useState(false)
    const [modalSignUp, setModalSignUp] = useState(false);
    const [modalSignIn, setModalSignIn] = useState(false);


    const toggleModalSignUp = () => {
        setModalSignUp(!modalSignUp)
    }

    const toggleModalSignIn = () => {
        setModalSignIn(!modalSignIn)
    }

    const SignOut = () => {
        setLogin(false)
        functionForTokenUpdate("")
    }


    const UserLogin = useContext(LoginContext)

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
        <form className={s.dropdown}>
            {UserLogin ? (
                <div className={s.dropdownBtn} onClick={SignOut}>Выход</div>
            ) : <div className={s.dropdownBtn} onClick={() => setIsActive(!isActive)}>Вход</div>
            }

            {isActive && (
                <div className={s.dropdownContent} onMouseLeave={() => setIsActive(!isActive)}>
                    <div className={s.dropdownItem} onClick={toggleModalSignUp}>
                        Регистрация
                    </div>
                    <div className={s.dropdownItem} onClick={toggleModalSignIn}>
                        Вход
                    </div>
                </div>
            )}

            {modalSignUp && (
                <ModalSignUp toggleModalSignUp={toggleModalSignUp} register={register} user={user} setUser={setUser} updateInput={updateInput} />
            )}

            {modalSignIn && (
                <ModalSignIn toggleModalSignIn={toggleModalSignIn} auth={auth} user={user} setUser={setUser} updateInput={updateInput} />
            )}

        </form>
    )
}

export default AuthorDropdown;