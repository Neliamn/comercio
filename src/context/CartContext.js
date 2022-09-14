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
                const productoActu = {...prod, cantidad: prod.cantidad + cantidad,};
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
    }

    return (
        <CartContext.Provider value={{ cart, addItem, clear, removeItem }}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;