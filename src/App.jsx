import React, { useState } from 'react';
import './App.css';

const Product = ({ name, description, price, onAddToCart, onRemoveFromCart, isInCart }) => (
  <div className="product">
    <h3>{name}</h3>
    <p>{description}</p>
    <p>${price}</p>
    {isInCart ? (
      <button onClick={onRemoveFromCart}>Remove from Cart</button>
    ) : (
      <button onClick={onAddToCart}>Add to Cart</button>
    )}
  </div>
);

const ShoppingCart = ({ items }) => (
  <div className="shopping-cart">
    <h2>Shopping Cart</h2>
    <p>Total Items: {items.length}</p>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  </div>
);

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  
  const products = [
    { id: 1, name: 'Fancy Product', description: 'A fancy product description.', price: 40 },
    { id: 2, name: 'Special Item', description: 'A special item description.', price: 18 },
    { id: 3, name: 'Sale Item', description: 'A sale item description.', price: 25 },
    { id: 4, name: 'Popular Item', description: 'A popular item description.', price: 40 }
  ];
  
  const addToCart = (productId) => {
    const productToAdd = products.find(product => product.id === productId);
    setCartItems([...cartItems, productToAdd]);
  };
  
  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="app">
      <h1 >Online Shopping</h1>
      <p>Home page </p>
      <div className="products">
        {products.map(product => (
          <Product
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            onAddToCart={() => addToCart(product.id)}
            onRemoveFromCart={() => removeFromCart(product.id)}
            isInCart={cartItems.some(item => item.id === product.id)}
          />
        ))}
      </div>
      <ShoppingCart items={cartItems} />
    </div>
  );
};

export default App;
