"use client";

<<<<<<< HEAD
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
=======
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
>>>>>>> origin/master

export default function LoginPage() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (typeof window !== "undefined" && status === "authenticated") {
      window.location.href = "/events";
    }
  }, [status]);

  const handleLogin = async () => {
    await signIn("google", { callbackUrl: "/events" });
  };

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    return (
      <div
        id="login-page"
        className="relative flex h-screen items-center justify-center bg-gradient-to-br from-[#e8f5e9] via-[#e3f2fd] to-[#f3e5f5]"
      >
        <div className="flex w-[450px] flex-col items-center rounded-2xl border border-gray-200 bg-white p-8 shadow-md">
          <Image
            src="/images/campus_feed_logo.svg"
            alt="Campus Feed"
            width={200}
            height={200}
            className="mb-6"
          />
          <p className="mt-1 text-sm text-gray-500">
            Logged in as {session.user.email}
          </p>
          <button
            onClick={handleLogout}
            className="login mt-6 flex w-full items-center justify-center rounded-md py-2 text-black shadow-md hover:opacity-90"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      id="login-page"
      className="relative flex h-screen items-center justify-center bg-gradient-to-br from-[#e8f5e9] via-[#e3f2fd] to-[#f3e5f5]"
    >
      <div className="flex w-[450px] flex-col items-center rounded-2xl border border-gray-200 bg-white p-8 shadow-md">
        <Image
          src="/images/campus_feed_logo.svg"
          alt="Campus Feed"
          width={200}
          height={200}
          className="mb-6"
        />
        <p className="mt-1 text-sm text-gray-500">Login to Publish</p>
        <p className="text-xs text-gray-400">Your events in Campus Feed</p>

        <button
<<<<<<< HEAD
          onClick={handleLogin}
=======
          onClick={() =>
            signIn("google", {
              callbackUrl: "/",
            })
          }
>>>>>>> origin/master
          className="login mt-6 flex w-full items-center justify-center rounded-md py-2 text-black shadow-md hover:opacity-90"
        >
          <Image
            src="/google.png"
            alt="Google"
            width={25}
            height={25}
            className="mr-2"
          />
          Continue with Google
        </button>

        <p className="mt-4 text-center text-xs text-gray-500">
          On proceeding you agree to our{" "}
          <span className="font-medium text-gray-800">
            Terms and Conditions
          </span>
        </p>

        <div className="mt-3 w-full cursor-not-allowed rounded-md bg-gray-100 py-2 text-center text-xs text-gray-400">
          Note: Only KIIT Students can login
        </div>
      </div>

      <p className="absolute bottom-10 text-center text-xs text-gray-500">
        You can publish events of your societies at one <br /> place for
        everyone to discover.
      </p>
    </div>
  );
}
