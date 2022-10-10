import React from "react";
import Item from "./Item";



const ItemList = ({items}) => {
   
    

return (
    <div className="row d-flex justify-content-center">
        {items.map((item) =><Item key={item.id} id={item.id} img={item.img} stock={item.stock} title={item.title} price={item.price} />)}
    </div>
);
};
export default ItemList;