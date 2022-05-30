import React from 'react';
import s from './Payment.module.css';
import card from '../../assets/images/card.png';

const Payment = () => {
    return (
      <div className={s.content}>
        <table className={s.container}> 
        <tr>
            <td>
                <p className={s.title}>Варианты оплаты</p> <br/>
                <a className={s.a} href='./Payment'>Кредитная карта</a>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a className={s.a} href='./Payment'>Онлайн банкинг</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a className={s.a} href='./Payment'>Платежные партнеры</a>
            </td>
            
        </tr>

        <tr>
            <td>
            <br/> <br/><br/> <img src={card} width='70%'/>
            </td>
            <td className={s.pad}>
            <br/><br/><br/>
            <p className={s.title}>Информация по бронированию</p>    
            </td>
        </tr>

        <tr>
            <td> <br/><br/>
                <b>Имя владельца карты</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className={s.input} type="text" placeholder="Ryspaev Baiysh"/>
            </td>   
            <td width="50%" className={s.font}> <br/>
                <p>Оплата Отелю - 2 взрослых &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 120$</p>  <br/>  
                <p>Налоги и сборы &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10.60$</p>  
            </td>      
        </tr>

        <tr>
            <td> <br/><br/>
                <b>Номер карты</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className={s.input} type="password" placeholder="1111-2222-3333-4444 "/>
            </td>
        </tr>

        <tr>
            <td className={s.cvv}><br/><br/>
                <b>CVV</b>&nbsp;
                <input className={s.input} type="password " placeholder="1234 "/>
            </td>
            <td className={s.font}>
                <p>Налоги на услуги &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 4.20$</p>          
            </td>
        </tr>

        <tr>
            <td className={s.cv}><br/><br/>
                <b>ДД/ММ/ГГ</b>&nbsp;
                <input className={s.input} type="number" placeholder="18.08.2020 "/>
            </td>
            <td ClassName={s.ccv}><br/><br/>
            <p className={s.total}>Oбщий &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 134.80$</p>
            </td>
        </tr>

        <tr>
            <td> 
            <br/><br/><br/><br/>
               <h3>Контакты</h3>
            </td>
            <td>
                 <br/><br/><br/><br/>
                <button type="submit" className={s.submit}>Оплатить</button>
            </td>
        </tr>

        <tr>
            <td className={s.email}><br/><br/>
                <b>E-mail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                <input className={s.input} type="email " placeholder="example@gmail.com "/>
            </td>
        </tr>

        <tr>
            <td>
                <br/><b>Номер телефона</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className={s.input} type="numberphone" placeholder="+996707000000"/>
            </td>
        </tr>
        
        <tr>
            <td>
                <br/><br/><br/>
                <input className={s.input} type="checkbox"/>  &nbsp;&nbsp;&nbsp;&nbsp;
                <b className={s.check}>Я принимаю условия</b>
                <br/><br/><br/><br/><br/>
            </td>
        </tr>
    </table> 
      </div>  
    )
}

export default Payment;