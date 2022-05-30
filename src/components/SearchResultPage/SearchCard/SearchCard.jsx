import React from 'react';
import { Link } from 'react-router-dom';
import st from '../../../App.module.css'
import s from './SearchCard.module.css';
import ImageSlide from '../ImageSlide/ImageSlide';

function SearchCard({place}) {
    console.log(place)

    return (
        <div className={s.resultCard}>
                    <ImageSlide />
                    <div className={s.cardInfo}>
                        <div className={s.rentType}>{place.type}</div>
                        <div className={s.infoTitle}>{place.title}</div>
                        <div className={s.placeInfo}>{place.guest} гостей &bull; {place.room} спален &bull; {place.bed} кроватей</div>
                        <div className={s.placeExtraInfo}>  {place.wifi} &bull; {place.kitchen} &bull; {place.conditioner}</div>
                        <div className={s.price}><b>{place.price} KGS</b> / ночь</div>
                        <button className={st.primaryBtn}><Link to={`/place-info/${place.id}/`} style={{textDecoration: 'none', color: 'inherit'}}>Подробнее</Link></button>
                    </div>
                </div>
    )
}

export default SearchCard