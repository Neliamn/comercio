import {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { productos } from "../../../mock/productos";
import { useParams } from "react-router-dom";




const ItemDetailContainer = () => {
    const [item, setItem] = useState ({});

const {id} = useParams();

const idNumero = Number (id);


    useEffect(() => {
        const getProducto = () => new Promise ((res, rej)=> {
            const unProducto = productos.find ((prod) => prod.id === idNumero);
            setTimeout (() => {
                res(unProducto);
            }, 500);
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