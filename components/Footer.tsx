import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-neutral-50">
      <div className="container-page py-8 grid sm:grid-cols-3 gap-6">
        <div>
          <div className="font-semibold">The Charging Ground</div>
          <p className="mt-2 text-sm text-neutral-700">
            Healthy grab-and-go by students, for students.
          </p>
        </div>
        <div>
          <div className="font-semibold">Visit</div>
          <p className="mt-2 text-sm text-neutral-700">
            Joyce Cummings Center, Tufts University
          </p>
          <p className="text-sm text-neutral-700">Mon–Fri • 7:00a – 11:00p</p>
        </div>
        <div>
          <div className="font-semibold">Links</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/menu" className="underline">Menu</Link></li>
            <li><Link href="/about" className="underline">About</Link></li>
            <li><Link href="/contact" className="underline">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-neutral-600">
        © {new Date().getFullYear()} The Charging Ground. All rights reserved.
      </div>
    </footer>
  );
}
