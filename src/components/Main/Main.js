
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Form from "../Form/Form";


const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element= {<ItemListContainer />}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        
        <Route path="/detail/:id" element= {<ItemDetailContainer />} />
        <Route path="/cart" element= {<Cart/>} />
        <Route path="/form" element= {<Form/>} />
      </Routes>
    </div>
  )
};

export default Main;
