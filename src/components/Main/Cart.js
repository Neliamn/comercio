import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Item from './Item';


const Cart = () => {
    const { cart, clear, removeItem, totalPrice } = useContext(CartContext);

    if (cart.length === 0) {
        return <>
        <div className='carritoVacio'>
            <h2>Tu carrito esta vacio</h2>
            <img src="./Multimedia/perrollorando.jpg" alt="" />
            <Link to='/'><button>Ir a comprar ahora</button></Link>
        </div></>
    }

    return (
        <div >
            {cart.map((prod) => (
                <div key={prod.id} className='listaCompra' >
                    <img src={prod.img} />
                    <h2>{prod.title}</h2>
                    <h2>{prod.price} €</h2>
                    <h2>Cantidad: {prod.cantidad}</h2>
                    <button onClick={() => removeItem(prod.id)}>Eliminar</button>
                </div>
            ))}
            <h2>Total: {totalPrice()} €</h2>
            <button onClick={clear}>Vaciar carrito</button>
        </div>
    );
};

export default Cart;