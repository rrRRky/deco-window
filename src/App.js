import {Routes, Route} from 'react-router-dom';
import Home from "./routes/home/home.component";
import Authentication from './routes/authentication/authentication.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import ShopProduct from './routes/shop/add-shop-product.component';

const App = () => {
   return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route  index element={<Home />}></Route>
        <Route  path='shop' element={<Shop />}></Route>
        <Route path='add-shop-product' element={<ShopProduct/>}></Route>
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
