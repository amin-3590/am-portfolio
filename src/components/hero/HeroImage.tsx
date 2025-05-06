import { BsHexagon } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroImage = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center mb-15 md:pr-4"
    >
      <img
        src="public/images/HexaPic.png"
        alt="amin aliakbari"
        className="max-h-[450px] w-auto "
      />
      <div className="animate-pulse absolute -z-10 flex justify-center items-center">
        <BsHexagon className="md:h-[90%] sm:h-[120%] min-h-[550px] w-auto text-cyan-300 blur-md animate-[spin_20s_linear_infinite] " />
      </div>
    </motion.div>
  );
};

export default HeroImage;
