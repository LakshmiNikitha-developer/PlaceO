import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
  e.preventDefault();

  const { email, password } = formData;

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    console.log("Response status:", response.status);

    const data = await response.json();
    console.log("Response data:", data);

    if (!response.ok) {
      alert(data.message || "Login failed");
      return;
    }

    // Save user
    localStorage.setItem("userInfo", JSON.stringify(data.user));

    alert("Login successful ✅");
    navigate("/dashboard");

  } catch (error) {
    console.error("FETCH ERROR:", error);
    alert("Backend not reachable. Check server & port.");
  }
};


  return (
    <div className="auth-container">
      <div className="auth-box glass">
        <h2>Welcome Back to PLACEO</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <p className="auth-link">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
