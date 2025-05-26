import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [paymentMode, setPaymentMode] = useState("cash");

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePayment = () => {
    alert(`Payment successful via ${paymentMode}! Total: ₹${totalPrice}`);
    clearCart();   // Cart clear after payment success
    navigate("/"); // Redirect to home or success page
  };

  return (
    <div style={styles.container}>
      <h2>Checkout</h2>

      <div style={styles.cartSummary}>
        <h3>Order Summary</h3>
        {cart.map((item) => (
          <div key={item.id} style={styles.cartItem}>
            <span>{item.name} x {item.quantity}</span>
            <span>₹ {item.price * item.quantity}</span>
          </div>
        ))}
        <h3 style={{ marginTop: "15px" }}>Total: ₹ {totalPrice}</h3>
      </div>

      <div style={styles.paymentSection}>
        <h3>Choose Payment Mode</h3>
        <label style={styles.label}>
          <input
            type="radio"
            value="cash"
            checked={paymentMode === "cash"}
            onChange={(e) => setPaymentMode(e.target.value)}
          />
          Cash on Delivery
        </label>

        <label style={styles.label}>
          <input
            type="radio"
            value="online"
            checked={paymentMode === "online"}
            onChange={(e) => setPaymentMode(e.target.value)}
          />
          Online Payment
        </label>

        <button onClick={handlePayment} style={styles.payButton}>
          Pay ₹{totalPrice}
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "30px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#fff",
  },
  cartSummary: {
    marginBottom: "25px",
    paddingBottom: "15px",
    borderBottom: "1px solid #ccc",
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
    fontSize: "16px",
    color: "#333",
  },
  paymentSection: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "16px",
    marginBottom: "12px",
    cursor: "pointer",
  },
  payButton: {
    marginTop: "15px",
    padding: "12px",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "18px",
  },
};

export default Checkout;
