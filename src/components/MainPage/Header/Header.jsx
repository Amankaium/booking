import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';


const Header = () => {
    return (
        <div className={s.main}>
            <NavLink className={s.link} to='/main'>
                <img className={s.mainLogo} src="./../../../assets/images/logo_file_06.jpg" alt="logo" />
            </NavLink>
            <div className={s.mainNav}>
                <NavLink className={s.link} to='/rent'>
                    <div className={s.mainRent}>Сдать жилье</div>
                </NavLink>
                <NavLink className={s.link} to='/personalAccount' >
                    <div className={s.mainCabinet}>Личный кабинет</div>
                </NavLink>
                <NavLink className={s.link} to='/login'>
                    <div className={s.mainEntry}>Вход</div>
                    <div className={s.dropdown}>
                        <ul>
                            <li><NavLink className={s.link} to='/register'>Регистрация</NavLink></li>
                            <li><NavLink className={s.link} to='/entry'>Вход</NavLink></li>
                        </ul>
                    </div>
                </NavLink>                             
            </div>            
        </div>
    )
}

export default Header;