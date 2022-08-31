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
      <div className="contenedor-add">
        <div className="card-body">      
          <p className="card-text"></p>
          <div className="row">
            <button type="button" className="btn btn-primary col-4" onClick={restar}>-</button>
            <span className="col-4 text-center">{contador}</span>
            <button type="button" className="btn btn-primary col-4" onClick={sumar}>+</button>
          </div>
          <div className="row">
            <button className="btn btn-secondary w-100 mt-1" disabled={(contador == 0)} onClick={onAdd}>Añadir al carrito</button>
          </div>  
        </div>
      </div>
      /*<div className="card">
        <h1>{}</h1>
        <div className="botones">
        <button onClick={restar}>-</button>
        <p>{contador}</p>
        <button onClick={sumar}>+</button>
        
        </div>
        <button disabled={(contador == 0)} onClick={onAdd}>Añadir al carrito</button>
        
      </div>*/
    )
  };
  
  export default ItemCount;