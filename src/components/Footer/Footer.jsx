import React from "react";
import s from "./Footer.module.css";
import footerLogo from "../../assets/icons/footerLogo.svg";
import instagram from "../../assets/icons/instagram.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import telegram from "../../assets/icons/telegram.svg";
import facebook from "../../assets/icons/facebook.svg";
import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footerContent}>
                <NavLink  to='/'>
                    <img className={s.footerLogo} src={footerLogo} alt="footerLogo" />
                </NavLink>
                <ul className={s.footerList}>
                    <NavLink className={navData => navData.isActive ? s.active : s.footerItem} to='/my-trips'>Арендую</NavLink>
                    <NavLink className={navData => navData.isActive ? s.active : s.footerItem} to='/become-a-host'>Сдаю</NavLink>
                    <NavLink className={navData => navData.isActive ? s.active : s.footerItem} to='/catalogue'>Предложения</NavLink>
                </ul>
                <ul className={s.footerList}>
                    <NavLink className={navData => navData.isActive ? s.active : s.footerItem} to='/personal-account'>Личный кабинет</NavLink>
                    <NavLink className={navData => navData.isActive ? s.active : s.footerItem} to='/help'>Помощь</NavLink>
                </ul>
                <div className={s.footerMedia}>
                    <ul>
                        <li>Мы в соцсетях</li>
                    </ul>
                    <div>
                        <a href="#"><img className={s.footerIcon} src={instagram} alt="instagramIcon" /></a>
                        <a href="#"><img className={s.footerIcon} src={whatsapp} alt="whatsappIcon" /></a>
                        <a href="#"><img className={s.footerIcon} src={telegram} alt="telegramIcon" /></a>
                        <a href="#"><img className={s.footerIcon} src={facebook} alt="facebookIcon" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;