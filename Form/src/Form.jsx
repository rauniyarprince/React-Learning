import React, { useState } from "react";

const FormExample = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // simple validation
    if (!formData.name || !formData.email || !formData.password) {
      alert("All fields are required!");
      return;
    }

    console.log("Form Submitted:", formData);

    // reset form
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Register Form</h2>

      <form onSubmit={handleSubmit}>
        
        {/* Name */}
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <br />

        {/* Email */}
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <br />

        {/* Password */}
        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormExample;