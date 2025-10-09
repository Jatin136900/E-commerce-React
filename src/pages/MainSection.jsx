import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import axios from "axios";
import { useOutletContext } from "react-router";

function MainSection() {
  const { currency } = useOutletContext();  
  const [products, setProducts] = useState([]);
  const [usdToInr, setUsdToInr] = useState(0);

  useEffect(() => {
    fetchExchangeRate();
    fetchProducts();
  }, []);

  async function fetchExchangeRate() {
    try {
      const res = await axios.get("https://api.exchangerate-api.com/v4/latest/USD");
      setUsdToInr(res.data.rates.INR);
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
    }
  }

  async function fetchProducts() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  return (
    <main>
      <div className="p-5 bg-gray-50 mb-20">
        <h2 className="text-4xl font-semibold text-center mb-10 pt-3">Products</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((obj) => (
            <Link key={obj.id} to={`/product/${obj.id}`}>
              <div className="bg-white w-64 rounded-2xl shadow-md p-4 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <img
                  src={obj.image}
                  alt={obj.title}
                  className="h-52 object-contain mx-auto mb-4 transition-transform duration-300 hover:scale-105"
                />
                <h3 className="text-gray-800 font-medium text-base h-12 overflow-hidden text-ellipsis">
                  {obj.title}
                </h3>
                {currency === "INR" ? (
                  usdToInr ? (
                    <p className="text-red-500 text-[15px] font-semibold mt-2">
                      ₹{(obj.price * usdToInr).toFixed(2)}
                    </p>
                  ) : (
                    <p className="text-gray-400 text-sm">Loading...</p>
                  )
                ) : (
                  <p className="text-red-500 text-[15px] font-semibold mt-2">
                    ${obj.price.toFixed(2)}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default MainSection;
