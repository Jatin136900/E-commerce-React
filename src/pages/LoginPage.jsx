import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import Girl from '../assets/img/Girl.png';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, addToCart } = useCart();
  const [message, setmessage] = useState("");

  const handleSubmit = async (formData) => {
    await new Promise((res) => setTimeout(res, 2000));

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (email && password) {
      login({ id: Date.now(), name, email }); // save user

      const pending = localStorage.getItem("pendingAddToCart");
      if (pending) {
        const { product, quantity } = JSON.parse(pending);
        addToCart(product, quantity);
        localStorage.removeItem("pendingAddToCart");
        alert("✅ Product automatically added to cart!");
      }

      setmessage("Login Successful");
      setTimeout(() => navigate("/"), 800);
    } else {
      setmessage("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden w-[90%] max-w-5xl">
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gray-50 p-10">
          <img src={Girl} alt="illustration" className="w-72 mb-6" />
          <p className="text-gray-500 text-center font-medium">
            Welcome back! Please enter your details to continue.
          </p>
        </div>

        <div className="flex flex-col justify-center w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Login</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(new FormData(e.target));
            }}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              required
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 shadow-lg transition-all"
            >
              Login
            </button>
          </form>

          {message && <p className="mt-4 text-green-600 font-semibold">{message}</p>}
        </div>
      </div>
    </div>
  );
}
