import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user)); // save user in localStorage
    alert("Signup successful! Please login now.");
    navigate("/login");
  };

  const handleForgotPassword = () => {
    alert("Password recovery is not implemented yet. Please contact support.");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f3f4f6",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          padding: "30px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "25px", color: "#333" }}>
          Signup
        </h2>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "15px",
            }}
          />
          <input
            type="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "15px",
            }}
          />

          <p
            onClick={handleForgotPassword}
            style={{
              color: "#1976d2",
              cursor: "pointer",
              marginBottom: "20px",
              fontSize: "14px",
              textAlign: "right",
              textDecoration: "underline",
            }}
          >
            Forgot Password?
          </p>

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <button
              type="submit"
              style={{
                flex: 1,
                padding: "12px",
                backgroundColor: "#4CAF50",
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Signup
            </button>
            <button
              type="button"
              onClick={() => navigate("/login")}
              style={{
                flex: 1,
                padding: "12px",
                backgroundColor: "#1976d2",
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Go to Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
