import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientOnly from "@/components/ClientOnly";
import { CartProvider } from "@/lib/CartContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Providers>
          <CartProvider>
            <ClientOnly>
              <Navbar />
            </ClientOnly>

            <main className="flex-1 pt-24">{children}</main>

            <ClientOnly>
              <Footer />
            </ClientOnly>
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
