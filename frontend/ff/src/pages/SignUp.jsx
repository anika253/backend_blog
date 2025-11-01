import React, { useState } from "react";
import axios from "axios";
import { dataContext } from "../context/UserContext.jsx";
import { useNavigate } from "react-router";
let nav = useNavigate();
const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });
  const handleSignUp = async (e) => {
    e.preventDefault(); // to stop refreshing again and again
    try {
      let data = await axios.post(
        serverUrl + "/api/sigup",
        {
          firstName,
          lastName,
          username,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can connect this later to your backend endpoint (e.g. /api/signup)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-[90%] max-w-md">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
            alt="user avatar"
            className="w-20 h-20 rounded-full mb-4"
          />
          <h2 className="text-2xl font-semibold text-white">Sign Up</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-3">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-1/2 p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-1/2 p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Sign Up
          </button>
          <p
            className="text-white cursor-pointer"
            onClick={() => nav("/login")}
          >
            Already have an account?{" "}
            <span className="text-indigo-400">Login</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
