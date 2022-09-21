import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './component/Home';
import Navbar from './component/Navbar';
import Products from './component/Products';
import Product from './component/Product';

function App() {
  return (
    <React.Fragment>
     <Navbar/>
      <Router>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/Products/:id' element={<Product />} />
        
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
