import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom"

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
                    <Link to="about">About</Link>
                    <Link to="contact">Contact</Link>
                    <div className="flex gap-5 text-xl">
                        <a href="#"><FaShoppingCart /></a>
                        <a href="#"><IoMdLogIn /></a>
                    </div>
                </nav>
            )}
        </header>
    );
}
