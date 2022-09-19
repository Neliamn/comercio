import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            sumarItem (item, cantidad);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    const isInCart = (id) => {
        return cart.some((prod)=> prod.id === id)
    }; 

    const sumarItem = (item, cantidad) => {
        const carritoActu = cart.map((prod)=> {
            if (prod.id === item.id) {
                const productoActu = {...prod, cantidad: cantidad,};
                return productoActu
            } else {
                return prod
            }
        })
        setCart (carritoActu)
    };

    const removeItem = (id) => {
        const eliminando = cart.filter((prod) => prod.id !==id);
        setCart(eliminando);
    };

    console.log(cart)

    const clear = () => {
        setCart([])
    };

    const cantidadCarrito = (id) => {
        const producto = cart.find ((prod)=> prod.id === id)
        return producto?.cantidad;
    };

    const totalPrice = () => {
        let acumulador = 0
        cart.forEach((prod) => {
            acumulador += prod.price * prod.cantidad;
        });
        return acumulador
    };

    const totalCantidad = () => {
        let cantidadCart = 0
        cart.forEach ((prod) => {
            cantidadCart += prod.cantidad;
        });
        return cantidadCart
    };


    return (
        <CartContext.Provider value={{ cart, addItem, clear, removeItem, cantidadCarrito, totalPrice, totalCantidad }}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;