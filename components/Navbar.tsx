"use client"
import { useState, useEffect } from "react";
import Link from "next/link";


import { useCart } from "@/lib/CartContext";
import CartDrawer from "./CartDrawer";



const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];
export default function Navbar() {
        const { cart } = useCart();
        const [open, setOpen] = useState(false);
      
        return (
                <>
                  <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b h-20 flex items-center">
                    <div className="container-page h-full flex items-center justify-between">
              
                      {/* Logo */}
                      <Link href="/" className="flex items-center gap-2">
                        <img src="/logo.png" alt="logo" className="h-10 w-auto" />
                      </Link>
              
                      {/* Nav links */}
                      <nav className="flex items-center gap-3">
                        <Link href="/menu" className="px-3 py-2 text-sm hover:bg-neutral-100 rounded-xl">Menu</Link>
                        <Link href="/about" className="px-3 py-2 text-sm hover:bg-neutral-100 rounded-xl">About</Link>
                        <Link href="/contact" className="px-3 py-2 text-sm hover:bg-neutral-100 rounded-xl">Contact</Link>
              
                        {/* Cart Icon */}
                        <button
                          onClick={() => setOpen(true)}
                          className="relative px-3 py-2"
                        >
                          🛒
                          {cart.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-tufts-blue text-white text-xs rounded-full px-2 py-0.5">
                              {cart.length}
                            </span>
                          )}
                        </button>
                      </nav>
                    </div>
                  </header>
              
                  {/* Drawer OUTSIDE header so it overlays properly */}
                  <CartDrawer open={open} setOpen={setOpen} />
                </>
              );
}              