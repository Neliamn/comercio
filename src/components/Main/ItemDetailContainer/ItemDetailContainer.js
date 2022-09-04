import {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { productos } from "../../../mock/productos";




const ItemDetailContainer = () => {
    const [item, setItem] = useState ({});

    useEffect(() => {
        const getProducto = () =>
        new Promise ((res, rej)=> {
            const unProducto = productos.find ((prod) => prod.id === 2);
            setTimeout (() => {
                res(unProducto);
            }, 2000);
        });
        getProducto()
        .then((data) => {
            setItem(data);
        })
        .catch ((error) => {
            console.log (error);
        });
    });
    return <ItemDetail item={item} />
}

export default ItemDetailContainer;