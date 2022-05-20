import React from "react";
import s from './OfferBlock.module.css';
import OfferCard from './OfferCard/OfferCard';



export default function OfferBlock() {
    return (
        <div className={s.offerBlock}>
            <div className={s.aboutBlock}>
                <h2>Выгодные предложения</h2>
                <hr />
                <p className={s.descrip}>Выберите самые выгодные предложения для себя и вашей семьи!</p>
            </div>
            <OfferCard />
            <div className={s.btnContainer}>
                <button className={s.outlineBtn}>Показать еще</button>
            </div>

        </div>
    )
}