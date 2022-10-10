import {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from '../../../firebaseConfig';
import {getDoc, doc, collection } from 'firebase/firestore';



const ItemDetailContainer = () => {
    const [item, setItem] = useState ({});

const {id} = useParams();




    useEffect(() => {
        const itemCollection = collection(db, 'productos')
        const ref = doc(itemCollection, id)
        getDoc(ref)
        .then((resp)=> {
            setItem({
                id: resp.id,
                ...resp.data(),
            });
        });
    }, [id]);
    return <ItemDetail item={item} />
}

export default ItemDetailContainer;