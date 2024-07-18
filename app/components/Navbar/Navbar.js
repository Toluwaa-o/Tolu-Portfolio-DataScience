"use client";

import Link from "next/link";
import HamburgerMenu from "./Hamburger";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  const [show, setShow] = useState(false);

  return (
    <nav className="flex justify-between relative p-4 items-center h-[7vh]">
      <Link
        className="flex text-black text-lg md:font-extrabold md:text-xl transition-all md:m-auto"
        href="/"
      >
        <p>Toluwalashe</p>
      </Link>
      <HamburgerMenu show={show} setShow={setShow} />
      <ul
        className={`md:hidden absolute bg-white top-[7vh] w-[100vw] left-0 right-0 shadow-md p-4 text-center grid gap-4 justify-center ${
          show ? "nav_in" : "nav_out"
        } md:flex md:relative md:top-[unset] md:w-fit md:gap-8 md:shadow-none`}
      >
        <li>
          <Link
            className={`${
              path === "/" ? "text-black" : "text-gray-600"
            } font-bold text-lg transition-all md:hover:text-black`}
            onClick={() => setShow(false)}
            href="/"
          >
            <p>Home</p>
          </Link>
        </li>

        <li>
          <a
            className="text-gray-600 font-bold text-lg transition-all md:hover:text-black"
            href="https://github.com/Toluwaa-o"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setShow(false)}
          >
            <p>Github</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
