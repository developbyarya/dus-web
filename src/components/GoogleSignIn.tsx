"use client";
import { useState } from "react";
import { GooglePopUp } from "@/firebase/auth/auth";
import { useRouter } from "next/navigation";

export default function GoogleSignIn() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const signIn = () => {
    setLoading(true);
    GooglePopUp()
      .then((user) => {
        setLoading(false);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <button
      onClick={() => signIn()}
      className="w-full bg-indigo-700 hover:bg-indigo-900 px-10 py-5 text-xl font-bold rounded-lg text-white"
    >
      {loading ? <>Loading...</> : <>Sign In with Google</>}
    </button>
  );
}
