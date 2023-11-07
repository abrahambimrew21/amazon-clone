import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";


function Product({title,rating,price,img})
{
const [{basket},dispatch] = useStateValue();
const addToBasket = ()=>{
    dispatch({
        type:'ADD_TO_BASKET',
        item:{
        title:title,
        img:img,
        price:price,
        rating:rating,
        },
    });
};

    return(
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price"></p>
                <small>$</small>
                <strong>{price}</strong>
                <div className="product_reating">
                   {
                    Array(rating).fill().map(()=>(<p>*</p>))
                   }
                    
                </div>
            </div>
            <img className="product_image"
            src={img}

            />
            <button onClick={addToBasket}> Add to Basket</button>
        </div>
    );

}
export default Product;
