import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "./CartContext"; // 🟢 import context

export default function AddToCart() {
  const { cart, removeFromCart } = useCart(); // get global cart

  const total = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <NavLink
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-100 text-blue-700 font-semibold rounded-xl shadow-sm hover:bg-blue-200 hover:shadow-md transition-all duration-300"
        >
          <span className="text-xl">←</span> Continue Shopping
        </NavLink>

        <h1 className="text-3xl font-bold text-gray-800">Your Cart 🛒</h1>
      </div>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20">
          <img
            src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
            alt="empty cart"
            className="w-40 mb-6 opacity-80"
          />
          <p className="text-gray-600 text-xl font-medium">
            Your cart is empty. Add something!
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-200 py-5 last:border-none"
            >
              <div className="flex items-center gap-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />
                <div>
                  <h2 className="font-semibold text-lg text-gray-800">{item.title}</h2>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition-all duration-300"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">Total: ${total}</h2>
            <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 transition-all duration-300">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
 