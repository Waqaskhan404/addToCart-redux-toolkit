import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import CartProduct from './component/CartProduct';
import Navbar from './component/Navbar';
import ProductCard from './component/ProductCard';

function App() {
  return (
    <BrowserRouter>
    <>

      <Navbar/>
      <Routes>
        <Route path='/' element={ <ProductCard/>}/>
        <Route path='/allcart' element={ <CartProduct/>}/>



      </Routes>
     
    </>
    </BrowserRouter>
  );
}

export default App;
