import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ProjectsText = () => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="mb-10"
    >
      <h1 className="text-5xl font-medium text-cyan-300 mb-10 text-center">
        Projects
      </h1>
      <p className="text-gray-300 text-center">
        I have worked on a variety of web development projects, ranging from
        responsive websites for small businesses to full-stack applications and
        complex front-end interfaces.
      </p>
    </motion.div>
  );
};

export default ProjectsText;
