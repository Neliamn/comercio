import React, { useState } from 'react';
import ItemCount from "../../ItemCount/ItemCount";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState (0);
    const { addItem, cantidadCarrito } = useContext(CartContext);

    const onAdd = (cantidad) => {
        setCantidad(cantidad);
        addItem(item, cantidad);
    };

    const quantity = cantidadCarrito (item.id)

    return (
        <>
            <div className="contDetalle">
                <div>
                    <img src={item.img} alt="" />
                </div>
                <div className="detalles">
                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                    <p>stock: {item.stock}</p>
                    <p>Precio: {item.price}€</p>
                    {cantidad === 0 ? (
                           <ItemCount
                        stock={item.stock}
                        initial={quantity}
                        onAdd = {onAdd}>
                    </ItemCount> 
                    ) : (<Link to="/cart"> <button> Ir al carrito</button></Link>)}
                
                </div>
            </div>
        </>
    )
};


export default ItemDetail;