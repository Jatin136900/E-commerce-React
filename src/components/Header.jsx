import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function Header({ currency, setCurrency }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-amber-700 text-white px-6 py-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
          Logo
        </h1>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-3xl md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-lg">
          {/* Currency Toggle */}
          <div className="flex gap-2 bg-gray-200 p-1 rounded-full shadow-inner">
            <h1
              onClick={() => setCurrency("INR")}
              className={`cursor-pointer px-4 py-1 rounded-full font-bold transition-all duration-300 ${
                currency === "INR"
                  ? "bg-yellow-400 text-white"
                  : "text-gray-700 hover:bg-yellow-200"
              }`}
            >
              ₹
            </h1>
            <h1
              onClick={() => setCurrency("USD")}
              className={`cursor-pointer px-4 py-1 rounded-full font-bold transition-all duration-300 ${
                currency === "USD"
                  ? "bg-yellow-400 text-white"
                  : "text-gray-700 hover:bg-yellow-200"
              }`}
            >
              $
            </h1>
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
            <a href="#" className="hover:text-yellow-300 transition">
              <FaShoppingCart />
            </a>
            <a href="#" className="hover:text-yellow-300 transition">
              <IoMdLogIn />
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 mt-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-4 text-lg bg-amber-800 p-4 rounded-xl shadow-md">
          <div className="flex justify-center gap-2 bg-gray-200 p-1 rounded-full w-fit mx-auto mb-3 shadow-inner">
            <h1
              onClick={() => setCurrency("INR")}
              className={`cursor-pointer px-4 py-1 rounded-full font-bold transition-all duration-300 ${
                currency === "INR"
                  ? "bg-yellow-400 text-white"
                  : "text-gray-700 hover:bg-yellow-200"
              }`}
            >
              ₹
            </h1>
            <h1
              onClick={() => setCurrency("USD")}
              className={`cursor-pointer px-4 py-1 rounded-full font-bold transition-all duration-300 ${
                currency === "USD"
                  ? "bg-yellow-400 text-white"
                  : "text-gray-700 hover:bg-yellow-200"
              }`}
            >
              $
            </h1>
          </div>

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

          <div className="flex justify-center gap-6 text-xl mt-2">
            <a href="#" className="hover:text-yellow-300 transition">
              <FaShoppingCart />
            </a>
            <a href="#" className="hover:text-yellow-300 transition">
              <IoMdLogIn />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
