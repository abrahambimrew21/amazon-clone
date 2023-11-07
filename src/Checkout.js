import React from "react";
import './Checkout.css';
import Subtotal from "./Subtotal"; 

function Checkout(){
 return(
    <div className="checkout_continer">
        <div className="checkout">
            <img className="checkout_image"  src="https://blog.3dcart.com/hubfs/iStock-666069072.jpg" />
            <div className="title">
                    <h3>title</h3>
                    <h1>Welcome</h1>
            </div>
        </div>
        <div className="content">
            <Subtotal/>

        </div>
    </div>
 );
}
export default Checkout;
