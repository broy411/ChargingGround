"use client";
import { useCart } from "@/lib/CartContext";
// import Image from "next/image";
export default function MenuItemModal({ item, onClose }) {
  if (!item) return null;
  const { addToCart } = useCart();
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-xl max-w-sm w-full text-center">

        <h2 className="text-xl font-bold">{item.name}</h2>

        <img
          src={`/menu${item.image}`}
          alt={item.name}
          className="w-full h-40 object-cover rounded-lg mt-3"
        />
         {/* TITLE */}
         <h2 className="text-2xl font-bold">{item.name}</h2>

{/* DESCRIPTION */}
<p className="text-neutral-600 mt-1">{item.description}</p>

{/* CALORIES + MACROS */}
<div className="mt-3 text-sm text-neutral-700 space-y-1">
  <p><strong>Calories:</strong> {item.calories}</p>
  <p>
    <strong>Protein:</strong> {item.macros.protein}g ·{" "}
    <strong>Carbs:</strong> {item.macros.carbs}g ·{" "}
    <strong>Fat:</strong> {item.macros.fat}g
  </p>
</div>

{/* PRICE */}
<p className="text-lg font-semibold mt-3">${item.price}</p>

        {/* <p className="mt-3 text-neutral-700">
          {item.calories} calories · {item.protein}g protein
        </p> */}

        {/* ✅ Add to Cart button */}
        <button
          className="w-full bg-green-600 text-white py-2 rounded-lg mt-4 hover:bg-green-700"
          onClick={() => {
            addToCart(item);
            console.log("Added to cart:", item.name);
          }}
        >
          Add to Cart
        </button>

        {/* ❌ Close button */}
        <button
          className="w-full bg-gray-200 text-black py-2 rounded-lg mt-2"
          onClick={onClose}
        >
          Close
        </button>

      </div>
    </div>
  );
}
// import { useCart } from "@/lib/CartContext";
// import Image from "next/image";

// export default function MenuPopup({ item, onClose }) {
//   const { addItem } = useCart();

//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-lg max-w-md relative">

//         {/* image */}
//         <Image
//           src={`/menu${item.image}`}   // your images live in /public/menu/*
//           alt={item.name}
//           width={500}
//           height={350}
//           className="rounded-lg mb-4 object-cover"
//         />

//         <h2 className="text-2xl font-bold">{item.name}</h2>

//         {/* ADD TO CART BUTTON */}
//         <button
//           className="mt-4 bg-black text-white px-4 py-2 rounded"
//           onClick={() => {
//             addItem(item);
//             onClose();
//           }}
//         >
//           Add to Cart
//         </button>

//         <button
//           className="mt-2 text-sm underline"
//           onClick={onClose}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }
