import React, { useEffect, useState } from 'react';
import { productos } from '../../mock/productos';
import ItemList from './ItemList';


const ItemListContainer = (props) => {
  const [items, setItems] = useState ([]);


  useEffect(() => {
    const getProductos = new Promise((res, rej) => {
      setTimeout(() => {
        res(productos);
      }, 2000);
    });
    getProductos
      .then((data) => {
      setItems(data);
    })
      .catch((error) => {
        console.log('cath: ', error);
      });
  }, []);


  return (
    <div className='container-fluid'>
      <ItemList items={items}/>
    </div>  
  )
};

export default ItemListContainer;