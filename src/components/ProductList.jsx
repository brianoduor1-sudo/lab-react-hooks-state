import React from "react";
import ProductCard from "./ProductCard";

export const sampleProducts = [
  { id: 1, name: "Milk", category: "Dairy" },
  { id: 2, name: "Cheese", category: "Dairy" },
  { id: 3, name: "Apple", category: "Fruits" },
  { id: 4, name: "Banana", category: "Fruits" },
  { id: 5, name: "Bread", category: "Bakery" },
];

export default function ProductList({ products, addToCart }) {
  if (products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "16px",
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}
