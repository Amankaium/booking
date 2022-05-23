import React from 'react';
import s from './Payment.module.css';
import card from '../../assets/images/card.png';

const Payment = () => {
    return (
      <div className={s.content}>
        <table className={s.container}> 
        <tr>
            <td>
                <h1 className={s.h1}>Payment options</h1> <br/>
                <a className={s.a} href='./PaymentPage'>Credit card</a>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a className={s.a} href='./PaymentPage'>Online baning</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a className={s.a} href='./PaymentPage'>Payment partners</a>
            </td>
            
        </tr>

        <tr>
            <td>
            <br/> <br/><br/> <img src={card} width='60%'/>
            </td>
            <td className={s.pad}>
            <br/><br/><br/>
                <h1 className={s.h1}>Booking summary</h1>    
            </td>
        </tr>

        <tr>
            <td> <br/><br/>
                <b>Cardholder name</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className={s.input} type="text" placeholder="Ryspaev Baiysh"/>
            </td>   
            <td width="50%" className={s.font}> <br/>
                <p>Hotel free - 2 adult &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 120$</p>  <br/>  
                <p>Taxes and fees &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10.60$</p>  
            </td>      
        </tr>

        <tr>
            <td> <br/><br/>
                <b>Card number</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className={s.input} type="password" placeholder="1111-2222-3333-4444 "/>
            </td>
            <td className={s.ccv}><br/>
                <b>Subtotal 130.60$</b>      
            </td>
        </tr>

        <tr>
            <td className={s.cvv}><br/><br/>
                <b>CVV</b>&nbsp;
                <input className={s.input} type="password " placeholder="1234 "/>
            </td>
            <td className={s.font}>
                <p>Service taxes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 4.20$</p>          
            </td>
        </tr>

        <tr>
            <td className={s.cv}><br/><br/>
                <b>MM/YY</b>&nbsp;
                <input className={s.input} type="email " placeholder="18.08.2020 "/>
            </td>
            <td ClassName={s.ccv}><br/><br/>
                <h1 className={s.h1}>Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 134.80$</h1>
            </td>
        </tr>

        <tr>
            <td> 
            <br/><br/><br/><br/>
               <h3>Contact information</h3>
            </td>
            <td>
                 <br/><br/><br/><br/>
                <button type="submit" className={s.submit}>Pay now</button>
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
                <br/><b>Phone number</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className={s.input} type="text" placeholder="+996707000000"/>
            </td>
        </tr>
        
        <tr>
            <td>
                <br/><br/><br/>
                <input className={s.input} type="checkbox"/>  &nbsp;&nbsp;&nbsp;&nbsp;
                <b className={s.check}>I accept with term and conditions</b>
                <br/><br/><br/><br/><br/>
            </td>
        </tr>
    </table> 
      </div>  
    )
}

export default Payment;