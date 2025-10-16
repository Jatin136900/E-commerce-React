import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

export default function Logout() {
  const navigate = useNavigate();
  const { logout } = useCart();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
  
    logout();

    
    setShowToast(true);

   
    const timer = setTimeout(() => {
      navigate("/LoginPage");
    }, 1000);

   
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <p className="text-center text-xl animate-pulse mb-4">Logging out...</p>

  
      {showToast && (
        <div className="fixed top-10 bg-green-500 text-white px-6 py-3 rounded shadow-lg animate-bounce">
          Logout done successfully!
        </div>
      )}
    </div>
  );
}
