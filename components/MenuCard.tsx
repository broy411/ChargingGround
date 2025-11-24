"use client";

import { useState } from "react";
import MenuItemModal from "./MenuItemModal";

export default function MenuCard({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="border p-4 rounded cursor-pointer hover:shadow"
        onClick={() => setOpen(true)}
      >
        <h3 className="font-bold">{item.name}</h3>
        <p>${item.price}</p>
      </div>

      {open && (
        <MenuItemModal
          item={item}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
