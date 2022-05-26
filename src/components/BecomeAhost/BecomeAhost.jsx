import React, { useState } from "react";
import axios from "axios";
import s from "./BecomeAhost.module.css"
import styles from "../../App.module.css"
import wifi from "../../assets/icons/wifi.svg"
import tv from "../../assets/icons/tv.svg"
import ktchn from "../../assets/icons/kitchen.svg"
import washmash from "../../assets/icons/washingmachine.svg"
import ac from "../../assets/icons/aircon.svg"
import medicine from "../../assets/icons/medicine.svg"


const BecomeAhost = () => {

    const [place, setPlace] = useState({
        type: "",
        guest: "0",
        bed: "0",
        room:"0",
        bath: "",
        city: "",
        building: "",
        flat: "",
        wifi: "",
        tv: "",
        kitchen: "",
        washmash: "",
        conditioner: "",
        medicine: "",
        photo: "",
        title: "",
        description: "",
        price: "0",
    })

    const[active, setActive] = useState("");

    const handleClick = (type) => {
        setActive(type)
        setPlace({...place, type: type})
    }

    const[counter, setCounter] = useState(1)
    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }

    const[counter2, setCounter2] = useState(1)
    const increment2 = () => {
        setCounter2(counter2 + 1)
    }
    const decrement2 = () => {
        setCounter2(counter2 - 1)
    }

    const[counter3, setCounter3] = useState(1)
    const increment3 = () => {
        setCounter3(counter3 + 1)
    }
    const decrement3 = () => {
        setCounter3(counter3 - 1)
    }

    const[counter4, setCounter4] = useState(1)
    const increment4 = () => {
        setCounter4(counter4 + 1)
    }
    const decrement4 = () => {
        setCounter4(counter4 - 1)
    }

    const[wifiActive, setWifiActive] = useState(false)
    const[tvActive, setTvActive] = useState(false)
    const[ktchnActive, setKtchnActive] = useState(false)
    const[wshActive, setWshActive] = useState(false)
    const[acActive, setAcActive] = useState(false)
    const[drgActive, setDrgActive] = useState(false)

    const HandleClick = () => {
        setWifiActive(!wifiActive)
        setTvActive(!tvActive)
        setKtchnActive(!ktchnActive)
        setWshActive(!wshActive)
        setAcActive(!acActive)
        setDrgActive(!drgActive)
    }

    function changeGuest(event) {
        setPlace({
            ...place,
            guest: event.target.value
        })
    }
    function changeBed(event) {
        setPlace({
            ...place,
            bed: event.target.value
        })
    }
    function changeRoom(event) {
        setPlace({
            ...place,
            room: event.target.value
        })
    }
    function changeBath(event) {
        setPlace({
            ...place,
            bath: event.target.value
        })
    }
    function changeCity(event) {
        setPlace({
            ...place,
            city: event.target.value
        })
    }
    function changeBuilding(event) {
        setPlace({
            ...place,
            building: event.target.value
        })
    }
    function changeFlat(event) {
        setPlace({
            ...place,
            flat: event.target.value
        })
    }
    function changePhoto(event) {
        setPlace({
            ...place,
            photo: event.target.value
        })
    }
    function changeTitle(event) {
        setPlace({
            ...place,
            title: event.target.value
        })
    }
    function changeDescription(event) {
        setPlace({
            ...place,
            description: event.target.value
        })
    }
    function changePrice(event) {
        setPlace({
            ...place,
            price: event.target.value
        })
    }


    function sendForm(event) {
        event.preventDefault()

        axios.post(
            "http://kaiaman.pythonanywhere.com/api/booking/apartments/",
            place
        ).then(response => {
            console.log(response)
            if (response.status === 201) {
                alert("Ваше жилье добавлено в базу")
                setPlace({
                    type: "",
                        guest: "0",
                        bed: "0",
                        room:"0",
                        bath: "",
                        city: "",
                        building: "",
                        flat: "",
                        wifi: "",
                        tv: "",
                        kitchen: "",
                        washmash: "",
                        conditioner: "",
                        medicine: "",
                        photo: "",
                        title: "",
                        description: "",
                        price: "0",
                })
            }
        }).catch(error => {
            if (error.response.status === 400) {
                alert("Форма заполнена неверно")
            }
        })      
    }

    return (
        <form className={ s.property } onSubmit={sendForm}>
            <h3 className={ s.propertyTitle }>
                Какое у Вас жилье?
            </h3>
            <div className={ s.propertyGroup }>
                <div className={ s.propertyType }>

                    <div className={ s.propertyItem } onClick={() => handleClick ("комната")} 
                    style={{
                        backgroundColor: active === "комната" ? 'rgb(243, 240, 240)' : '',
                        border: active === "комната" ? "1px solid black" : '1px solid lightgrey'
                    }}>Комната</div>

                    <div className={ s.propertyItem } onClick={() => handleClick ("квартира")} 
                    style={{
                        backgroundColor: active === "квартира" ? 'rgb(243, 240, 240)' : '',
                        border: active === "квартира" ? "1px solid black" : '1px solid lightgrey'
                    }}>Квартира</div>

                    <div className={ s.propertyItem } onClick={() => handleClick ("частный дом")} 
                    style={{
                        backgroundColor: active === "частный дом" ? 'rgb(243, 240, 240)' : '',
                        border: active === "частный дом" ? "1px solid black" : '1px solid lightgrey'
                    }}>Частный дом</div>

                    <div className={ s.propertyItem } onClick={() => handleClick ("место в хостеле")} 
                    style={{
                        backgroundColor: active === "место в хостеле" ? 'rgb(243, 240, 240)' : '',
                        border: active === "место в хостеле" ? "1px solid black" : '1px solid lightgrey'
                    }}>Место в хостеле</div>

                    <div className={ s.propertyItem } onClick={() => handleClick ("уникальное жилье")}  
                    style={{
                        backgroundColor: active === "уникальное жилье" ? 'rgb(243, 240, 240)' : '',
                        border: active === "уникальное жилье" ? "1px solid black" : '1px solid lightgrey'
                    }}>Уникальное жилье</div>
                </div>

                <div className={s.moreDetails}>
                    <div className={s.floorPlan}>
                        <div className={s.guest}>
                            <div>Гости</div>
                            <div>Кровати</div>
                            <div>Спальни</div>
                            <div>Ванные</div>
                        </div>
                        <div className={s.quantity}>
                            <div className={s.quantityItem}>
                                <div className={s.sign} onClick={decrement}>-</div>
                                <div value ={place.guest} onChange={changeGuest}>{counter}</div>
                                <div className={s.sign} onClick={increment}>+</div>
                            </div>                           
                            <div className={s.quantityItem}>
                                <div className={s.sign} onClick={decrement2}>-</div>
                                <div value ={place.bed} onChange={changeBed}>{counter2}</div>
                                <div className={s.sign} onClick={increment2}>+</div>
                            </div>                           
                            <div className={s.quantityItem}>
                            <div className={s.sign} onClick={decrement3}>-</div>
                                <div value ={place.room} onChange={changeRoom}>{counter3}</div>
                                <div className={s.sign} onClick={increment3}>+</div>
                            </div>                           
                            <div className={s.quantityItem}>
                            <div className={s.sign} onClick={decrement4}>-</div>
                                <div value ={place.bath} onChange={changeBath}>{counter4}</div>
                                <div className={s.sign} onClick={increment4}>+</div>
                            </div>       
                        </div>
                    </div>
                </div>

                <div className={s.location}>
                    <input className={s.locationDetail} type="text" placeholder="Город" required value ={place.city} onChange={changeCity}/>
                    <input className={s.locationDetail} type="text" placeholder="Дом №" required value ={place.building} onChange={changeBuilding}/>
                    <input className={s.locationDetail} type="text" placeholder="Квартира" required value ={place.flat} onChange={changeFlat}/>
                </div>
            </div>
            <hr />

            <h3 className={ s.title }>Вы предлагаете эти популярные среди гостей удобства?</h3>  
            <div className={ s.convenience }>
                <div className={ s.convenienceItem } onClick={HandleClick} 
                    style={{
                        border: wifiActive ? "1px solid black" : '1px solid lightgrey'
                    }}>
                        <img className={ s.convenienceIcon } src={wifi} alt="wifiIcon" />
                        WI-FI
                    </div>
                <div className={ s.convenienceItem } onClick={HandleClick} 
                    style={{
                        border: tvActive ? "1px solid black" : '1px solid lightgrey'
                    }}>
                        <img className={ s.convenienceIcon } src={tv} alt="tvIcon" />
                        Телевизор</div>
                <div className={ s.convenienceItem } onClick={HandleClick} 
                    style={{
                        border: ktchnActive ? "1px solid black" : '1px solid lightgrey'
                    }}>
                        <img className={ s.convenienceIcon } src={ktchn} alt="ktchnIcon" />
                        Кухня</div>
                <div className={ s.convenienceItem } onClick={HandleClick} 
                    style={{
                        border: wshActive ? "1px solid black" : '1px solid lightgrey'
                    }}>
                        <img className={ s.convenienceIcon } src={washmash} alt="washingMashineIcon" />
                        Стиральная машина</div>
                <div className={ s.convenienceItem } onClick={HandleClick} 
                    style={{
                        border: acActive ? "1px solid black" : '1px solid lightgrey'
                    }}>
                        <img className={ s.convenienceIcon } src={ac} alt="airConditionerIcon" />
                        Кондиционер</div>
                <div className={ s.convenienceItem } onClick={HandleClick} 
                    style={{
                        border: drgActive ? "1px solid black" : '1px solid lightgrey'
                    }}>
                        <img className={ s.convenienceIcon } src={medicine} alt="medicineIcon" />
                        Аптечка</div>
            </div>   
            <hr />

            <h3 className={ s.title }>Добавьте фотографии</h3>                
            <div className={ s.photos }>
                <p><span className={ s.photoText } value ={place.photo} onChange={changePhoto}>Добавьте фотографии сюда</span></p>
                <div action="/action_page.php" className={ s.photoLoad }>
                    <input type="file" id="myFile" name="filename" />
                </div>
            </div> 
            <hr />

            <h3 className={ s.title }>Добавьте заголовок</h3> 
            <textarea className={ s.adTitle }name="" id="" cols="100" rows="10" 
            placeholder="Например: Прекрасный загородный дом с видом на горы"
            value ={place.title} onChange={changeTitle}></textarea>
            <hr />

            <h3 className={ s.title }>Добавьте описание</h3> 
            <textarea className={ s.description }name="" id="" cols="100" rows="10" 
            placeholder="Например: Расслабьтесь и забудьте о тревогах в тихом оазисе."
            value ={place.description} onChange={changeDescription}></textarea>
            <hr />

            <h3 className={ s.title }>Цена за 1 ночь</h3>
            <input className={ s.price } type="number" placeholder="100 Сом" value ={place.price} onChange={changePrice}/>
            <hr />

            <p className={ s.important }><span className={ s.alert }>Важная информация.</span> Соблюдайте <a href="#">местное законодательство</a>, а также ознакомьтесь с <a href="#">Политикой недискриминации KONOO</a> и информацией о <a href="#">сборах с гостей и хозяев</a>. Установите <a href="#">правила отмены</a> после публикации объявления.</p>

            <button className={ `${styles.primaryBtn} ${s.Btn}` }>Сохранить объявление</button>
        </form>
        
    )
}

export default BecomeAhost;