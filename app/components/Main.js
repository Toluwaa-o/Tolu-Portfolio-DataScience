import Link from "next/link";

export default function Main() {
  return (
    <div className="p-2 grid place-content-center gap-[3vh] md:min-h-[35vh]">
      <span className="text-4xl md:text-6xl font-black tracking-wide grid gap-2 md:gap-4">
        <h1 className="md:gap-2 md:grid">
          Hi, I'm{" "}
          <Link href="https://github.com/Toluwaa-o" className="bg_text w-fit h-fit md:inline">
            Toluwalashe
          </Link>
        </h1>
      </span>
      <p className="md:text-sm md:tracking-wide md:leading-6">
        Welcome to my data science portfolio! Explore projects showcasing my
        skills in predictive modeling, machine learning, and data analysis.
      </p>
    </div>
  );
}
