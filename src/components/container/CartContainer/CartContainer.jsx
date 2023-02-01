import React from "react";
import {useContext} from "react";
//import {cartContext} from "../../storage/cartContext";

function CartContainer () {
    const { cart, removeItem } = useContext(CartContext);
    return (
    <div>
        <div>Tu carrito</div>
        {cart.map((item) => (
            <div>
                <h3>{item.name}</h3>
                <h3>${item.price}</h3>
                <h4>{item.count}</h4>
                <button>X</button>
            </div>
        ))}
    </div>
    );
}

export default CartContainer;
