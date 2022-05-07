import React, { useState } from "react";
import s from "./Dropdown.module.css";

const Dropdown = () => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className={s.dropdown}>
            <div className={s.dropdownBtn} onClick={ (e) => setIsActive(!isActive) }>Вход</div>
            {isActive && (
                <div className={s.dropdownContent}>
                    <div className={s.dropdownItem}>
                        Регистрация
                    </div>
                    <div className={s.dropdownItem}>
                        Вход
                    </div>
                </div>
            )}          

        </div>
    )
}

export default Dropdown;