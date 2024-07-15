import AllProjects from "./AllProjects";

const Projects = async () => {
  return (
    <article id="work" className="grid gap-[2vh] md:justify-self-end">
      <span className="flex items-center uppercase gap-2 md:mb-[5vh] md:ml-auto">
        <span className="bg-black w-[10vw] h-[2px]"></span>
        <h3 className="tracker-wider">Projects</h3>
      </span>

      <AllProjects />
    </article>
  );
};

export default Projects;
