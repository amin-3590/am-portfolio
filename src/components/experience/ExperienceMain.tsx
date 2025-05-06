import ExperienceCard from "./ExperienceCard";
import ExperienceImage from "./ExperienceImage";
import ExperienceSubject from "./ExperienceSubject";
import ExperienceText from "./ExperienceText";
import ExperienceTitle from "./ExperienceTitle";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ExperienceMain = () => {
  return (
    <div
      id="experience"
      className="max-w-[1150px] mx-auto pt-32 pb-16 overflow-hidden"
    >
      <ExperienceSubject />
      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:flex items-center justify-center lg:px-10 gap-4"
      >
        <ExperienceTitle />
        <ExperienceImage />
        <ExperienceText />
      </motion.div>
      <div className="hidden lg:block h-1 w-auto color-gray mt-6"></div>
      <ExperienceCard />
    </div>
  );
};

export default ExperienceMain;
