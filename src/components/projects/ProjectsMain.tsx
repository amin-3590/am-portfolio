import ProjectsImage from "./ProjectsImage";
import ProjectsText from "./ProjectsText";

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1150px] mx-auto px-5 py-8 overflow-hidden">
      <ProjectsText />
      <ProjectsImage />
    </div>
  );
};

export default ProjectsMain;
