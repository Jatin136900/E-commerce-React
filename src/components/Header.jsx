import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { NavLink, Link } from "react-router-dom";
import logo from '../assets/img/logo.png';

export default function Header({ currency, setCurrency }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-amber-700 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8 py-3">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-12 w-auto md:h-14" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-lg">
          {/* Currency Toggle */}
          <div className="flex gap-2 bg-gray-200 p-1 rounded-full shadow-inner">
            <button
              onClick={() => setCurrency("INR")}
              className={`px-4 py-1 rounded-full font-bold transition-all duration-300 ${currency === "INR"
                ? "bg-yellow-400 text-white"
                : "text-gray-700 hover:bg-yellow-200"
                }`}
            >
              ₹
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-4 py-1 rounded-full font-bold transition-all duration-300 ${currency === "USD"
                ? "bg-yellow-400 text-white"
                : "text-gray-700 hover:bg-yellow-200"
                }`}
            >
              $
            </button>
          </div>

          {/* Nav Links */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "hover:text-yellow-300 transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "hover:text-yellow-300 transition"
            }
          >
            About
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "hover:text-yellow-300 transition"
            }
          >
            Contact
          </NavLink>

          {/* Icons */}
          <div className="flex gap-4 text-xl">
            <Link to="AddToCart" className="hover:text-yellow-300 transition">
              <FaShoppingCart />
            </Link>
            <Link to="/" className="hover:text-yellow-300 transition">
              <IoMdLogIn />
            </Link>
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-amber-800 text-white overflow-hidden transition-all duration-300 ${open ? "max-h-screen" : "max-h-0"
          }`}
      >
        <nav className="flex flex-col gap-4 text-lg p-4">
          {/* Currency Toggle */}
          <div className="flex justify-center gap-2 bg-gray-200 p-1 rounded-full w-fit mx-auto mb-3 shadow-inner">
            <button
              onClick={() => setCurrency("INR")}
              className={`px-4 py-1 rounded-full font-bold transition-all duration-300 ${currency === "INR"
                ? "bg-yellow-400 text-white"
                : "text-gray-700 hover:bg-yellow-200"
                }`}
            >
              ₹
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-4 py-1 rounded-full font-bold transition-all duration-300 ${currency === "USD"
                ? "bg-yellow-400 text-white"
                : "text-gray-700 hover:bg-yellow-200"
                }`}
            >
              $
            </button>
          </div>

          {/* Links */}
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "hover:text-yellow-300 transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "hover:text-yellow-300 transition"
            }
          >
            About
          </NavLink>
          <NavLink
            to="contact"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "hover:text-yellow-300 transition"
            }
          >
            Contact
          </NavLink>

          {/* Mobile Icons */}
          <div className="flex justify-center gap-6 text-xl mt-2">
            <Link to="AddToCart" className="hover:text-yellow-300 transition">
              <FaShoppingCart />
            </Link>
            <Link to="/" className="hover:text-yellow-300 transition">
              <IoMdLogIn />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
