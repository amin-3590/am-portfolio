import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SkillsText = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="text-center"
    >
      <h1 className="text-5xl font-medium text-cyan-300 mb-10">My Skills</h1>
      <p className="text-gray-300/90 max-w-[1280px] text-lg px-3">
        Not only do I work with these technologies,
        but I also use other technologies and am excellent at using them along with best practices to deliver high-quality results.
        I have used all of these skills to build my portfolio projects.
      </p>
    </motion.div>
  );
};

export default SkillsText;
