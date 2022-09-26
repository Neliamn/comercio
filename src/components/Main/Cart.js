import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Form from '../Form/Form';
import { useState } from 'react';


const Cart = () => {
    const { cart, clear, removeItem, totalPrice } = useContext(CartContext);
    const [idPedido, setIdPedido] = useState('');

    const idCompra = (id) => {
        setIdPedido(id)
    };
    if (idPedido) {
        return <h2>Gracias por tu compra, tu id es: {idPedido}</h2>
    }
    if (cart.length === 0) {
        return <>
        <div className='carritoVacio'>
            <h2>Tu carrito esta vacio</h2>
            <img src="./Multimedia/perrollorando.jpg" alt="perro llorando" />
            <Link to='/'><button>Ir a comprar ahora</button></Link>
        </div></>
    }
  

    return (
        <div >
            {cart.map((prod) => (
                <div key={prod.id} className='listaCompra' >
                    <img src={prod.img} alt='imagen del producto'/>
                    <h2>{prod.title}</h2>
                    <h2>{prod.price} €</h2>
                    <h2>Cantidad: {prod.cantidad}</h2>
                    <button onClick={() => removeItem(prod.id)}>Eliminar</button>
                </div>
            ))}
            <h2>Total: {totalPrice()} €</h2>
            <button onClick={clear}>Vaciar carrito</button>
            <Form cart={cart} totalPrice={totalPrice} clear={clear} idCompra={idCompra}/>
        </div>
    );
};

export default Cart;