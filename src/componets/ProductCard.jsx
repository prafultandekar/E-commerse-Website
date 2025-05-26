import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        padding: "16px",
        margin: "16px",
        width: "260px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        fontFamily: "'Segoe UI', sans-serif",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* ✅ Product Image */}
      <div
        style={{
          height: "180px",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          borderRadius: "10px",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
        />
      </div>

      {/* ✅ Product Info */}
      <h3 style={{ marginBottom: "5px", fontSize: "18px", color: "#333" }}>
        {product.name}
      </h3>
      <p style={{ fontWeight: "bold", color: "#4caf50" }}>₹ {product.price}</p>
      <p style={{ color: "#555", fontSize: "14px", margin: "10px 0" }}>
        {product.description}
      </p>

      {/* ✅ Action Buttons */}
      <div style={{ display: "flex", gap: "10px", marginTop: "auto" }}>
        <Link to={`/product/${product.id}`} style={{ flex: 1 }}>
          <button
            style={{
              padding: "10px",
              width: "100%",
              backgroundColor: "#1976d2",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            View Details
          </button>
        </Link>
        <button
          onClick={() => addToCart(product)}
          style={{
            padding: "10px",
            flex: 1,
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
  );
}

export default ProductCard;
