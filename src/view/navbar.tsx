"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import {
  isLogin as FIsLogin,
  ListenAuthChanges,
  SignOut,
  getDisplayName,
} from "@/firebase/auth/auth";

export default function Navbar() {
  const pathname = usePathname();
  const searchparams = useSearchParams();
  const [isLogin, setLogin] = useState(FIsLogin());
  const [username, setUsername] = useState(isLogin ? getDisplayName() : "");

  useEffect(() => {
    ListenAuthChanges((username) => {
      setLogin(true);
      setUsername(username);
    });
  }, []);

  useEffect(() => {
    const loginState = FIsLogin();
    setLogin(loginState);
    if (loginState) {
      setUsername(getDisplayName());
    }
  }, [pathname, searchparams]);
  return (
    <nav className="h-20 w-full px-8 py-4 flex gap-6 bg-sky-900 text-white items-center">
      <Link href={"/"} className="font-bold text-2xl">
        DUS ADMIN
      </Link>
      <div className="flex gap-3">
        <Link href="#">Pending</Link>
        <Link href="#">Semua</Link>
      </div>
      <div className="grow"></div>
      {isLogin ? (
        <>
          <h1>{username}</h1>{" "}
          <button
            onClick={() => {
              SignOut();
              setLogin(false);
            }}
          >
            (Sign Out)
          </button>
        </>
      ) : (
        <Link href={"/auth"}>Login</Link>
      )}
    </nav>
  );
}
