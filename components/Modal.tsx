"use client";

export default function Modal({ open, close, children }) {
  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-[998]"
        onClick={close}
      />

      {/* Modal panel */}
      <div
        className="fixed inset-0 flex items-center justify-center z-[999]"
      >
        <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl relative">
          
          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-3 right-3 text-xl"
          >
            ✕
          </button>

          {children}
        </div>
      </div>
    </>
  );
}
