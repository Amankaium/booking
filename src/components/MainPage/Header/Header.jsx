import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import Logo from "../../../assets/icons/logo.svg";
import Dropdown from '../Header/Dropdown/Dropdown';


const Header = () => {

    return (
        <nav className={s.header}>
            <NavLink className={s.link} to='/'>
                <img className={s.headerLogo} src={ Logo } alt="logo" />
            </NavLink>
            <div className={s.headerNav}>
                <NavLink className={navData => navData.isActive ? s.active : s.link} to='/rent'>
                    <div>Сдать жилье</div>
                </NavLink>
                <NavLink className={navData => navData.isActive ? s.active : s.link} to='/сatalogue' >
                    <div>Каталог</div>
                </NavLink>
                <NavLink className={navData => navData.isActive ? s.active : s.link} to='/personalAccount' >
                    <div>Личный кабинет</div>
                </NavLink>
                <NavLink className={navData => navData.isActive ? s.active : s.link} to='/'>
                    <Dropdown />
                </NavLink>                             
            </div>            
        </nav>
    )
}

export default Header;