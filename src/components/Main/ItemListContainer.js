import React, { useEffect, useState } from 'react';
import { productos } from '../../mock/productos';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import FadeLoader from "react-spinners/FadeLoader";


const ItemListContainer = (props) => {
  const [items, setItems] = useState ([]);
  const [loading, setLoading] = useState(true);

  const {categoryId} = useParams();


  useEffect(() => {
    const getProductos = new Promise((res, rej) => {
      const prodFiltro = productos.filter 
      ((prod) => prod.category === categoryId);
      
      setTimeout (() => {
        res (categoryId ? prodFiltro : productos);
      }, 500);
    });
 


    getProductos
      .then((data) => {
      setItems(data);
      setLoading(false);
    })
      .catch((error) => {
        console.log('cath: ', error);
      });

      return () => {
        setLoading(true);
      };

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