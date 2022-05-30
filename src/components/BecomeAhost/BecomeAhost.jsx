import React, { useState, useContext } from "react";
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
import { LoginContext } from "../../App";
import ModalSignUp from "../MainPage/Header/AuthorDropdown/ModalSignUp/ModalSignUp"
import ModalSignIn from "../MainPage/Header/AuthorDropdown/ModalSignIn/ModalSignIn"



const BecomeAhost = ({ functionForTokenUpdate, setLogin }) => {

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



    const [place, setPlace] = useState({
        type: "",
        guest: 0,
        bed: 0,
        room: 0,
        bath: 0,
        city: "",
        building: 0,
        flat: 0,
        wifi: "",
        tv: "",
        kitchen: "",
        washmash: "",
        conditioner: "",
        medicine: "",
        photo: "",
        title: "",
        description: "",
        price: 0,
    })


    function sendForm(event) {
        event.preventDefault()

        axios.post(
            "http://kaiaman.pythonanywhere.com/api/booking/apartments/",
            place,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        ).then(response => {
            console.log(response)
            if (response.status === 201) {
                alert("Ваше жилье добавлено в базу")
                setPlace({
                    type: "",
                    guest: 0,
                    bed: 0,
                    room: 0,
                    bath: 0,
                    city: "",
                    building: 0,
                    flat: 0,
                    wifi: "",
                    tv: "",
                    kitchen: "",
                    washmash: "",
                    conditioner: "",
                    medicine: "",
                    photo: "",
                    title: "",
                    description: "",
                    price: 0,
                })
            }
        }).catch(error => {
            if (error.response.status === 400) {
                alert("Форма заполнена неверно")
            }
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
        <div>
            {Login ? (<form className={s.property} onSubmit={sendForm}>
                <h3 className={s.propertyTitle}>
                    Какое у Вас жилье?
                </h3>
                <div className={s.propertyGroup}>
                    <PropertyType place={place} setPlace={setPlace} />
                    <FloorPlan place={place} setPlace={setPlace} />
                    <PlaceLocation place={place} setPlace={setPlace} />
                </div>
                <hr />
                <Convenience place={place} setPlace={setPlace} />
                <hr />
                <AddPhoto place={place} setPlace={setPlace} />
                <hr />
                <AddTitle place={place} setPlace={setPlace} />
                <hr />
                <AddDescription place={place} setPlace={setPlace} />
                <hr />
                <AddPrice place={place} setPlace={setPlace} />
                <hr />
                <ImportantInfo place={place} setPlace={setPlace} />
                <button className={`${styles.primaryBtn} ${s.Btn}`}>Сохранить объявление</button>
            </form>) :
                (<div className={s.btns}>
                    <button className={`${styles.primaryBtn} ${s.entryBtn}`} onClick={(e) => { toggleModalSignIn(e) }} >Войдите</button>
                    <p>или</p>
                    <button className={`${styles.primaryBtn} ${s.entryBtn}`} onClick={(e) => { toggleModalSignUp(e) }} >Зарегистрируйтесь</button>
                 </div>)
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

export default BecomeAhost;