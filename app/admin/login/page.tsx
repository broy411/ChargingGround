"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage("Invalid email or password.");
      return;
    }

    router.push("/admin");
  }

  return (
    <div className="container-page py-20 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Login</h1>

      <form onSubmit={handleLogin} className="space-y-4">
        {errorMessage && (
          <p className="text-red-500 text-sm">{errorMessage}</p>
        )}

        <input
          type="email"
          placeholder="Admin Email"
          className="w-full border p-3 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary w-full" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}
