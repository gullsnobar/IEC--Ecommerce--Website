import React from 'react';
import CartItem from '../components/CartItem';

const Cart = ({ cart, onAddToCart }) => {
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '2rem', maxWidth: 800, margin: '0 auto' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Your Cart</h2>

      {cart.length === 0 ? (
        <p style={{ color: '#6B7280' }}>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <CartItem
              key={item.id}
              product={item}
              quantity={item.quantity}
              onAddToCart={onAddToCart}
            />
          ))}

          {/* Total Price */}
          <div style={{ marginTop: '2rem', fontWeight: 'bold', fontSize: '1.25rem' }}>
            Total: ${cartTotal.toFixed(2)}
          </div>

          {/* Checkout Button */}
          <button
            style={{
              marginTop: '1rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#059669',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
            onClick={() => alert('Proceeding to checkout...')}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
