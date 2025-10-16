
import { NavLink, useOutletContext } from "react-router-dom";
import { useCart } from "./CartContext";

export default function AddToCart() {
  const { currency } = useOutletContext(); 
  const { cart, removeFromCart, updateQuantity } = useCart(); 

  const usdToInr = 82;

  const formatPrice = (price) => currency === "INR" ? `₹${(price*usdToInr).toFixed(2)}` : `$${price.toFixed(2)}`;

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen pt-24">
      <div className="flex justify-between items-center mb-6">
        <NavLink to="/" className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-100 text-blue-700 font-semibold rounded-xl hover:bg-blue-200 transition">
          ← Continue Shopping
        </NavLink>
        <h1 className="text-3xl font-bold text-gray-800">Your Cart 🛒</h1>
      </div>

      {cart.length===0 ? (
        <div className="flex flex-col items-center mt-20">
          <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" className="w-40 mb-6 opacity-80" />
          <p className="text-gray-600 text-xl">Your cart is empty. Add something!</p>
        </div>
      ) : (
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10 flex flex-col gap-4">
          {cart.map(item=>(
            <div key={item.id} className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-200 py-5 last:border-none">
              <img src={item.image} className="w-20 h-20 object-contain" />
              <div className="flex-1">
                <h2 className="font-semibold text-lg w-48 truncate">{item.title}</h2>
                <p className="text-gray-500">Price: {formatPrice(item.price)}</p>
              </div>
              <div className="flex items-center gap-4">
                <button onClick={()=>updateQuantity(item.id, Math.max(1, item.quantity-1))} className="bg-gray-200 px-3 py-2 rounded-lg">−</button>
                <span>{item.quantity}</span>
                <button onClick={()=>updateQuantity(item.id, item.quantity+1)} className="bg-gray-200 px-3 py-2 rounded-lg">+</button>
              </div>
              <div className="flex flex-col items-end">
                <p>{formatPrice(item.price*item.quantity)}</p>
                <button onClick={()=>removeFromCart(item.id)} className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg">Remove</button>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold">Total: {currency==="INR"?`₹${(total*usdToInr).toFixed(2)}`:`$${total.toFixed(2)}`}</h2>
            <button className="px-6 py-3 bg-green-600 text-white rounded-xl">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}
