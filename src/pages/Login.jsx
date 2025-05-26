import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      alert("Login successful");
      navigate("/cart");
    } else {
      alert("Invalid credentials");
    }
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
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="admin@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
            placeholder="1234"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "15px",
            }}
          />

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
              Login
            </button>
            <button
              type="button"
              onClick={() => navigate("/signup")}
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
              Go to Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
