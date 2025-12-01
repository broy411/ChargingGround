"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

import type { User } from "@supabase/supabase-js";


interface Order {
  id: string;
  name: string;
  status: string;
  items: { item: { name: string }; qty: number }[];
  created_at: string;
}


export default function AdminPage() {
        const router = useRouter();

        const [user, setUser] = useState<User | null>(null);     
        const [orders, setOrders] = useState<Order[]>([]);

  // Load user
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) router.push("/admin/login");
      else setUser(data.user);
    });
  }, []);

  // Load orders continuously
  useEffect(() => {
    if (!user) return;

    const fetchOrders = async () => {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setOrders((prev) => {
          // Insert new ones but keep removed ones gone
          const previousIds = prev.map((o) => o.id);
          const newOnes = data.filter((o) => !previousIds.includes(o.id));

          // Keep only orders that aren't picked up
          const filtered = data.filter((o) => o.status !== "picked-up");

          return filtered;
        });
      }
    };

    fetchOrders();
    const interval = setInterval(fetchOrders, 4000);
    return () => clearInterval(interval);
  }, [user]);

  // --- THIS ONE GUARANTEES REMOVAL ---
  async function updateStatus(id: string, status: string) {
    await supabase
      .from("orders")
      .update({ status })
      .eq("id", id);

    if (status === "picked-up") {
      setOrders((prev) => prev.filter((o) => o.id !== id)); // <- removes instantly
    } else {
      setOrders((prev) =>
        prev.map((o) => (o.id === id ? { ...o, status } : o))
      );
    }
  }

  if (!orders) return null;

  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold mb-6">All Orders</h1>

      {orders.length === 0 ? (
        <p>No current orders.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            className="p-4 border rounded mb-4 bg-white shadow"
          >
            <div className="flex justify-between">
              <div>
                <p><strong>Name:</strong> {order.name}</p>
                <p><strong>Status:</strong> {order.status}</p>
              </div>

              <select
                className="border p-1 rounded"
                value={order.status}
                onChange={(e) => updateStatus(order.id, e.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="preparing">Preparing</option>
                <option value="ready">Ready</option>
                <option value="picked-up">Picked Up</option>
              </select>
            </div>

            <div className="mt-2 text-sm">
              <p><strong>Items:</strong></p>
              <ul className="list-disc ml-5">
                {order.items?.map((i, idx) => (
                <li key={idx}>{i.item?.name} x{i.qty}</li>
                ))}
                </ul>

            </div>
          </div>
        ))
      )}
    </div>
  );
}
