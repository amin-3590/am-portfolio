import ProjectsImage from "./ProjectsImage";
import ProjectsText from "./ProjectsText";

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1150px] mx-auto px-5 py-6 overflow-hidden">
      <ProjectsText />
      <ProjectsImage />
      <div className="my-20 text-[19px] font-bold text-center md:text-2xl text-gray-300/90">
        <a href="https://github.com/amin-3590" className="transition-colors border-b-2 hover:text-cyan-300">
          All Project
        </a>
      </div>
    </div>
  );
};

export default ProjectsMain;
