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
    company: "Code Tutor",
    date: "2024 - Present",
    responsibilities: [
      "Implementing reusable components.",
      "Designed a clean and engaging UI with a strong focus on readability and visual hierarchy.",
      "Fully responsive layout ensuring a seamless experience across desktop, tablet, and mobile devices.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Front-End Developer",
    company: "ShopCart-am",
    date: "2025 - Present",
    responsibilities: [
      "Optimized loading speed and API performance for a better user experience.",
      "Designed and developed a fully responsive, modern UI with smooth animations using Framer Motion.",
      "Utilized TypeScript for type safety and improved code maintainability across the application.",
    ],
  },
  {
    job: "Front-End Developer",
    company: "Weather App",
    date: "2025 - Present",
    responsibilities: [
      "Implemented real-time API integration for accurate weather updates globally.",
      "Focused on performance optimization and smooth user experience.",
      "Created interactive and visually appealing charts to display temperature, humidity, and other key metrics.",
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
            className="md:h-[415px] md:w-[228px] border-2 border-dashed border-orange-400 p-2 md:p-1 text-left rounded-xl mx-4"
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
