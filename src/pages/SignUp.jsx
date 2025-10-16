import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

export default function SignUp() {
  const navigate = useNavigate();
  const { login } = useCart();
  const [message, setMessage] = useState("");

  // Get and save used accounts
  function getUsedAccounts() {
    try {
      const raw = localStorage.getItem("usedAccounts");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }
  function saveUsedAccounts(accounts) {
    try {
      localStorage.setItem("usedAccounts", JSON.stringify(accounts));
    } catch {}
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const firstName = form.get("firstName")?.trim();
    const lastName = form.get("lastName")?.trim();
    const email = form.get("email")?.trim()?.toLowerCase();
    const password = form.get("password")?.trim();
    const dobDay = form.get("day");
    const dobMonth = form.get("month");
    const dobYear = form.get("year");
    const gender = form.get("gender");

    if (!firstName || !email || !password) {
      alert("⚠️ Please fill all required fields.");
      return;
    }

    const usedAccounts = getUsedAccounts();
    const existingUser = usedAccounts.find((a) => a.email === email);

    if (existingUser) {
      alert("⚠️ This email is already registered. Please log in instead.");
      navigate("/LoginPage");
      return;
    }

    // Create new user object
    const userObj = {
      id: Date.now(),
      name: `${firstName} ${lastName}`,
      email,
      password,
      gender,
      dob: `${dobDay}-${dobMonth}-${dobYear}`,
      createdAt: new Date().toISOString(),
    };

    usedAccounts.push(userObj);
    saveUsedAccounts(usedAccounts);
    login(userObj);

    alert("🎉 Account created successfully! You are now logged in.");
    setMessage("Account created successfully!");
    setTimeout(() => navigate("/"), 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
          Create a new account
        </h2>
        <p className="text-center text-gray-500 mt-1 mb-4 text-sm">
          It's quick and easy.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex gap-2">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className="border border-gray-300 rounded-lg px-3 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Surname"
              className="border border-gray-300 rounded-lg px-3 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* DOB */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Date of birth
            </label>
            <div className="flex gap-2 mt-1">
              <select
                name="day"
                className="border border-gray-300 rounded-lg px-2 py-1 w-1/3 focus:ring-2 focus:ring-green-400"
              >
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select
                name="month"
                className="border border-gray-300 rounded-lg px-2 py-1 w-1/3 focus:ring-2 focus:ring-green-400"
              >
                {[
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ].map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>
              <select
                name="year"
                className="border border-gray-300 rounded-lg px-2 py-1 w-1/3 focus:ring-2 focus:ring-green-400"
              >
                {Array.from({ length: 100 }, (_, i) => (
                  <option key={i}>{2025 - i}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Gender</label>
            <div className="flex justify-between mt-1">
              {["Female", "Male", "Custom"].map((g) => (
                <label
                  key={g}
                  className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-1 w-[32%] justify-center cursor-pointer"
                >
                  <input type="radio" name="gender" value={g} required />
                  <span className="text-sm">{g}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Email + Password */}
          <input
            type="email"
            name="email"
            placeholder="Mobile number or email address"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="New password"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          {/* Terms */}
          <p className="text-xs text-gray-500 mt-2 leading-snug">
            By clicking Sign Up, you agree to our{" "}
            <span className="text-blue-600 underline cursor-pointer">Terms</span>
            ,{" "}
            <span className="text-blue-600 underline cursor-pointer">
              Privacy Policy
            </span>{" "}
            and{" "}
            <span className="text-blue-600 underline cursor-pointer">
              Cookies Policy
            </span>
            .
          </p>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg text-lg mt-3 transition-all"
          >
            Sign Up
          </button>

          {message && (
            <p className="mt-3 text-center text-green-600 font-semibold">
              {message}
            </p>
          )}
        </form>

        <p
          onClick={() => navigate("/LoginPage")}
          className="text-blue-600 text-center mt-4 text-sm font-medium cursor-pointer hover:underline"
        >
          Already have an account?
        </p>
      </div>
    </div>
  );
}
