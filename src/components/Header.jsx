import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-amber-700 text-white px-8 py-5 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Logo</h1>

      
        <button
          className="text-2xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        
        <nav className="hidden md:flex items-center gap-10 text-lg">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#"><FaShoppingCart /></a>
          <a href="#"><IoMdLogIn /></a>
        </nav>
      </div>

      
      {open && (
        <nav className="flex flex-col items-start gap-4 mt-4 md:hidden text-lg">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <div className="flex gap-5 text-xl">
            <a href="#"><FaShoppingCart /></a>
            <a href="#"><IoMdLogIn /></a>
          </div>
        </nav>
      )}
    </header>
  );
}
