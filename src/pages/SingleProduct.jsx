import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
import { useOutletContext } from "react-router";
import { useCart } from "./CartContext"; // 🟢 import context

function SingleProduct() {
  const { currency } = useOutletContext();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
  const [usdToInr, setUsdToInr] = useState(0);
  const { addToCart } = useCart(); // 🟢 access global add function

  useEffect(() => {
    fetchExchangeRate();
    fetchProduct();
  }, [id]);

  async function fetchExchangeRate() {
    try {
      const res = await axios.get("https://api.exchangerate-api.com/v4/latest/USD");
      setUsdToInr(res.data.rates.INR);
    } catch (err) {
      console.error("Error fetching exchange rate:", err);
    }
  }

  async function fetchProduct() {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      if (response.data && Object.keys(response.data).length > 0) {
        setProduct(response.data);
        setError(false);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  }

  if (error)
    return (
      <div className="text-center mt-20">
        <p className="text-4xl font-semibold text-red-600 h-[75vh] flex justify-center items-center">
          ❌ No product found
        </p>
      </div>
    );

  if (!product)
    return (
      <p className="text-center mt-20 text-gray-600 text-lg animate-pulse">
        Loading...
      </p>
    );

  const price =
    currency === "INR"
      ? (product.price * usdToInr).toFixed(2)
      : product.price.toFixed(2);
  const currencySymbol = currency === "INR" ? "₹" : "$";

  return (
    <div className="p-6 md:p-10 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <NavLink
        to="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-100 text-blue-700 font-semibold rounded-xl shadow-sm hover:bg-blue-200 hover:shadow-md transition-all duration-300 mb-6 mt-20"
      >
        <span className="text-xl">←</span> Back to Products
      </NavLink>

      <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-10 transition-all duration-300">
        <div className="flex justify-center w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="h-72 md:h-96 object-contain drop-shadow-md transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-extrabold text-gray-800">{product.title}</h1>
          <p className="text-gray-600">{product.description}</p>

          <div className="pt-3">
            <p className="text-red-600 text-3xl font-bold mb-2">
              {currencySymbol}
              {price}
            </p>
            <p className="text-sm text-gray-500 italic">
              Category: {product.category}
            </p>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
