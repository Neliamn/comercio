import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Form from '../Form/Form';
import { useState } from 'react';


const Cart = () => {
    const { cart, clear, removeItem, totalPrice } = useContext(CartContext);
    const [idPedido, setIdPedido] = useState('');
    const [continuarCompra, setContinuarCompra] = useState(false);

    const idCompra = (id) => {
        setIdPedido(id)
    };

    const cambiarVisualizacion = () => {
        if (continuarCompra) {
            setContinuarCompra(false);
        }
        else {
            setContinuarCompra(true);
        }
    };

    if (idPedido) {
        return <div className='gracias'>
            <h2>Gracias por tu compra</h2>
            <img src="" alt="" />
            <h2>Tu número de pedido es:</h2>
            <h2>{idPedido}</h2>
        </div>
    }
    if (cart.length === 0) {
        return <>
            <div className='carritoVacio'>
                <h2>Tu carrito esta vacio</h2>
                <img src="./Multimedia/perrollorando.jpg" alt="perro llorando" />
                <Link to='/'><button>Ir a comprar ahora</button></Link>
            </div></>
    }

    if (!continuarCompra) {
        return (
            <div >
                {cart.map((prod) => (
                    <div key={prod.id} className='listaCompra' >
                        <img src={prod.img} alt='imagen del producto' />
                        <h2>{prod.title}</h2>
                        <h2>Cantidad: {prod.cantidad}</h2>
                        <h2>{prod.price} €</h2>

                        <button onClick={() => removeItem(prod.id)}>Eliminar</button>
                    </div>
                ))}
                <div className='carritoTotal'>
                    <h2>Total: {totalPrice()} €</h2>
                    <button onClick={clear}>Vaciar carrito</button>
                    <button onClick={cambiarVisualizacion}>Continuar compra</button>
                </div>
            </div>
        );
    }
    else {
        return (
            <Form cart={cart} totalPrice={totalPrice} clear={clear} idCompra={idCompra} />
        );
    }

};

export default Cart;