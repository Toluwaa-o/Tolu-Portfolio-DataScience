import Link from "next/link";
import {
  FaXTwitter,
  FaGithub,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa6";

const LinkPage = () => {
  return (
    <div id="bottom" className="fill-myFill text-center min-h-[30vh] md:col-span-2">
      <h3 className="text-md font-bold md:text-lg">Contact me :</h3>
      <p className="mb-6">Get in touch for opportunities!</p>
      <span className="flex justify-center gap-3 text-black">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:asheogunleye@gmail.com"
        >
          <FaRegEnvelope size={30} />
        </Link>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/toiuwa"
        >
          <FaXTwitter size={30} />
        </Link>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/toluwalashe-ogunleye-943335272"
        >
          <FaLinkedinIn size={30} />
        </Link>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Toluwaa-o"
        >
          <FaGithub size={30} />
        </Link>
      </span>
    </div>
  );
};
export default LinkPage;
