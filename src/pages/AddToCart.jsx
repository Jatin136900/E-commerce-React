import React from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import { useCart } from "./CartContext";

export default function AddToCart() {
  const { currency } = useOutletContext(); 
  const { cart, removeFromCart, updateQuantity } = useCart(); 

  const usdToInr = 82;

  const formatPrice = (price) => {
    if (currency === "INR") return `₹${(price * usdToInr).toFixed(2)}`;
    return `$${price.toFixed(2)}`;
  };

  const total = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen pt-24">
      <div className="flex justify-between items-center mb-6">
        <NavLink
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-100 text-blue-700 font-semibold rounded-xl shadow-sm hover:bg-blue-200 hover:shadow-md transition-all duration-300"
        >
          <span className="text-xl">←</span> Continue Shopping
        </NavLink>

        <h1 className="text-3xl font-bold text-gray-800 pl-3.5">Your Cart 🛒</h1>
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
              <div className="flex items-center gap-6 w-full md:w-auto">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />
                <div>
                  {/* Fixed width title box */}
                  <h2
                    className="font-semibold text-lg text-gray-800 w-48 truncate"
                    title={item.title}
                  >
                    {item.title}
                  </h2>

                  <p className="text-gray-500">
                    Price: {formatPrice(item.price)} each
                  </p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() =>
                    updateQuantity(item.id, Math.max(1, item.quantity - 1))
                  }
                  className="bg-gray-200 text-gray-700 px-3 py-2 rounded-lg font-bold text-xl hover:bg-gray-300 transition"
                >
                  −
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-200 text-gray-700 px-3 py-2 rounded-lg font-bold text-xl hover:bg-gray-300 transition"
                >
                  +
                </button>
              </div>

              <div className="flex flex-col items-end">
                <p className="text-lg font-semibold text-gray-800">
                  {formatPrice(item.price * item.quantity)}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition-all duration-300"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">
              Total:{" "}
              {currency === "INR"
                ? `₹${(total * usdToInr).toFixed(2)}`
                : `$${total}`}
            </h2>
            <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 transition-all duration-300 ml-2">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
