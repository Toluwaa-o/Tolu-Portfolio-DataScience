"use client";

import { useEffect, useState } from "react";
import data from "@/data";
import Project from "../components/Projects/Project";
import Link from "next/link";

const Page = ({ params: { slug } }) => {
  const [portfolioData, setPortfolioData] = useState(
    data.filter((dt) => dt.category === slug)
  );

  const arry = [
    { name: "Finance Projects", key: "finance" },
    { name: "E-Commerce / Retail Projects", key: "ecommerce" },
    { name: "Sports Projects", key: "sports" },
  ];

  const [projectName, setProjectName] = useState(null);

  useEffect(() => {
    let n = "";

    for (let sector in arry) {
      if (arry[sector].key === slug) {
        n = arry[sector].name;
      }
    }

    setProjectName(n);
  }, []);

  return (
    <div className="p-4 grid gap-4">
      {projectName && (
        <span className="flex items-center uppercase gap-2 md:mb-[5vh]">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
            </svg>
          </Link>
          <h3 className="tracker-wider text-lg">{projectName}</h3>
        </span>
      )}

      <div
        className="flex flex-col items-center gap-8 md:overflow-scroll md:h-[85vh] md:pb-[20vh]"
        id="scrollable"
      >
        {portfolioData.length ? (
          portfolioData.map((data) => <Project key={data.name} {...data} />)
        ) : (
          <h1 className="text-lg font-bold text-center">
            Sorry, no projects in this section yet!
          </h1>
        )}
      </div>
    </div>
  );
};
export default Page;
