const Project = ({ name, desktopView, description, report_link, code_link }) => {
  return (
    <div className="grid gap-2 md:gap-4 w-[95%] md:grid-cols-2">
      <img src={desktopView} alt={name} className="rounded-md  m-auto h-[23vh] w-[100%] md:h-[42vh]" />
      <div className="grid gap-2 md:gap-4 md:place-content-center">
        <h4 className="font-extrabold text-xl">{name}</h4>
        <p className="text-gray-600 text-lg hidden md:block">{description}</p>
        <span className="flex items-center justify-center gap-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={report_link}
          className="bg-green-300 text-black font-bold w-full py-1 rounded-md text-center"
        >
          Report
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={code_link}
          className="bg-green-300 text-black font-bold w-full py-1 rounded-md text-center"
        >
      Code
        </a>
        </span>
      </div>
    </div>
  );
};
export default Project;
