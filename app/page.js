import LinkPage from "./components/Links";
import Main from "./components/Main";
import Projects from "./components/Projects/Projects";

export default function Home() {
  return (
    <div className="p-4 grid place-content-center gap-[5vh] md:max-h-[100vh] overflow-hidden md:grid-cols-2 md:grid-rows-2">
      <Main />
      <Projects />
      <LinkPage />
    </div>
  );
}
