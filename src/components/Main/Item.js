import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({id,img,price,stock,title}) => {

function onAdd(){
    console.log("Se han añadido " );
}

return (
    /*<div className='contenedor'>
        <h3>{title}</h3>
        <img src={img} alt="" />
        <p>{price}€</p>
        <ItemCount stock={Item.stock} />    
    </div>*/
    <div className="card col col-md-3 m-2">
        <img className="card-img-top" src={img} alt="Imagen artículo" />
        <div className="card-body">
            <h3>{title}</h3>
            <p className="card-text text-center">{price}€</p>
        </div>
        <ItemCount
            stock={stock}
            initial={0}>
        </ItemCount>
    </div>    
    
  )
}

export default Item;