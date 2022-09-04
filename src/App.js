import Header from './components/Header/Header';
import Navbar from './components/Header/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/Main/ItemListContainer'
import ItemDetailContainer from './components/Main/ItemDetailContainer/ItemDetailContainer';

const App = () => {

  return (
    <>
      <Header />
      <Navbar />
      <Main/>
      <ItemListContainer saludo='Hola' />
      <ItemDetailContainer/>
      <Footer />
    </>
  )
};

export default App;
