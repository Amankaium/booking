import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import Logo from "../../../assets/icons/logo.svg";
import Dropdown from '../Header/Dropdown/Dropdown';


const Header = () => {

    return (
        <nav className={s.header}>
            <NavLink className={s.link} to='/main'>
                <img className={s.headerLogo} src={ Logo } alt="logo" />
            </NavLink>
            <div className={s.headerNav}>
                <NavLink className={s.link} to='/rent'>
                    <div className={s.headerRent}>Сдать жилье</div>
                </NavLink>
                <NavLink className={s.link} to='/сatalogue' >
                    <div className={s.headerCabinet}>Каталог</div>
                </NavLink>
                <NavLink className={s.link} to='/personalAccount' >
                    <div className={s.headerCabinet}>Личный кабинет</div>
                </NavLink>
                <NavLink className={s.link} to='/login'>
                    <Dropdown />
                </NavLink>                             
            </div>            
        </nav>
    )
}

export default Header;