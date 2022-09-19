import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';



const CartWidget = ({item}) => {
    const {totalCantidad} = useContext(CartContext)
    return (
        <> <div className='carrito' >
        <span className="material-icons ">shopping_cart</span>

        
        <span>{totalCantidad()===0?'':totalCantidad()}</span></div>
        </>
    )
};

export default CartWidget;