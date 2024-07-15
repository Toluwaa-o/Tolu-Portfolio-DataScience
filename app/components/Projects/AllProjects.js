"use client";

import { useState } from "react";
import Link from "next/link";

const AllProjects = () => {
  const [sectors, setSectors] = useState([
    { name: "Finance Projects", key: "finance" },
    { name: "E-Commerce / Retail Projects", key: "ecommerce" },
    { name: "Sports Projects", key: "sports" },
  ]);

  return (
    <div className="grid gap-[3vh] p-2 md:min-h-[40vh] place-content-center">
      {sectors.map((sector) => (
        <Link
          className="flex items-center uppercase gap-2 md:mb-[5vh] transition-all md:ml-auto"
          key={sector.name}
          href={`/${sector.key}`}
        >
          <span className="bg-black w-[10vw] h-[2px] hidden md:hover:block transition-all"></span>
          <h3 className={`tracker-wider text-2xl font-bold`}>
            {sector.name}
          </h3>
        </Link>
      ))}
    </div>
  );
};
export default AllProjects;
