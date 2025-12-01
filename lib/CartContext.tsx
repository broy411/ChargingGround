"use client";
import { createContext, useContext, useState } from "react";

export type CartItem = {
  name: string;
  price: number;
  image?: string;
  description?: string;
  calories?: number;
  macros?: {
    protein: number;
    carbs: number;
    fat: number;
  };
};

export type CartEntry = {
  item: CartItem;
  qty: number;
};

type CartContextType = {
  cart: CartEntry[];
  addToCart: (item: CartItem) => void;
  decreaseQty: (name: string) => void;
  removeFromCart: (name: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartEntry[]>([]);

  function addToCart(item: CartItem) {
    setCart((prev) => {
      const existing = prev.find((e) => e.item.name === item.name);
      if (existing) {
        return prev.map((entry) =>
          entry.item.name === item.name
            ? { ...entry, qty: entry.qty + 1 }
            : entry
        );
      }
      return [...prev, { item, qty: 1 }];
    });
  }

  function decreaseQty(name: string) {
    setCart((prev) => {
      const entry = prev.find((e) => e.item.name === name);
      if (!entry) return prev;

      if (entry.qty <= 1) {
        return prev.filter((e) => e.item.name !== name);
      }

      return prev.map((e) =>
        e.item.name === name ? { ...e, qty: e.qty - 1 } : e
      );
    });
  }

  function removeFromCart(name: string) {
    setCart((prev) => prev.filter((e) => e.item.name !== name));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, decreaseQty, removeFromCart, clearCart }}
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
