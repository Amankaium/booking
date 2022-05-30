import React, { useEffect, useState } from "react";
// import ImageSlider from "./ImageSlider/ImageSlider";
import s from './OnePlaceInfo.module.css';
import st from '../../App.module.css';
import tv from '../../assets/icons/tv.svg';
import aircon from '../../assets/icons/aircon.svg';
import kitchen from '../../assets/icons/kitchen.svg';
import washmach from '../../assets/icons/washingmachine.svg';
import wifi from '../../assets/icons/wifi.svg';
import drug from '../../assets/icons/medicine.svg';
import When from '../MainPage/SearchPanel/When/When';
import GuestQuantity from '../MainPage/SearchPanel/GuestsQuantity/GuestsQuantity';
// import { rentData } from "../OfferBlock/OfferCard/data";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function OnePlaceInfo() {
    const [place, setPlace] = useState([])

    const{id} = useParams()

    function getPlace (){
        axios.get(`http://kaiaman.pythonanywhere.com/api/booking/apartments/${id}`)
        .then(response => setPlace (response.data))
    }
    
    useEffect(getPlace, [])



    return(
        <div className={s.placeContainer}>
            
                <div className={s.slider}>
                    {/* <ImageSlider /> */}
                </div>
                <div className={s.receiptWrapper}>
                    <div className={s.placePrice}><b>{place.price} KGS</b> / ночь</div>
                    <div className={s.datepicker}>
                        <When />
                        <GuestQuantity />
                    </div>
                    <button className={st.primaryBtn}><Link to='/payment' style={{textDecoration: 'none', color: 'inherit'}}>Забронировать</Link></button>
                    <div className={s.priceInfo}>
                        <table>
                            <tr>
                                <td>Цена и количество дней</td>
                                <td>Сумма</td>
                            </tr>
                            <tr>
                                <td>Комиссия за услуги</td>
                                <td>Сумма</td>
                            </tr>
                            <tr className={s.total}>
                                <td><b>Всего</b></td>
                                <td><b>Сумма</b></td>
                            </tr>

                        </table>
                    </div>

                </div>    
                <div className={s.placeInfoWrapper}>
                    <div className={s.placeTitle}>{place.title}</div>
                    <span>{place.country} &bull; {place.city}</span>
                    <div className={s.placeInfo}>{place.guest} гость &bull; {place.room} спальня &bull; {place.bed} кроватей &bull; {place.bath} ванна</div>
                    <hr/>
                    <div className={s.placeDescription}>{place.description}</div>
                    <hr/>
                    <div className={s.extraInformation}>
                        <h3>Какие удобства вас ждут?</h3> 
                        <div className={s.extraInfoTypes}>
                            <div className={s.infoItem}>
                                <div><img  src={tv} alt="tv"/></div>
                                <span>{place.tv} </span>
                            </div>
                            <div className={s.infoItem}>
                                <div><img src={aircon} alt="aircon"/></div>
                                <span>{place.conditioner}</span>
                            </div>
                            <div className={s.infoItem}>
                                <div><img src={kitchen} alt="kitchen"/></div>
                                <span>{place.kitchen} </span>
                            </div>
                            <div className={s.infoItem}>
                                <div><img src={washmach} alt="washmach"/></div>
                                <span>{place.washmash}</span>
                            </div>
                            <div className={s.infoItem}>
                                <div><img src={wifi} alt="wifi"/></div>
                                <span>{place.wifi}</span>
                            </div>
                            <div className={s.infoItem}>
                                <div><img src={drug} alt="drug"/></div>
                                <span>{place.medicine}</span>
                            </div>
                        </div>
                    </div>
                </div>
            

            

        </div>
    )
}
