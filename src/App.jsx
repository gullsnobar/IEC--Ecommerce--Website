import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import { addToCart } from './store/cartSlice';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Hide Navbar on specific routes
  const shouldHideNavbar =
    ['/login', '/signup'].includes(location.pathname) || location.pathname.startsWith('/product/');

  // Add to Cart handler
  const handleAddToCart = (product, quantity = 1) => {
    dispatch(addToCart({ ...product, quantity }));
  };

  // Product click navigates to details page
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  // Back from product details to home
  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <>
  {!shouldHideNavbar && <Navbar />}
  <Routes>
  <Route
  path="/"
  element={
  <Home onProductClick={handleProductClick} onAddToCart={handleAddToCart}/>
  }
  />
  <Route path="/signup" element={<Signup />} />
  <Route path="/login" element={<Login />} />
  <Route
  path="/product/:id"
  element={
  <ProductDetails
  onBack={handleBackClick}
  onAddToCart={handleAddToCart}
  /> }
  />
  </Routes>
  </>
  );
};

export default App;
