import React, { useEffect, useState } from 'react';
import { productos } from '../../mock/productos';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = (props) => {
  const [items, setItems] = useState ([]);

  const {categoryId} = useParams();


  useEffect(() => {
    const getProductos = new Promise((res, rej) => {
      const prodFiltro = productos.filter 
      ((prod) => prod.category === categoryId);
      
      setTimeout (() => {
        res (categoryId ? prodFiltro : productos);
      }, 100);
    });
 


    getProductos
      .then((data) => {
      setItems(data);
    })
      .catch((error) => {
        console.log('cath: ', error);
      });
  }, [categoryId]);


  return (
    <div className='container-fluid'>
      <ItemList items={items}/>
    </div>  
  )
};

export default ItemListContainer;