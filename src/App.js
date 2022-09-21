
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Products from './component/Products';
import ProductsCategories from './component/ProductCategories.js';
import SortProduct from './component/SortProduct';
import FilterProduct from './component/FilterProduct';
import ViewProduct from './component/ViewProduct';
import SignUp from './component/SignUp';
import SignIn from './component/SignIn';
import ChangePassword from './component/ChangePassword';
import ForgotPassword from './component/ForgotPassword';
import LogOut from './component/LogOut';
import ViewCart from './component/ViewCart';
import Error from './component/Error';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        {/* <h3>Api - https://fakestoreapi.com</h3> */}
        <Routes>
          <Route path='Home' element={<Home />} />
          <Route path='About' element={<About />} />
          <Route path='Products' element={<Products />} />
          <Route path='ProductsCategories' element={<ProductsCategories />} />
          <Route path='SortProduct' element={<SortProduct />} />
          <Route path='FilterProduct' element={<FilterProduct />} />
          <Route path='/Products/:id' element={<ViewProduct />} />
          <Route path='SignUp' element={<SignUp/>}/>
          <Route path='SignIn' element={<SignIn/>}/>
          <Route path='ChangePassword' element={<ChangePassword/>}/>
          <Route path='ForgotPassword' element={<ForgotPassword/>}/>
          <Route path='LogOut' element={<LogOut/>}/>
          <Route path='ViewCart' element={<ViewCart />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
