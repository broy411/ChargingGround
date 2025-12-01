"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useParams } from "next/navigation";

// ---------- Types ----------
type OrderStatus = "pending" | "preparing" | "ready";

type OrderItem = {
  item: { name: string; price: number };
  qty: number;
};

type Order = {
  id: string;
  status: OrderStatus;
  items: OrderItem[];
  name: string;
  email: string;
};

export default function TrackOrderPage() {
  const statusLabels = {
    pending: "Received",
    preparing: "Preparing",
    ready: "Ready for Pickup",
  };

  const params = useParams();
  const id = params.id;

  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    if (!id) return;

    async function loadOrder() {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("id", id)
        .single();

      if (!error && data) {
        setOrder(data as Order);
      }
    }

    loadOrder();

    const interval = setInterval(loadOrder, 5000);
    return () => clearInterval(interval);
  }, [id]);

  if (!order) {
    return (
      <div className="container-page py-10">
        <h1 className="text-3xl font-bold">Loading Order…</h1>
      </div>
    );
  }

  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold">Order Status</h1>
      <p className="mt-2 text-neutral-600">Order ID: {id}</p>

      {/* Progress Bar */}
      <div className="mt-10">
        <div className="flex justify-between mb-3 text-sm font-medium">
          <span className={order.status === "pending" ? "text-blue-600" : ""}>
            Received
          </span>
          <span className={order.status === "preparing" ? "text-blue-600" : ""}>
            Preparing
          </span>
          <span className={order.status === "ready" ? "text-blue-600" : ""}>
            Ready
          </span>
        </div>

        <div className="relative h-3 bg-neutral-200 rounded-full">
          <div
            className="absolute top-0 left-0 h-3 bg-blue-500 rounded-full transition-all duration-500"
            style={{
              width:
                order.status === "pending"
                  ? "33%"
                  : order.status === "preparing"
                  ? "66%"
                  : "100%",
            }}
          ></div>
        </div>
      </div>

      {/* Current status */}
      <div className="mt-6 p-4 border rounded-xl bg-neutral-50">
        <h2 className="text-xl font-semibold">Current Status:</h2>
        <p className="mt-2 text-lg capitalize">
          <strong>{statusLabels[order.status]}</strong>
        </p>
      </div>

      {/* Items */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Your Items</h2>
        <ul className="ml-5 list-disc space-y-1">
          {order.items.map((entry, idx) => (
            <li key={idx}>
              {entry.item.name} × {entry.qty}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
