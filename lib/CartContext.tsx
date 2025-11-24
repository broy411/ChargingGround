"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item) {
    setCart((prev) => {
      const existing = prev.find((p) => p.item.name === item.name);

      if (existing) {
        return prev.map((p) =>
          p.item.name === item.name ? { ...p, qty: p.qty + 1 } : p
        );
      }

      return [...prev, { item, qty: 1 }];
    });
  }

  function removeFromCart(index) {
    setCart((prev) => {
      const entry = prev[index];
      if (!entry) return prev;

      if (entry.qty > 1) {
        return prev.map((p, i) =>
          i === index ? { ...p, qty: p.qty - 1 } : p
        );
      }

      return prev.filter((_, i) => i !== index);
    });
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}


// "use client";


// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cart, setCart] = useState([]);

//   function addItem(item) {
//     setCart((prev) => [...prev, item]);
//   }

//   return (
//     <CartContext.Provider value={{ cart, addItem }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   return useContext(CartContext);
// }
