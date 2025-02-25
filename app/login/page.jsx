"use client";

import Image from "next/image";
import { signIn, useSession } from "next-auth/react";

export default function LoginPage() {
  const session = useSession();
  console.log(session);
  return (
    <div className="login-page relative flex h-screen items-center justify-center">
      <Image
        src="/ellipse.svg"
        alt="Ellipse"
        width={200}
        height={200}
        className="absolute left-0 top-0 w-80 sm:w-[500px]"
      />
      <Image
        src="/ellipse.svg"
        alt="Ellipse"
        width={200}
        height={200}
        className="absolute bottom-0 right-0 w-80 sm:w-[500px]"
      />
      <div className="flex w-[400px] flex-col items-center rounded-2xl border border-gray-200 bg-white p-8 shadow-md">
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
          onClick={() => signIn("google")}
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
