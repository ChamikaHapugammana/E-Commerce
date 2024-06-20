
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop.jsx';
import ShopCategory from './Pages/ShopCategory.jsx';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import LoginSignup from './Pages/LoginSignup.jsx';
import Footer from './Components/Footer/Footer.jsx';
import building_banner from "./Components/Assets/banner_building.png"
import electrical_banner from "./Components/Assets/banner_electrical.png"
import paint_banner from "./Components/Assets/banner_paint.png"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Shop />} />
          <Route path='/building' element = {<ShopCategory banner = {building_banner} category = "building"/>} />
          <Route path='/electrical' element = {<ShopCategory banner = {electrical_banner} category = "electrical"/>} />
          <Route path='/paint' element = {<ShopCategory banner = {paint_banner} category = "paint"/>} />

          <Route path='/product' element = {<Product/>}>
            <Route path=':productId' element = {<Product/>} />
          </Route>

          <Route path='/cart' element = {<Cart />} />
          <Route path='/login' element = {<LoginSignup />} />
          
        </Routes>
        <Footer />
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
