import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { Link } from "react-scroll";

const AboutText = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="px-6 md:pl-4 md:text-left"
    >
      <h1 className="text-5xl font-medium text-cyan-300 mb-10">About Me</h1>
      <p className="text-gray-300 max-w-[1280px] mb-10">
        I’m Amin, a web developer instructor with a passion for teaching and
        coding. I specialize in React and front-end development, helping
        students build real-world projects and master modern web technologies.
        also run a YouTube channel, CodeNest, where I create tutorials and
        courses to guide aspiring developers in their journey toward successful
        careers in tech. Outside of coding, I enjoy continuous learning and
        sharing knowledge to inspire others to achieve their goals.
      </p>
      <Link
        to="projects"
        spy={true}
        smooth={true}
        duration={500}
        offset={-120}
        className="text-lg bg-transparent text-gray-300 border border-orange-400 py-3 px-4 rounded-full cursor-pointer hover:bg-orange-400 hover:text-cyan-400 transition-all duration-500"
      >
        My Projects
      </Link>
    </motion.div>
  );
};

export default AboutText;
