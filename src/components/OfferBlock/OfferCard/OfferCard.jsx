import React, { useEffect, useState } from "react";
import s from './OfferCard.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import calendarCheck from "../../../assets/icons/calendarCheck.svg"
import { rentData } from "./data";


export default function OfferCard(){
    const [list, setList] = useState([])

    function getList() {
        axios.get("http://kaiaman.pythonanywhere.com/api/booking/apartments/")
        .then(response => setList (response.data))
    }

    useEffect(getList, [])

    const settings = {
        dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
        
        <div className={s.offerCardContainer}>
            <Slider {...settings}>
            {list.map((place) => ( 
                <div className={s.offerContainer} key={place.id}>
                    <div className={s.innerOfferContainer}>
                        <div className={s.offerCardFront}>
                            <div className={s.cardImage}>
                                <img src="https://images.unsplash.com/photo-1554078140-01f553ad4d40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt={place.title}/>
                            </div>
                            <div className={s.cardInfo}>
                                <h3>{place.title}</h3>
                                <p className={s.placeInfo}>{place.guest} гость &bull; {place.room} спальня &bull; {place.bed} кроватей &bull; {place.bath} ванна</p>
                                <h4><b>{place.price} KGS</b> / ночь</h4>
                            </div>
                        </div>                 
                        <div className={s.offerCardBack}>
                            <div className={s.cardBack}>
                                <img src={calendarCheck} alt="calendar" />
                                <button className={s.secondaryBtn}><Link style={{textDecoration: 'none', color: 'inherit'}} to={`/place-info/${place.id}`}>Узнать подробнее</Link></button>
                            </div>
                            <div className={s.cardInfo}>
                                <h3>{place.title}</h3>
                                <p className={s.placeInfo}>{place.guest} гость &bull; {place.room} спальня &bull; {place.bed} кроватей &bull; {place.bath} ванна</p>
                                <h4><b>{place.price} KGS</b> / ночь</h4>
                            </div>
                        </div>                 

                    </div>
                </div>
            ))}
            </Slider>
        </div>
    )
}

