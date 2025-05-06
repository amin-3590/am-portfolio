import { TfiHtml5 } from "react-icons/tfi";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IconType } from "react-icons";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills: { skill: string; icon: IconType }[] = [
  {
    skill: "HTML",
    icon: TfiHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "ReactJS",
    icon: RiReactjsLine,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "NextJS",
    icon: SiNextdotjs,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
];

const SkillsIcon = () => {
  return (
    <>
      <div className="lg:hidden mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-14">
        {skills.map((skill, index) => (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            key={index}
            className="flex flex-col items-center"
          >
            <skill.icon className="text-7xl text-orange-400 mb-3" />
            <h1 className="text-gray-300">{skill.skill}</h1>
          </motion.div>
        ))}
      </div>

      <div className="hidden lg:block bottom-[50px] absolute left-[50%] -translate-x-[50%] ">
        <div className="mt-10 flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              variants={fadeIn("up", Number(`0.${index}`))}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
              className="flex flex-col items-center gap-2 relative hover:-translate-y-[40px] transition-all duration-500"
            >
              <div className="bg-gray-300 text-5xl rounded-full text-cyan-500 h-[100px] w-[100px] border-4 border-orange-400 flex items-center justify-center hover:text-gray-700 hover:scale-105 transition-all duration-500">
                <skill.icon />
              </div>
              <h1 className="text-gray-300">{skill.skill}</h1>
              <div className="bg-orange-400 h-[200px] w-[100px] -z-10 absolute top-[50px]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsIcon;
