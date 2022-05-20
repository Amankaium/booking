import React from "react";
import s from './OfferCard.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { rentData } from "./data";
import calendarCheck from "../../../assets/icons/calendarCheck.svg"
import {Link} from 'react-router-dom';

export default function OfferCard(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
      };

    return (
        
        <div className={s.offerCardContainer}>
            <Slider {...settings}>
            {rentData.map((item) =>(
                <div className={s.offerContainer}>
                    <div className={s.innerOfferContainer}>
                        <div className={s.offerCardFront}>
                            <div className={s.cardImage}>
                                <img src={item.linkImg} alt={item.title}/>
                            </div>
                            <div className={s.cardInfo}>
                                <h3>{item.title}</h3>
                                <p className={s.placeInfo}>{item.guest} гость &bull; {item.bedroom} спальня &bull; {item.beds} кроватей &bull; {item.bathroom} ванна</p>
                                <h4>{item.price} $/ночь</h4>
                            </div>
                        </div>                 
                        <div className={s.offerCardBack}>
                            <div className={s.cardBack}>
                                <img src={calendarCheck} alt="" />
                                <button className={s.secondaryBtn}><Link style={{textDecoration: 'none', color: 'inherit'}} to='/itemPage'>Узнать подробнее</Link></button>
                            </div>
                            <div className={s.cardInfo}>
                                <h3>{item.title}</h3>
                                <p className={s.placeInfo}>{item.guest} гость &bull; {item.bedroom} спальня &bull; {item.beds} кроватей &bull; {item.bathroom} ванна</p>
                                <h4>{item.price} $/ночь</h4>
                            </div>
                        </div>                 

                    </div>
                </div>
            ))}
            </Slider>
        </div>
    )
}

