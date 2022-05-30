import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import s from './OfferCard.module.css';
import calendarCheck from "../../../assets/icons/calendarCheck.svg"
import axios from "axios";
import {Link} from 'react-router-dom';




export default function OfferContainer () {

    const [list, setList] = useState([])

    function getList() {
        axios.get("http://kaiaman.pythonanywhere.com/api/booking/apartments/")
        .then(response => setList (response.data))
    }

    useEffect(getList, [])



    return (
            <div className={s.offerContainer}>
                {list.map((place) => (
                <div className={s.innerOfferContainer}>
                    <div className={s.offerCardFront}>
                        <div className={s.cardImage}>
                            <img src={place.linkImg[0]} alt={place.title}/>
                        </div>
                        <div className={s.cardInfo}>
                            <h3>{place.title}</h3>
                            <p className={s.placeInfo}>{place.guest} гость &bull; {place.bedroom} спальня &bull; {place.beds} кроватей &bull; {place.bathroom} ванна</p>
                            <h4>{place.price} $/ночь</h4>
                        </div>
                    </div>                 
                    <div className={s.offerCardBack}>
                        <div className={s.cardBack}>
                            <img src={calendarCheck} alt="" />
                            <button className={s.secondaryBtn}><Link style={{textDecoration: 'none', color: 'inherit'}} to='/place-info'>Узнать подробнее</Link></button>
                        </div>
                        <div className={s.cardInfo}>
                            <h3>{place.title}</h3>
                            <p className={s.placeInfo}>{place.guest} гость &bull; {place.bedroom} спальня &bull; {place.beds} кроватей &bull; {place.bathroom} ванна</p>
                            <h4>{place.price} $/ночь</h4>
                        </div>
                    </div>                 

                </div>))}
            </div>
        
    )
}