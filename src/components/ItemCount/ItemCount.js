import React, {useState} from "react";
import { useEffect } from "react";

const ItemCount = ({stock, initial = 0, onAdd}) => {


    const [contador, setContador] = useState (initial);

    useEffect(()=>{
      setContador (initial)
    }, [initial])

    const sumar = () => {
        contador<stock && setContador(contador +1);
    };
    const restar = () => {
        contador>initial && setContador(contador -1);
    };

    const agregar =() => {onAdd(contador)};


    return (
      <div className="contenedor-add">
        <div className="card-body">      
          <p className="card-text"></p>
          <div className="row">
            <button type="button" className="btn btn-primary col-2" onClick={restar}>-</button>
            <span className="col-2 text-center">{contador}</span>
            <button type="button" className="btn btn-primary col-2" onClick={sumar}>+</button>
          </div>
          <div className="row">
            <button className="btn btn-secondary w-50 mt-1" disabled={(contador === 0)} onClick={agregar}>Añadir al carrito</button>
          </div>  
        </div>
      </div>
    )
  };
  
  export default ItemCount;