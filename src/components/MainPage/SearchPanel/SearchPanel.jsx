import React from 'react';
import s from './SearchPanel.module.css';


const SearchPanel = () => {
    return (
        <div className={s.search}>
            <div className={s.caption}>Rent.kg помогает сдавать и арендовать жилье абсолютно бесплатно</div>       
            <form className={s.form}>
                <input type="text" name='city' placeholder='Город' />
                <input type="text" name='date' placeholder='Дата' />
                <input type="text" name='guest' placeholder='Гость' />
                <button>Поиск</button>
            </form>
        </div>
    )
}

export default SearchPanel;