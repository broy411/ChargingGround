"use client";

import { createContext, useContext, useState } from "react";

export type MenuItem = {
  name: string;
  price: number;
  image: string;
  description: string;
  calories: number;
  macros: {
    protein: number;
    carbs: number;
    fat: number;
  };
};

export type CartEntry = {
  item: MenuItem;
  qty: number;
};

type CartContextType = {
  cart: CartEntry[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (name: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartEntry[]>([]);

  // ✅ Correct addToCart
  function addToCart(item: MenuItem) {
    setCart((prev) => {
      const existing = prev.find((entry) => entry.item.name === item.name);

      if (existing) {
        // Increase quantity if already in cart
        return prev.map((entry) =>
          entry.item.name === item.name
            ? { ...entry, qty: entry.qty + 1 }
            : entry
        );
      }

      // Add new item
      return [...prev, { item, qty: 1 }];
    });
  }

  // remove by item name (better than index)
  function removeFromCart(name: string) {
    setCart((prev) => prev.filter((entry) => entry.item.name !== name));
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
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }
  return context;
}
