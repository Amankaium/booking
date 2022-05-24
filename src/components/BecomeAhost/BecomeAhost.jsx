import React, { useState } from "react";
import s from "./BecomeAhost.module.css"
import styles from "../../App.module.css"
import wifi from "../../assets/icons/wifi.svg"
import tv from "../../assets/icons/tv.svg"
import ktchn from "../../assets/icons/kitchen.svg"
import washmash from "../../assets/icons/washingmachine.svg"
import ac from "../../assets/icons/aircon.svg"
import medicine from "../../assets/icons/medicine.svg"


const BecomeAhost = () => {

    const[active, setActive] = useState(false)
    const handleClick = () => {
        setActive(!active)
    }
    const[active2, setActive2] = useState(false)
    const handleClick2 = () => {
        setActive2(!active2)
    }
    const[active3, setActive3] = useState(false)
    const handleClick3 = () => {
        setActive3(!active3)
    }
    const[active4, setActive4] = useState(false)
    const handleClick4 = () => {
        setActive4(!active4)
    }
    const[active5, setActive5] = useState(false)
    const handleClick5 = () => {
        setActive5(!active5)
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
    const wifiHandleClick = () => {
        setWifiActive(!wifiActive)
    }
    const[tvActive, setTvActive] = useState(false)
    const tvHandleClick = () => {
        setTvActive(!tvActive)
    }
    const[ktchnActive, setKtchnActive] = useState(false)
    const ktchnHandleClick = () => {
        setKtchnActive(!ktchnActive)
    }
    const[wshActive, setWshActive] = useState(false)
    const wshHandleClick = () => {
        setWshActive(!wshActive)
    }
    const[acActive, setAcActive] = useState(false)
    const acHandleClick = () => {
        setAcActive(!acActive)
    }
    const[drgActive, setDrgActive] = useState(false)
    const drgHandleClick = () => {
        setDrgActive(!drgActive)
    }

    return (
        <div className={ s.property }>
            <h3 className={ s.propertyTitle }>
                Какое у Вас жилье?
            </h3>
            <form className={ s.propertyGroup }>
                <div className={ s.propertyType }>
                    <div className={ s.propertyItem } onClick={handleClick} 
                    style={{
                        backgroundColor: active ? 'rgb(243, 240, 240)' : '',
                        border: active ? "1px solid black" : '1px solid lightgrey'
                    }}>Комната</div>

                    <div className={ s.propertyItem } onClick={handleClick2} 
                    style={{
                        backgroundColor: active2 ? 'rgb(243, 240, 240)' : '',
                        border: active2 ? "1px solid black" : '1px solid lightgrey'
                    }}>Квартира</div>

                    <div className={ s.propertyItem } onClick={handleClick3} 
                    style={{
                        backgroundColor: active3 ? 'rgb(243, 240, 240)' : '',
                        border: active3 ? "1px solid black" : '1px solid lightgrey'
                    }}>Частный дом</div>

                    <div className={ s.propertyItem } onClick={handleClick4} 
                    style={{
                        backgroundColor: active4 ? 'rgb(243, 240, 240)' : '',
                        border: active4 ? "1px solid black" : '1px solid lightgrey'
                    }}>Место в хостеле</div>

                    <div className={ s.propertyItem } onClick={handleClick5} 
                    style={{
                        backgroundColor: active5 ? 'rgb(243, 240, 240)' : '',
                        border: active5 ? "1px solid black" : '1px solid lightgrey'
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
                                <div>{counter}</div>
                                <div className={s.sign} onClick={increment}>+</div>
                            </div>                           
                            <div className={s.quantityItem}>
                                <div className={s.sign} onClick={decrement2}>-</div>
                                <div>{counter2}</div>
                                <div className={s.sign} onClick={increment2}>+</div>
                            </div>                           
                            <div className={s.quantityItem}>
                            <div className={s.sign} onClick={decrement3}>-</div>
                                <div>{counter3}</div>
                                <div className={s.sign} onClick={increment3}>+</div>
                            </div>                           
                            <div className={s.quantityItem}>
                            <div className={s.sign} onClick={decrement4}>-</div>
                                <div>{counter4}</div>
                                <div className={s.sign} onClick={increment4}>+</div>
                            </div>       
                        </div>
                    </div>
                </div>

                <div className={s.location}>
                    <input className={s.locationDetail} type="text" placeholder="Улица, дом" required />
                    <input className={s.locationDetail} type="text" placeholder="Квартира" required />
                    <input className={s.locationDetail} type="text" placeholder="Город" required />
                    <input className={s.locationDetail} type="text" placeholder="Страна/регион" required />
                </div>
            </form>
            <hr />

            <h3 className={ s.title }>Вы предлагаете эти популярные среди гостей удобства?</h3>  
            <div className={ s.convenience }>
                <div className={ s.convenienceItem } onClick={wifiHandleClick} 
                    style={{
                        border: wifiActive ? "1px solid black" : '1px solid lightgrey'
                    }}>
                        <img className={ s.convenienceIcon } src={wifi} alt="wifiIcon" />
                        WI-FI
                    </div>
                <div className={ s.convenienceItem } onClick={tvHandleClick} 
                    style={{
                        border: tvActive ? "1px solid black" : '1px solid lightgrey'
                    }}>
                        <img className={ s.convenienceIcon } src={tv} alt="tvIcon" />
                        Телевизор</div>
                <div className={ s.convenienceItem } onClick={ktchnHandleClick} 
                    style={{
                        border: ktchnActive ? "1px solid black" : '1px solid lightgrey'
                    }}>
                        <img className={ s.convenienceIcon } src={ktchn} alt="ktchnIcon" />
                        Кухня</div>
                <div className={ s.convenienceItem } onClick={wshHandleClick} 
                    style={{
                        border: wshActive ? "1px solid black" : '1px solid lightgrey'
                    }}>
                        <img className={ s.convenienceIcon } src={washmash} alt="washingMashineIcon" />
                        Стиральная машина</div>
                <div className={ s.convenienceItem } onClick={acHandleClick} 
                    style={{
                        border: acActive ? "1px solid black" : '1px solid lightgrey'
                    }}>
                        <img className={ s.convenienceIcon } src={ac} alt="airConditionerIcon" />
                        Кондиционер</div>
                <div className={ s.convenienceItem } onClick={drgHandleClick} 
                    style={{
                        border: drgActive ? "1px solid black" : '1px solid lightgrey'
                    }}>
                        <img className={ s.convenienceIcon } src={medicine} alt="medicineIcon" />
                        Аптечка</div>
            </div>   
            <hr />

            <h3 className={ s.title }>Добавьте фотографии</h3>                
            <div className={ s.photos }>
                <p><span className={ s.photoText }>Добавьте фотографии сюда</span></p>
                <form action="/action_page.php" className={ s.photoLoad }>
                    <input type="file" id="myFile" name="filename" />
                </form>
            </div> 
            <hr />

            <h3 className={ s.title }>Добавьте заголовок</h3> 
            <textarea className={ s.adTitle }name="" id="" cols="100" rows="10" placeholder="Например: Прекрасный загородный дом с видом на горы"></textarea>
            <hr />

            <h3 className={ s.title }>Добавьте описание</h3> 
            <textarea className={ s.description }name="" id="" cols="100" rows="10" placeholder="Например: Расслабьтесь и забудьте о тревогах в тихом оазисе."></textarea>
            <hr />

            <h3 className={ s.title }>Цена за 1 ночь</h3>
            <input className={ s.price } type="number" placeholder="100 Сом" />
            <hr />

            <p className={ s.important }><span className={ s.alert }>Важная информация.</span> Соблюдайте <a href="#">местное законодательство</a>, а также ознакомьтесь с <a href="#">Политикой недискриминации Airbnb</a> и информацией о <a href="#">сборах с гостей и хозяев</a>. Установите <a href="#">правила отмены</a> после публикации объявления.</p>

            <button className={ `${styles.primaryBtn} ${s.Btn}` }>Сохранить объявление</button>
        </div>
        
    )
}

export default BecomeAhost;