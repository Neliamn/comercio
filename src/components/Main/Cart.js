import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Item from './Item';


const Cart = () => {
    const { cart, clear, removeItem } = useContext(CartContext);

    return (
        <div>
            {cart.map((prod)=> (
                <div key={prod.id}>
                    <img src={prod.img}/>
                    <h2>{prod.title}</h2>
                    <button onClick={() => removeItem(prod.id)}>Eliminar</button>
                </div>
            ))}
            <button onClick={clear}>Vaciar carrito</button>
        </div>
    );
};

export default Cart;