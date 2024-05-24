import GoogleSignIn from "@/components/GoogleSignIn";

export default function AuthPage() {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="w-2/5  bg-slate-50 border-2 border-slate-800 p-4 flex items-center flex-col rounded-lg">
        <h1 className="text-2xl font-bold">Sign In</h1>
        <div className="px-10 w-full">
          <form className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                className="text-md w-full p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                className="text-md w-full p-2 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-900 px-10 py-5 text-xl font-bold rounded-lg text-white"
            >
              Sign in
            </button>
          </form>
          <div className="w-full h-[1px] bg-slate-500 rounded-xl my-5"></div>
          <GoogleSignIn />
        </div>
      </div>
    </div>
  );
}
