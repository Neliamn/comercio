
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";
import { Routes, Route } from "react-router-dom";
import CartWidget from "../Header/CartWidget";


const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element= {<ItemListContainer />}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        
        <Route path="/detail/:id" element= {<ItemDetailContainer />} />
        <Route path="/cart" element= {<CartWidget/>} />
      </Routes>
    </div>
  )
};

export default Main;
