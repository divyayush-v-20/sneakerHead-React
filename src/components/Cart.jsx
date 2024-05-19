import React from 'react';
import './Cart.css';

function Cart({ cart, handleRemoveFromCart, handleQuantityChange, calculateTotalPrice, isOpen, onClose }) {
  return (
    <div className={`cart ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
      <div className="cart-items">
        {cart.length === 0 && <p>No items in cart</p>}
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(item, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item, item.quantity + 1)}>+</button>
              </div>
              <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: ₹{calculateTotalPrice()}</h3>
      </div>
    </div>
  );
}

export default Cart;
