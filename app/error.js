"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="grid place-content-center bg-transparent h-[100vh] w-[100vw] absolute top-0 right-0 left-0">
      <div className="flex flex-col items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="85"
          viewBox="0 0 24 24"
          fill="red"
        >
          <path d="M11.001 10h2v5h-2zM11 16h2v2h-2z"></path>
          <path d="M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 0 0 .054 1.968A1.984 1.984 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 0 0 .054-1.968L13.768 4.2zM4.661 19 12 5.137 19.344 19H4.661z"></path>
        </svg>

        <h1 className="text-lg font-bold text-center">
          Oops, Something went wrong!{error.message}
        </h1>
        <Link
          className="font-bold border-2 border-black px-4 py-2 rounded"
          href="/"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
