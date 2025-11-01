import React, { useState, useContext } from "react";
import { dataContext } from "../context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router";
let nav = useNavigate();

const Login = () => {
  const serverUrl = useContext(dataContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${serverUrl}/api/login`,
        { email, password },
        { withCredentials: true }
      );
      console.log("Login successful:", response.data);
      // You can add redirect logic here after successful login
    } catch (err) {
      console.error("Login error:", err.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-[90%] max-w-md">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/295/295128.png"
            alt="user icon"
            className="w-20 h-20 rounded-full mb-4"
          />
          <h2 className="text-2xl font-semibold text-white">Login</h2>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Login
          </button>
          <p
            className="text-white cursor-pointer"
            onClick={() => nav("/signup")}
          >
            Don’t have an account?{" "}
            <span className="text-indigo-400">Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
