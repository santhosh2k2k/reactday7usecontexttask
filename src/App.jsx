import React from "react";
import { CartProvider } from "./context/CartContext";
import ProductList from "./components/productList";
import Cart from "./components/Cart";



// Sample Product Data (You can replace this with your actual JSON data)
const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  // Add more product objects as needed...
];

function App() {
  return (
    <CartProvider>
      <div className="App">
        <h1>React Cart using Context API</h1>
        <ProductList products={products} />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
