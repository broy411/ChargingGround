"use client";

import { useCart } from "@/lib/CartContext";
import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function placeOrder() {
    const { data, error } = await supabase
      .from("orders")
      .insert({
        items: cart,
        name,
        email,
      })
      .select()
      .single();

    if (error) {
      alert("Error placing order");
      return;
    }

    clearCart();
    router.push(`/track/${data.id}`);
  }

  const total = cart.reduce(
    (sum, entry) => sum + entry.item.price * entry.qty,
    0
  );
  

  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold">Checkout</h1>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Your Items</h2>
        {cart.map((entry, index) => (
          <div key={index} className="flex justify-between border-b py-2">
            <span>
              {entry.item.name} × {entry.qty}
            </span>
            <span>${(entry.item.price * entry.qty).toFixed(2)}</span>
          </div>
))}

        <div className="mt-4 font-bold">
          Total: ${total.toFixed(2)}
        </div>
      </div>

      <div className="mt-6">
        <input
          placeholder="Your name"
          className="border p-2 rounded w-full"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          className="border p-2 rounded w-full mt-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={placeOrder} className="btn btn-primary mt-4">
          Place Order
        </button>
      </div>
    </div>
  );
}
