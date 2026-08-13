import React, { useState } from "react";
import ProductList, { sampleProducts } from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts =
    category === "All"
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === category);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <h1>Shopping App</h1>

      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <div style={{ margin: "20px 0" }}>
        <label>Filter by category: </label>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Dairy">Dairy</option>
          <option value="Fruits">Fruits</option>
          <option value="Bakery">Bakery</option>
          <option value="NonExistent">NonExistent</option>
        </select>
      </div>

      <ProductList products={filteredProducts} addToCart={addToCart} />

      <Cart cart={cart} />
    </div>
  );
}
