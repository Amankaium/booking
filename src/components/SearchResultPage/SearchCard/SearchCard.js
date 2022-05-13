import React from 'react';
import'../../../App.css'
import '../ResultPage.css';
import {useState} from 'react';
import ImageSlide from '../ImageSlide';

function SearchCard() {
    const [state, setState] = useState({
        place: {
            placeType: "",
            description: "",
            guest: "0",
            room:"0",
            bed: "0",
            bath: "Ванна",
            kitchen: "Кухня",
            conditioner: "Кондиционер",
            price: "0",
        }
    })


    return (
        <div className='result-card'>
                    <ImageSlide />
                    <div className='card-info'>
                        <div className='rent-type'>rent-type {state.place.placeType}</div>
                        <div className='info-title'>Rent Title {state.place.description}</div>
                        <div className='place-info'>{state.place.guest} гостей &bull; {state.place.room} спален &bull; {state.place.bed} кроватей</div>
                        <div className='place-extra-info'>  {state.place.bath} &bull; {state.place.kitchen} &bull; {state.place.conditioner}</div>
                        <div className='price'>{state.place.price} / ночь</div>
                        <button className='primary-btn'>Reserve</button>
                    </div>
                </div>
    )
}

export default SearchCard