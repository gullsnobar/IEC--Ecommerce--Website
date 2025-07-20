import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Search } from 'lucide-react';

import ProductCard from '../components/ProductCard';
import CartItem from '../components/CartItem';
import { selectCart, selectCartCount, selectCartTotal } from '../store/cartSlice';
import products from '../data/products';


import groceryBg from '../assets/grocery.png';

export default function Home({ onProductClick, onAddToCart }) {
  const cart = useSelector(selectCart);
  const cartTotal = useSelector(selectCartTotal);
  const cartCount = useSelector(selectCartCount);
  const [showCart, setShowCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = products.filter(p =>
  p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
  {/* Hero Section */}
  <div
  style={{
  backgroundImage: `url(${groceryBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '90vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '0 20px',
  }}
  >
  <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1E293B', textAlign: 'center' }}>
  Groceries Delivered in 90 Minutes
  </h1>
  <p style={{ fontSize: '1.25rem', color: '#1E293B', textAlign: 'center' }}>
  Get your healthy foods & snacks delivered at your doorsteps all day every day
  </p>

  {/* Search Bar */}
  <div
  style={{
  marginTop: '2rem',
  width: '100%',
  maxWidth: '800px',
  display: 'flex',
 }}
  >
  <input
  type="text"
  placeholder="Search your products..."
  value={searchTerm}
  onChange={e => setSearchTerm(e.target.value)}
  style={{
  flex: 1,
  padding: '1rem',
  fontSize: '1rem',
  border: 'none',
  outline: 'none',
  borderRadius: '4px 0 0 4px',
  }}
  />
  <button
  style={{
  padding: '0 2rem',
  backgroundColor: '#019376',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '0 4px 4px 0',
  }}
  >
  <Search size={20} />
  </button>
  </div>
  </div>

  {/* Products Section */}
  <div style={{ backgroundColor: '#f9fafb', padding: '4rem 1rem' }}>
  <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
  <h2
  style={{
  fontSize: '2rem',
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#1E293B',
  marginBottom: '2rem',
  }}
  >
  Fresh Products
  </h2>

  {/* Cart Summary */}
  {cartCount > 0 && (
  <div
  onClick={() => setShowCart(!showCart)}
  style={{
  backgroundColor: '#019376',
  color: 'white',
  padding: '1rem',
  borderRadius: 8,
  marginBottom: '2rem',
  textAlign: 'center',
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  }}
  >
  {cartCount} Items - ${cartTotal.toFixed(2)}
  </div>
  )}

  {/* Cart View */}
  {showCart && (
  <div style={{ marginBottom: '2rem' }}>
  {cart.map(item => (
  <CartItem
  key={item.id}
  product={item}
  quantity={item.quantity}
  onAddToCart={onAddToCart}
  />
  ))}
  </div>
)}

  {/* Product Grid */}
  <div
  style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: '1.5rem',
  justifyItems: 'center',
  }}
  >
  {filtered.map(product => (
  <ProductCard
  key={product.id}
  product={product}
  onAddToCart={onAddToCart}
  cartItems={cart}
  onProductClick={onProductClick}
  />
  ))}
  </div>
  </div>
  </div>
  </>
  );
}
