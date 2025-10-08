import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function Header({ currency, setCurrency }) {



    const [open, setOpen] = useState(false);
    return (
        <header className="bg-amber-700 text-white px-8 py-5 shadow-md">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Logo</h1>
                <button className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
                    {open ? <FaTimes /> : <FaBars />}
                </button>
                <nav className="hidden md:flex items-center gap-10 text-lg">
                    <div className="flex gap-2 bg-gray-200 p-1 rounded-full w-fit shadow-md">
                        <h1
                            onClick={() => setCurrency("INR")}
                            className={`cursor-pointer px-4 py-1 rounded-full font-bold transition-all duration-300 ${currency === "INR" ? "bg-yellow-400 text-white" : "text-gray-700 hover:bg-yellow-200"
                                }`}
                        >
                            ₹
                        </h1>
                        <h1
                            onClick={() => setCurrency("USD")}
                            className={`cursor-pointer px-4 py-1 rounded-full font-bold transition-all duration-300 ${currency === "USD" ? "bg-yellow-400 text-white" : "text-gray-700 hover:bg-yellow-200"
                                }`}
                        >
                            $
                        </h1>
                    </div>

                    <NavLink to="/" className={({ isActive }) => (isActive ? "text-yellow-300" : "")}>
                        Home
                    </NavLink>
                    <NavLink to="about" className={({ isActive }) => (isActive ? "text-yellow-300" : "")}>
                        About
                    </NavLink>
                    <NavLink to="contact" className={({ isActive }) => (isActive ? "text-yellow-300" : "")}>
                        Contact
                    </NavLink>
                    <a href="#"><FaShoppingCart /></a>
                    <a href="#"><IoMdLogIn /></a>
                </nav>
            </div>
            {open && (
                <nav className="flex flex-col items-start gap-4 mt-4 md:hidden text-lg">
                    <NavLink to="/" className={({ isActive }) => (isActive ? "text-yellow-300" : "")}>Home</NavLink>
                    <NavLink to="about" className={({ isActive }) => (isActive ? "text-yellow-300" : "")}>About</NavLink>
                    <NavLink to="contact" className={({ isActive }) => (isActive ? "text-yellow-300" : "")}>Contact</NavLink>
                    <div className="flex gap-5 text-xl">
                        <a href="#"><FaShoppingCart /></a>
                        <a href="#"><IoMdLogIn /></a>
                    </div>
                </nav>
            )}
        </header>
    );
}
