import React from "react";
import s from './OnePlaceInfo.css';
import './OnePlaceInfo.css';
import { rentData } from "../OfferBlock/OfferCard/data";

export default function OnePlaceInfo() {
    

    return(
        <div className={s.placeContainer}>
            {}
            {/* <ImageSlider /> */}
            
                <div className={s.placeInfoContainer}>
                    <div className={s.placeTitle}>Place Title</div>
                    <div className={s.placeInfo}>Place Info</div>
                    <div className={s.placeDescription}></div>
                    <hr/>
                    <div className={s.extraInformation}>
                        <h3>Какие удобства вас ждут?</h3> 
                        <div className={s.extraInfoTypes}>
                            <div className={s.infoItem}>
                                <img />
                                <span></span>
                            </div>
                        </div>
                    </div>


                </div>

                <div className={s.detailContainer}>
                    <div className={s.placePrice}><b>$</b>/ночь</div>
                </div>

            

        </div>
    )
}
