import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences: {
  job: string;
  company: string;
  date: string;
  responsibilities: string[];
}[] = [
  {
    job: "Front-End Developer",
    company: "Alex Apps",
    date: "2022 - Present",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Course Instructor",
    company: "Nucamp",
    date: "2023 - Present",
    responsibilities: [
      "Explaining and facilitating web development concepts.",
      "Help students with their assignments and grade them weekly.",
      "Provide support for students through their learning journey.",
    ],
  },
  {
    job: "Course Instructor",
    company: "Sprints",
    date: "2024 - Present",
    responsibilities: [
      "Teaching JavaScript, React and TailwindCSS.",
      "Participating in preparing course materials.",
      "Helping students through their way in learning web development technologies.",
    ],
  },
];

const ExperienceCard = () => {
  return (
    <div className="mt-12 flex flex-col gap-10 md:flex md:flex-row justify-between lg:items-center md:gap-0">
      {experiences.map((item, index) => (
        <>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            key={index}
            className="md:h-[350px] md:w-[240px] border-2 border-dashed border-orange-400 p-2 md:p-1 text-left rounded-xl mx-4"
          >
            <div className="p-2">
              <h1 className="text-cyan-400 ">{item.job}</h1>
              <h1 className="text-orange-400">{item.company}</h1>
              <h1 className="text-gray-400">{item.date}</h1>
              <ul className="list-disc mt-4 pl-4">
                {item.responsibilities.map((responsibilitie, index) => (
                  <li key={index} className="text-gray-300">
                    {responsibilitie}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="hidden lg:block"
          >
            {index < 2 ? (
              <FaArrowRight className="font-bold text-6xl text-orange-400" />
            ) : (
              ""
            )}
          </motion.div>
        </>
      ))}
    </div>
  );
};

export default ExperienceCard;
