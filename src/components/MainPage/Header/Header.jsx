import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import Logo from "../../../assets/images/logo.png";
import Dropdown from '../Dropdown/Dropdown';


const Header = () => {

    return (
        <nav className={s.main}>
            <NavLink className={s.link} to='/main'>
                <img className={s.mainLogo} src={ Logo } alt="logo" />
            </NavLink>
            <div className={s.mainNav}>
                <NavLink className={s.link} to='/rent'>
                    <div className={s.mainRent}>Сдать жилье</div>
                </NavLink>
                <NavLink className={s.link} to='/personalAccount' >
                    <div className={s.mainCabinet}>Личный кабинет</div>
                </NavLink>
                <NavLink className={s.link} to='/login'>
                    <Dropdown />
                </NavLink>                             
            </div>            
        </nav>
    )
}

export default Header;