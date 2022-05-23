import React from 'react';
import './Payment.css';
import card from '../../assets/images/card.png';

const Payment = () => {
    return (
      <div className='content'>
        <table className='container'> 
        <tr>
            <td>
                <h1>Payment options</h1> <br/>
                <a href='./PaymentPage'>Credit card</a>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href='./PaymentPage'>Online baning</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href='./PaymentPage'>Payment partners</a>
            </td>
            
        </tr>

        <tr>
            <td>
            <br/> <br/><br/> <img src={card} width='60%'/>
            </td>
            <td className='pad'>
            <br/><br/><br/>
                <h1>Booking summary</h1>    
            </td>
        </tr>

        <tr>
            <td> <br/><br/>
                <b>Cardholder name</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className='input' type="text" placeholder="Ryspaev Baiysh"/>
            </td>   
            <td width="50%" className='font'> <br/>
                <p>Hotel free - 2 adult &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 120$</p>  <br/>  
                <p>Taxes and fees &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10.60$</p>  
            </td>      
        </tr>

        <tr>
            <td> <br/><br/>
                <b>Card number</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className='input' type="password" placeholder="1111-2222-3333-4444 "/>
            </td>
            <td className='ccv'><br/>
                <b>Subtotal 130.60$</b>      
            </td>
        </tr>

        <tr>
            <td className='cvv'><br/><br/>
                <b>CVV</b>&nbsp;
                <input className='input' type="password " placeholder="1234 "/>
            </td>
            <td className='font'>
                <p>Service taxes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 4.20$</p>          
            </td>
        </tr>

        <tr>
            <td className='cv'><br/><br/>
                <b>MM/YY</b>&nbsp;
                <input className='input' type="email " placeholder="18.08.2020 "/>
            </td>
            <td ClassName='ccv'><br/><br/>
                <h1>Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 134.80$</h1>
            </td>
        </tr>

        <tr>
            <td> 
            <br/><br/><br/><br/>
               <h3>Contact information</h3>
            </td>
            <td>
                 <br/><br/><br/><br/>
                <button type="submit" className='submit'>Pay now</button>
            </td>
        </tr>

        <tr>
            <td className='email'><br/><br/>
                <b>E-mail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                <input className='input' type="email " placeholder="example@gmail.com "/>
            </td>
        </tr>

        <tr>
            <td>
                <br/><b>Phone number</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className='input' type="text" placeholder="+996707000000"/>
            </td>
        </tr>
        
        <tr>
            <td>
                <br/><br/><br/>
                <input className='input' type="checkbox"/>  &nbsp;&nbsp;&nbsp;&nbsp;
                <b className='check'>I accept with term and conditions</b>
                <br/><br/><br/><br/><br/>
            </td>
        </tr>
    </table> 
      </div>  
    )
}

export default Payment;