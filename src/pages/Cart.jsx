import React from "react";
import { Link } from "react-router-dom";  
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, addToCart, removeFromCart } = useCart();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333", marginBottom: "30px" }}>
        Your Cart
      </h2>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "18px", color: "#666" }}>
          Your cart is empty.
        </p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#fff",
                borderRadius: "10px",
                padding: "15px",
                marginBottom: "15px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <div
                style={{
                  flex: "0 0 80px",
                  marginRight: "20px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                    borderRadius: "8px",
                    boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
                  }}
                />
              </div>

              <div style={{ flex: 3 }}>
                <h3
                  style={{
                    margin: "0 0 8px 0",
                    fontSize: "18px",
                    color: "#222",
                  }}
                >
                  {item.name}
                </h3>
                <p
                  style={{
                    margin: "0",
                    color: "#4caf50",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  ₹ {item.price}
                </p>
              </div>

              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    padding: "8px 12px",
                    fontSize: "18px",
                    borderRadius: "6px",
                    border: "1px solid #e53935",
                    backgroundColor: "#ef5350",
                    color: "white",
                    cursor: "pointer",
                    userSelect: "none",
                    transition: "background-color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#d32f2f")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#ef5350")}
                >
                  -
                </button>
                <span
                  style={{
                    fontSize: "16px",
                    minWidth: "24px",
                    textAlign: "center",
                  }}
                >
                  {item.quantity}
                </span>
                <button
                  onClick={() => addToCart(item)}
                  style={{
                    padding: "8px 12px",
                    fontSize: "18px",
                    borderRadius: "6px",
                    border: "1px solid #43a047",
                    backgroundColor: "#4caf50",
                    color: "white",
                    cursor: "pointer",
                    userSelect: "none",
                    transition: "background-color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#388e3c")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#4caf50")}
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <div
            style={{
              textAlign: "right",
              marginTop: "20px",
              fontSize: "22px",
              fontWeight: "bold",
              color: "#222",
            }}
          >
            Total: ₹ {totalPrice.toFixed(2)}
          </div>

          <Link to="/checkout">
            <button
              style={{
                display: "block",
                width: "100%",
                marginTop: "30px",
                padding: "14px 0",
                fontSize: "18px",
                fontWeight: "bold",
                color: "#fff",
                backgroundColor: "#1976d2",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#115293")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#1976d2")}
            >
              Proceed to Checkout
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
