import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  localStorage.setItem("isLoggedIn", true);
localStorage.setItem("currentUser", JSON.stringify(validUser));


  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    // get existing users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // check if email already exists
    const userExists = users.find(user => user.email === email);

    if (userExists) {
      alert("User already exists. Please login.");
      return;
    }

    // create new user
    const newUser = { name, email, password };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful 🎉 Please login");

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">

        <h2 className="text-2xl font-semibold text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email address"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Sign Up
          </button>

        </form>

      </div>
    </div>
  );
};

export default Signup;
