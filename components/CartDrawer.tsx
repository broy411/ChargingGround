"use client";

import { useCart } from "@/lib/CartContext";
import Link from "next/link";

export default function CartDrawer({ open, setOpen }) {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();


  const total = cart.reduce((sum, entry) => sum + entry.item.price * entry.qty, 0);


  return (
    <>
      {/* BACKDROP (click to close) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-[998]"
        />
      )}

      {/* DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl border-l
                    transition-transform duration-300 z-[999]
                    ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button onClick={() => setOpen(false)} className="text-xl">
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-160px)]">
          {cart.length === 0 && (
            <p className="text-neutral-600 text-center mt-10">
              Your cart is empty.
            </p>
          )}

        {cart.map((entry, idx) => (
          <div
            key={idx}
            className="border rounded-xl p-3 flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{entry.item.name}</p>
              <p className="text-sm text-neutral-600">
                ${entry.item.price.toFixed(2)} × {entry.qty}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                className="px-2 py-1 bg-neutral-200 rounded"
                onClick={() => removeFromCart(idx)}
              >
                -
              </button>

              <span className="font-semibold">{entry.qty}</span>

              <button
                className="px-2 py-1 bg-neutral-200 rounded"
                onClick={() => addToCart(entry.item)}
              >
                +
              </button>
            </div>
          </div>
        ))}

        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t bg-white">
          <div className="flex justify-between font-semibold mb-3">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <Link href="/checkout" onClick={() => setOpen(false)}>
            <button className="btn btn-primary w-full">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
