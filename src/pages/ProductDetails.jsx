import React from "react";
import { useParams } from "react-router-dom";
import products from '../data/Product'// dummy product list (ya tumhare state se fetch karo)

import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((item) => item.id.toString() === id);

  if (!product) {
    return <h2 style={{ padding: "20px" }}>Product not found</h2>;
  }

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "300px",
            height: "300px",
            objectFit: "contain",
            borderRadius: "10px",
            background: "#f8f8f8",
          }}
        />
        <div style={{ flex: 1 }}>
          <h2 style={{ marginBottom: "10px", color: "#333" }}>{product.name}</h2>
          <h3 style={{ color: "#4caf50" }}>₹ {product.price}</h3>
          <p style={{ margin: "15px 0", color: "#555", fontSize: "16px" }}>
            {product.description}
          </p>
          <button
            onClick={() => addToCart(product)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#4caf50",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
