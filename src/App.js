import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemState from './context/items/ItemState';
import CartCheckoutPage from './pages/CartCheckoutPage';
import ProductListPage from './pages/ProductListPage';


function App() {
  return (
    <>
      <ItemState>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductListPage/>} />
          </Routes>
          <Routes>
            <Route path="/cartcheckout" element={<CartCheckoutPage />} />
          </Routes>
        </BrowserRouter>
        
      </ItemState>
    </>
  );
}

export default App;
