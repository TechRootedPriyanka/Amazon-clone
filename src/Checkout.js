import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from "./StateProvider";
import  CheckoutProduct  from "./CheckoutProduct";

function Checkout() {

    const [{basket, user}, dispatch] = useStateValue();

    return ( 
      <div className="checkout">

        <h3 className="checkout__toplines1">Pay faster for all your shopping needs <solid style={{color: "#b22222"}}>with Amazon Pay balance</solid></h3>
        

        <h3 className="checkout__toplines2">Get Instant refund on cancellations | Zero payment failures</h3>
       <div className="checkout__window">
        <div className="checkout__left">

            <div>
                <h3>Hello, {user?.email}</h3>
                <h1 classname="checkout__title">  Shopping cart</h1>
            </div>

            {basket.map(item => (
                <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}/>
            ))}



         </div>
         <img className='checkout__ad' src="img/checkoutimg.jpg" alt=""/>


         <div className="checkout__right">
             <Subtotal/>
             
        </div>
        </div>
    </div>
    );
}

export default Checkout