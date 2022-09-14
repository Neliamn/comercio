
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";
import { Routes, Route } from "react-router-dom";
import CartWidget from "../Header/CartWidget";
import Cart from "./Cart";


const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element= {<ItemListContainer />}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        
        <Route path="/detail/:id" element= {<ItemDetailContainer />} />
        <Route path="/cart" element= {<Cart/>} />
      </Routes>
    </div>
  )
};

export default Main;
