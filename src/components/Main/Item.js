import React from "react";
import { Link } from "react-router-dom";

const Item = ({id,img,price,stock,title}) => {



return (

    <div className="card col col-md-2 m-2 text-center">
     <img className="card-img-top" src={img} alt="Imagen artículo" />
        <div className="card-body">
            <h3>{title}</h3>
            <p className="card-text text-center">{price}€</p>
        </div>

        <Link to={`/detail/${id}`}><button>Ver detalles</button></Link>
    </div>    
    
  )
}

export default Item;