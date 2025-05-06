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
      <p className="text-gray-300 max-w-[1280px] text-lg px-3">
        I not only work with these technologies but excellent in using them with
        best practices to deliver high-quality results, I have been working with
        all these skills to build my portfolio projects
      </p>
    </motion.div>
  );
};

export default SkillsText;
