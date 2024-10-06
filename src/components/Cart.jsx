import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, totalQuantity, totalAmount } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      <div>
        {Object.values(cart).map((product) => (
          <div key={product.id} style={{ border: "1px solid #ddd", margin: "10px", padding: "10px" }}>
            <h4>{product.title}</h4>
            <p>Price: ${product.price}</p>
            <div>
              <button onClick={() => decreaseQuantity(product.id)}>-</button>
              <span style={{ margin: "0 10px" }}>Quantity: {product.quantity}</span>
              <button onClick={() => increaseQuantity(product.id)}>+</button>
            </div>
            <p>Subtotal: ${product.quantity * product.price}</p>
          </div>
        ))}
      </div>
      <h3>Total Quantity: {totalQuantity}</h3>
      <h3>Total Amount: ${totalAmount}</h3>
    </div>
  );
};

export default Cart;
