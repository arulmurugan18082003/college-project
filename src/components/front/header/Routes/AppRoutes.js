import React from 'react';
import Home from '../home/home';
import About from '../../about/about';
import Products from '../../shop/shop';
import { Route, Routes } from 'react-router-dom'
import Cart from '../../cart/cart';

const AppRoutes = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home handleAddProduct={handleAddProduct} />} />
        <Route path="shop" element={<Products handleAddProduct={handleAddProduct} />} />
        <Route path='about'element={<About />} />
        <Route path="cart" element={<Cart cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleCartClearance={handleCartClearance}
        />} />

      </Routes>
    </div>
  )
}

export default AppRoutes;