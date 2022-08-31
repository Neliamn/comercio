import React from "react";
import Item from "./Item";



const ItemList = ({items}) => {
    console.log(items)
    

return (
    <div className="row">
        {items.map((item) =><Item key={item.id} img={item.img} stock={item.stock} title={item.title} price={item.price} />)}
    </div>
);
};
export default ItemList;