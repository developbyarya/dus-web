import Image from "next/image";
import Navbar from "@/view/navbar";

export default function Home() {
  const isLogin = false;
  return (
    <>
      {!isLogin ? (
        <h1 className="font-bold text-center text-4xl"> Please Login First!</h1>
      ) : (
        <h1>Some other things</h1>
      )}
    </>
  );
}
