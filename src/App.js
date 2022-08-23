import Header from './components/Header/Header';
import Navbar from './components/Header/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/Main/ItemListContainer'

const App = () => {
 
  return (
    <>
    <Header/>
    <Navbar/>
    <Main/>
    <ItemListContainer saludo='Hola'/>
    <Footer/>
    </>
  )
};

export default App;
