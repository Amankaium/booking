import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import Logo from "../../../assets/icons/logo.svg";
import AuthorDropdown from './AuthorDropdown/AuthorDropdown';


const Header = ({functionForTokenUpdate, setLogin}) => {

    return (
        <nav className={s.header}>
            <NavLink className={s.link} to='/'>
                <img className={s.headerLogo} src={ Logo } alt="logo" />
            </NavLink>
            <div className={s.headerNav}>
                <NavLink className={navData => navData.isActive ? s.active : s.link } to='/become-a-host'>
                    <div>Сдать жилье</div>
                </NavLink>
                <NavLink className={navData => navData.isActive ? s.active : s.link} to='/catalogue' >
                    <div>Каталог</div>
                </NavLink>
                <NavLink className={navData => navData.isActive ? s.active : s.link} to='/personal-account' >
                    <div>Личный кабинет</div>
                </NavLink>
                <div className={navData => navData.isActive ? s.active : s.link} >
                    <AuthorDropdown functionForTokenUpdate = {functionForTokenUpdate} setLogin={setLogin}/>
                </div>                             
            </div>            
        </nav>
    )
}

export default Header;