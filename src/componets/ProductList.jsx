import React from 'react'
import products from '../data/Product'
import ProductCard from './ProductCard'


function ProductList() {
  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#f5f7fa",
        minHeight: "100vh",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "28px",
          color: "#333",
        }}
      >
        Explore Our Products
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;


