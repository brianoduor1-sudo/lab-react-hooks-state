import React from "react";

export default function ProductCard({ product, addToCart }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <h3>{product.name}</h3>

      <p>Category: {product.category}</p>

      <button
        data-testid={`product-${product.id}`}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}
