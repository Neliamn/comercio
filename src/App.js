import Header from './components/Header/Header';
import Navbar from './components/Header/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/Main/ItemListContainer'
import ItemDetailContainer from './components/Main/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './context/CartContext';

const App = () => {

  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
};

export default App;
