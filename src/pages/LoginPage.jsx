import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import Girl from '../assets/img/Girl.png';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, addToCart } = useCart();
  const [message, setmessage] = useState("");

  // Get used accounts from localStorage
  function getUsedAccounts() {
    try {
      const raw = localStorage.getItem("usedAccounts");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  // Save used accounts to localStorage
  function saveUsedAccounts(accounts) {
    try {
      localStorage.setItem("usedAccounts", JSON.stringify(accounts));
    } catch (e) { }
  }

  // Handle login form submit
  const handleSubmit = async (formData) => {
    await new Promise((res) => setTimeout(res, 500));

    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim()?.toLowerCase();
    const password = formData.get("password");

    if (!email || !password) {
      setmessage("Please provide email and password");
      return;
    }

    const usedAccounts = getUsedAccounts();
    const already = usedAccounts.find((a) => a.email === email);

    if (already) {
      alert(
        "⚠️ You have already logged in. Please use your existing ID to log in. If you want to create a new account, click on Sign Up."
      );
      setmessage(
        "This account has already been used to login. Use your existing ID or Sign Up for a new account."
      );
      return;
    }

    // Proceed with login
    const userObj = { id: Date.now(), name: name || "User", email };
    login(userObj);

    // Save new account to usedAccounts
    usedAccounts.push({
      id: userObj.id,
      name: userObj.name,
      email: userObj.email,
      firstLoginAt: new Date().toISOString()
    });
    saveUsedAccounts(usedAccounts);

    // Handle pending add-to-cart
    const pending = localStorage.getItem("pendingAddToCart");
    if (pending) {
      try {
        const { product, quantity } = JSON.parse(pending);
        addToCart(product, quantity);
        localStorage.removeItem("pendingAddToCart");
        alert("✅ Product automatically added to cart!");
      } catch (e) { }
    }

    setmessage("Login Successful");
    setTimeout(() => navigate("/"), 800);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-5xl">

        {/* Left Illustration */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gray-50 p-6 lg:p-10">
          <img src={Girl} alt="illustration" className="w-56 md:w-72 mb-6 object-contain" />
          <p className="text-gray-500 text-center text-sm sm:text-base md:text-lg font-medium">
            Welcome back! Please enter your details to continue.
          </p>
        </div>

        {/* Login Form */}
        <div className="flex flex-col justify-center w-full md:w-1/2 p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">Login</h2>

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
              className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 shadow-lg transition-all mt-2"
            >
              Login
            </button>
          </form>

          {message && (
            <p className="mt-4 text-center md:text-left text-green-600 font-semibold">
              {message}
            </p>
          )}

          {/* Sign Up Button */}
          <button
            onClick={() => navigate("/signup")}
            className="mt-4 w-full py-3 rounded-xl font-semibold text-purple-700 border-2 border-purple-500 hover:bg-purple-50 transition-all"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
