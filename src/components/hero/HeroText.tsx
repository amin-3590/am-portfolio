import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="text-center pt-40 md:pt-30 md:text-left md:pl-4 ">
      <motion.h1
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="uppercase text-neutral-400 font-medium text-2xl mb-2"
      >
        Front-End Web Developer
      </motion.h1>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-5xl lg:text-6xl font-bold text-orange-400 uppercase"
      >
        Amin AliAkbari
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mt-7 text-gray-300"
      >
        A Passionate Web Developer and Instructor <br />
        with 3 years of experience.
      </motion.p>
    </div>
  );
};

export default HeroText;
