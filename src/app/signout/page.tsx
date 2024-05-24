import { SignOut } from "@/firebase/auth/auth";
import { redirect } from "next/navigation";
export default async function Page() {
  try {
    await SignOut();
    redirect("/");
    return <>Redirecting...</>;
  } catch (error) {
    console.log(error);
    redirect("/");
    return <>Somethings not right. Redirecting...</>;
  }
}
