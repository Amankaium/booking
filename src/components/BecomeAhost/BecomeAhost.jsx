import React from "react";
import s from "./BecomeAhost.module.css"
import styles from "../../App.module.css"


const BecomeAhost = () => {
    return (
        <div className={ s.property }>
            <h3 className={ s.propertyTitle }>
                Какое у Вас жилье?
            </h3>
            <form className={ s.propertyGroup }>
                <div className={ s.propertyType }>
                    <div className={ s.propertyItem }>Комната</div>
                    <div className={ s.propertyItem }>Квартира</div>
                    <div className={ s.propertyItem }>Частный дом</div>
                    <div className={ s.propertyItem }>Место в хостеле</div>
                    <div className={ s.propertyItem }>Уникальное жилье</div>
                </div>

                <div className={s.moreDetails}>
                    <div className={s.floorPlan}>
                        <div className={s.guest}>
                            <div>Гости</div>
                            <div>Кровати</div>
                            <div>Спальни</div>
                            <div>Ванные</div>
                        </div>
                        <div className={s.quantity}>
                            <div className={s.quantityItem}>
                                <div className={s.sign}>-</div>
                                <div>1</div>
                                <div className={s.sign}>+</div>
                            </div>                           
                            <div className={s.quantityItem}>
                                <div className={s.sign}>-</div>
                                <div>1</div>
                                <div className={s.sign}>+</div>
                            </div>                           
                            <div className={s.quantityItem}>
                                <div className={s.sign}>-</div>
                                <div>1</div>
                                <div className={s.sign}>+</div>
                            </div>                           
                            <div className={s.quantityItem}>
                                <div className={s.sign}>-</div>
                                <div>1</div>
                                <div className={s.sign}>+</div>
                            </div>       
                        </div>
                    </div>
                </div>

                <form className={s.location}>
                    <input className={s.locationDetail} type="text" placeholder="Улица, дом" />
                    <input className={s.locationDetail} type="text" placeholder="Квартира" />
                    <input className={s.locationDetail} type="text" placeholder="Город" />
                    <input className={s.locationDetail} type="text" placeholder="Страна/регион" />
                </form>
            </form>
            <hr />

            <h3 className={ s.Title }>Вы предлагаете эти популярные среди гостей удобства?</h3>  
            <div className={ s.convenience }>
                <div className={ s.convenienceItem }>WI-FI</div>
                <div className={ s.convenienceItem }>Телевизор</div>
                <div className={ s.convenienceItem }>Кухня</div>
                <div className={ s.convenienceItem }>Стиральная машина</div>
                <div className={ s.convenienceItem }>Кондиционер</div>
                <div className={ s.convenienceItem }>Аптечка</div>
            </div>   
            <hr />

            <h3 className={ s.Title }>Добавьте фотографии</h3>                
            <div className={ s.photos }>
                <p><span className={ s.photoText }>Перетащите фотографии сюда</span></p>
                <p>Добавьте хотя бы 5 фото</p> 
                <form action="/action_page.php" className={ s.photoLoad }>
                    <input type="file" id="myFile" name="filename" />
                </form>
            </div> 
            <hr />

            <h3 className={ s.Title }>Добавьте заголовок</h3> 
            <textarea className={ s.adTitle }name="" id="" cols="100" rows="10" placeholder="Например: Прекрасный загородный дом с видом на горы"></textarea>
            <hr />

            <h3 className={ s.Title }>Добавьте описание</h3> 
            <textarea className={ s.description }name="" id="" cols="100" rows="10" placeholder="Например: Расслабьтесь и забудьте о тревогах в тихом оазисе."></textarea>
            <hr />

            <h3 className={ s.Title }>Цена за 1 ночь</h3>
            <input className={ s.price } type="number" placeholder="100 Сом" />
            <hr />

            <p className={ s.important }><span className={ s.alert }>Важная информация.</span> Соблюдайте <a href="#">местное законодательство</a>, а также ознакомьтесь с <a href="#">Политикой недискриминации Airbnb</a> и информацией о <a href="#">сборах с гостей и хозяев</a>. Установите <a href="#">правила отмены</a> после публикации объявления.</p>

            <button className={ `${styles.primaryBtn} ${s.Btn}` }>Сохранить объявление</button>
        </div>
        
    )
}

export default BecomeAhost;