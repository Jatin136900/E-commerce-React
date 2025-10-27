import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

export default function SignUp() {
  const navigate = useNavigate();
  const { /* login */ } = useCart(); // we are NOT auto-logging in after sign up
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

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

  const isValidEmail = (v) => {
    if (!v) return false;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(v);
  };

  const isValidPhone = (v) => {
    if (!v) return false;
    const digits = v.replace(/\D/g, "");
    return digits.length >= 10 && digits.length <= 15;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setMessage("");

    const form = new FormData(e.target);
    const firstName = form.get("firstName")?.trim();
    const lastName = form.get("lastName")?.trim();
    const contact = form.get("email")?.trim()?.toLowerCase();
    const password = form.get("password")?.trim();
    const dobDay = form.get("day");
    const dobMonth = form.get("month");
    const dobYear = form.get("year");
    const gender = form.get("gender");

    // basic required check
    if (!firstName || !contact || !password) {
      setMessage("⚠️ Please fill all required fields.");
      setBusy(false);
      return;
    }

    // validate contact
    if (!isValidEmail(contact) && !isValidPhone(contact)) {
      setMessage("⚠️ Enter a valid email or mobile number (10-15 digits).");
      setBusy(false);
      return;
    }

    // check duplicate
    const usedAccounts = getUsedAccounts();
    const existingUser = usedAccounts.find((a) => a.email === contact);
    if (existingUser) {
      // DO NOT redirect — stay on SignUp and show message
      setMessage("⚠️ This email/number is already registered. Please use a different contact or go to Login.");
      setBusy(false);
      return;
    }

    // All good — create account (but do NOT auto-login)
    const userObj = {
      id: Date.now(),
      name: `${firstName} ${lastName}`.trim(),
      email: contact,
      password,
      gender,
      dob: `${dobDay}-${dobMonth}-${dobYear}`,
      createdAt: new Date().toISOString(),
    };

    usedAccounts.push(userObj);
    saveUsedAccounts(usedAccounts);

    // success — show message and redirect to LoginPage after short delay
    setMessage("🎉 Account created successfully! Redirecting to Login...");
    setTimeout(() => {
      setBusy(false);
      navigate("/LoginPage");
    }, 900);
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

          <div>
            <label className="text-sm font-semibold text-gray-700">
              Date of birth
            </label>
            <div className="flex gap-2 mt-1">
              <select name="day" className="...">
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select name="month" className="...">
                {[
                  "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",
                ].map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>
              <select name="year" className="...">
                {Array.from({ length: 100 }, (_, i) => (
                  <option key={i}>{2025 - i}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700">Gender</label>
            <div className="flex justify-between mt-1">
              {["Female", "Male", "Custom"].map((g) => (
                <label key={g} className="flex items-center gap-2 border rounded-lg px-3 py-1 w-[32%] justify-center cursor-pointer">
                  <input type="radio" name="gender" value={g} required />
                  <span className="text-sm">{g}</span>
                </label>
              ))}
            </div>
          </div>

          <input
            type="text"
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

          <p className="text-xs text-gray-500 mt-2 leading-snug">
            By clicking Sign Up, you agree to our{" "}
            <span className="text-blue-600 underline cursor-pointer">Terms</span>,{" "}
            <span className="text-blue-600 underline cursor-pointer">Privacy Policy</span>{" "}
            and <span className="text-blue-600 underline cursor-pointer">Cookies Policy</span>.
          </p>

          <button
            type="submit"
            disabled={busy}
            className={`bg-amber-700 hover:bg-green-700 text-white font-bold py-2 rounded-lg text-lg mt-3 transition-all cursor-pointer ${busy ? "opacity-60 cursor-not-allowed" : ""}`}
          >
            {busy ? "Processing..." : "Sign Up"}
          </button>

          {message && (
            <p className="mt-3 text-center text-red-600 font-semibold">{message}</p>
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
