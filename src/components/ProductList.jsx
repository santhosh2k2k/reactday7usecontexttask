import React from "react";
import { useCart } from "../context/CartContext";

const ProductList = ({ products }) => {
  const { addToCart } = useCart();

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ddd", margin: "10px", padding: "10px", width: "300px" }}>
          <img src={product.image} alt={product.title} style={{ width: "100px", height: "100px" }} />
          <h4>{product.title}</h4>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
