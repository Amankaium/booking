import React from "react";
import { Link } from 'react-router-dom';
import s from "./PersonalAccount.module.css"


const PersonalAccount = () => {
    return (
        <div className={ s.mainWrap }>
            <div className={ s.header }>
                <Link to="/myTrips" className={ s.myTrips }>
                    Мои поездки
                </Link>
                <Link to="/reservations" className={  s.reservations }>
                    Бронирование Вашего жилья
                </Link>
                <Link to="/myList" className={  s.myList }>
                    Мои объявления
                </Link>
                <Link to="/becomeAhost" className={ s.becomeAhost }>
                    Создать новое объявление
                </Link>
                <Link to="/myProfile" className={ s.myProfile }>
                    Мой профиль
                </Link>
            </div>
        </div>
    )
}

export default PersonalAccount;