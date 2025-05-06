import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ExperienceSubject = () => {
  return (
    <div>
      <motion.h1
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-5xl font-medium text-cyan-300 mb-10 text-center"
      >
        Experience
      </motion.h1>
    </div>
  );
};

export default ExperienceSubject;
