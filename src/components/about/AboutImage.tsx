import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AboutImage = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="relative h-[500px] w-[300px] mx-auto md:mr-4"
      >
        <div className="mt-12 md:mt-6 h-[500px] w-[300px] rounded-[100px] overflow-hidden">
          <img
            src="public/images/about-me.jpg"
            className="w-full h-full object-cover"
            alt="about me"
          />
          <div className="bg-orange-400 h-[500px] w-[250px] absolute -z-10 bottom-[-30px] left-[-30px] md:bottom-[-50px] rounded-tl-3xl rounded-bl-[100px] rounded-br-3xl"></div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutImage;
