import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const passwordValid =
    formData.password.length >= 8 &&
    /\d/.test(formData.password);

  const isFormInvalid = !(emailValid && passwordValid);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormInvalid) {
      alert("Login Successful!");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />

          {formData.email && !emailValid && (
            <p style={{ color: "red" }}>
              Please enter a valid email address.
            </p>
          )}
        </div>

        <div style={{ marginTop: "15px" }}>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />

          {formData.password && !passwordValid && (
            <p style={{ color: "red" }}>
              Password must be at least 8 characters long and contain at least one number.
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isFormInvalid}
          style={{ marginTop: "15px" }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default App;