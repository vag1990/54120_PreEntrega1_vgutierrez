import { useState } from "react";
import CartIcon from "./CartIcon";
import "./CartIcon.css";



function CartWidget() {

const [cartItems, setCartItems]=
useState(5);



    return (
        <div className="cartContainer">
            <CartIcon ancho={40} alto={40}/>
            <span>{cartItems}</span>
        </div>
    )
}

export default CartWidget;