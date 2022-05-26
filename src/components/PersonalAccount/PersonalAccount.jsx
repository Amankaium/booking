import React from "react";
import { Link } from 'react-router-dom';
import s from "./PersonalAccount.module.css"


const PersonalAccount = () => {
    return (
        <div className={ s.mainWrap }>
            <div className={ s.header }>
                <Link to="/my-trips" className={ s.myTrips }>
                    Мои поездки
                </Link>
                <Link to="/reservations" className={  s.reservations }>
                    Бронирование Вашего жилья
                </Link>
                <Link to="/my-list" className={  s.myList }>
                    Мои объявления
                </Link>
                <Link to="/become-a-host" className={ s.becomeAhost }>
                    Создать новое объявление
                </Link>
                <Link to="/my-profile" className={ s.myProfile }>
                    Мой профиль
                </Link>
            </div>
        </div>
    )
}

export default PersonalAccount;