import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import FadeLoader from "react-spinners/FadeLoader";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';


const ItemListContainer = (props) => {
  const [items, setItems] = useState ([]);
  const [loading, setLoading] = useState(true);

  const {categoryId} = useParams();


  useEffect (() => {
      const itemCollection = collection(db, 'productos');

      const filtrado = categoryId ? query (itemCollection, where ('category', '==', categoryId)) : itemCollection;

      
      getDocs(filtrado).then((resp) => {
        const products = resp.docs.map((prod) => {
            return {
                id: prod.id,
                ...prod.data(),
            };
        });
        setItems(products);
      })
      .catch((error) => {
        console.log (error)
      })
      .finally(() => {
        setLoading(false);
      })
  
}, [categoryId]);




  return (
    <div className='container-fluid' style={{display:'flex', justifyContent: 'center'}}>
      {
        loading ? <FadeLoader color='#36d1d6' size={150} height={80} width={5} radius={100} margin={50}/>

        :<ItemList items={items}/>
      }
      
    </div>  
  )
};

export default ItemListContainer;