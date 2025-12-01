"use client";
import { createContext, useContext, useState } from "react";

export type CartEntry = {
  item: { name: string; price: number };
  qty: number;
};

type CartContextType = {
  cart: CartEntry[];
  addToCart: (item: any) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartEntry[]>([]);

  function addToCart(entry: CartEntry) {
    setCart((prev) => [...prev, entry]);
  }

  function clearCart() {
    setCart([]);
  }

  function removeFromCart(index: number) {
    setCart((prev) => prev.filter((_, i) => i !== index));
  }
  

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }
  return context;
}
