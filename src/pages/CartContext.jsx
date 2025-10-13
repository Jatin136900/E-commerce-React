// CartContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
    // 🟢 Load cart from localStorage on first render
    const savedCart = localStorage.get
    
    Item("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 🟢 Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  
  // ✅ Add product with quantity
  const addToCart = (product, quantity = 1) => {
    
    setCart((prev) => {
      console.log(prev);
      
      const existing = prev.find((item) => item.id === product.id);
      
      if (existing) {
        console.log("...")
        // if product already exists, just increase quantity
        return prev.map((item) =>
          item.id === product.id
        ? { ...item, quantity: item.quantity + quantity }
        : item
      );
    } else {
      
      
      // otherwise, add it with given quantity
      return [...prev, { ...product, quantity }];
    }
  });
};

  // ✅ Update quantity manually (from cart page)
  const updateQuantity = (id, newQty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  // ✅ Remove item
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
