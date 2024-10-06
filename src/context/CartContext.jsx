import React, { createContext, useState, useContext } from "react";

// Create the CartContext
const CartContext = createContext();

// Create a custom hook to use the CartContext
export const useCart = () => useContext(CartContext);

// CartProvider component
export const CartProvider = ({ children }) => {
  // State to manage the cart
  const [cart, setCart] = useState({});

  // Add item to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[product.id]) {
        updatedCart[product.id].quantity += 1;
      } else {
        updatedCart[product.id] = { ...product, quantity: 1 };
      }
      return updatedCart;
    });
  };

  // Increase quantity of an item
  const increaseQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      updatedCart[productId].quantity += 1;
      return updatedCart;
    });
  };

  // Decrease quantity of an item
  const decreaseQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId].quantity > 1) {
        updatedCart[productId].quantity -= 1;
      } else {
        delete updatedCart[productId];
      }
      return updatedCart;
    });
  };

  // Calculate total quantity and amount
  const totalQuantity = Object.values(cart).reduce(
    (total, product) => total + product.quantity,
    0
  );
  const totalAmount = Object.values(cart).reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseQuantity, decreaseQuantity, totalQuantity, totalAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};
