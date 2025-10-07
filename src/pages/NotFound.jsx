import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-screen h-screen  flex flex-col items-center justify-center text-white">
      <div className="w-[50%] max-w-[500px] mb-8 ">
        <img
          src="https://i.pinimg.com/1200x/6a/00/d9/6a00d9f0d294ea4311382be18fd78f88.jpg"
          alt="Not Found"
          className="w-full h-full object-cover rounded-2xl shadow-2xl border border-gray-700"
        />
      </div>

      <h1 className="text-6xl font-bold mb-2">404</h1>
      <p className="text-xl text-red-800 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}
