import React, {useState} from "react";

const ItemCount = ({stock, initial, onAdd}) => {


    const [contador, setContador] = useState (initial);

    const sumar = () => {
        contador<stock && setContador(contador +1);
    }
    const restar = () => {
        contador>initial && setContador(contador -1);
    }
    return (
      <div className="contenedor">
        <h1>Collar</h1>
        <div className="botones">
        <button onClick={restar}>-</button>
        <p>{contador}</p>
        <button onClick={sumar}>+</button>
        
        </div>
        <button disabled={(contador == 0)} onClick={onAdd}>Añadir al carrito</button>
        
      </div>
    )
  };
  
  export default ItemCount;