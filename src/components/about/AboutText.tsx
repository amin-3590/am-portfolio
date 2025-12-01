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
      <p className="mt-10 w-full md:w-[25rem] lg:w-[43rem] lg:text-justify text-balance text-gray-300/90">
        I am Amin AliAkbari, a passionate web developer with a passion for coding and learning.
        I specialize in React and modern front-end development, with a focus on building high-quality,
        real-world projects and mastering cutting-edge web technologies. My goal is to grow professionally,
        strengthen my portfolio, and advance my career to the next level by creating impactful,
        market-ready applications that solve real-world problems. I am committed to excellence,
        consistently delivering my best work, and have successfully developed innovative, functional,
        and production-ready solutions that meet industry needs. With a mindset of continuous learning and improvement,
        I thrive on challenges and aim to apply creativity and precision to every project I work on.
      </p>
      <div className="mt-11">
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
      </div>
    </motion.div>
  );
};

export default AboutText;
