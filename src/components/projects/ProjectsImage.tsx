import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects: {
  name: string;
  year: string;
  image: string;
  link: string;
}[] = [
  {
    name: "Vacation of Africa",
    year: "Mar2022",
    image: "public/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "Moola App",
    year: "Sept2022",
    image: "public/images/website-img-2.webp",
    link: "#",
  },
  {
    name: "Tourzania",
    year: "Jan2023",
    image: "public/images/website-img-3.jpg",
    link: "#",
  },
  {
    name: "Bank of Luck",
    year: "May2024",
    image: "public/images/website-img-4.jpg",
    link: "#",
  },
];

const ProjectsImage = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[900px] mx-auto gap-15">
      {projects.map((item, index) => (
        <motion.div
          variants={fadeIn("top", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          key={index}
          className={`flex w-full flex-col items-center justify-start md:gap-8 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <div className="relative h-[220px] w-[400px] border border-gray-200 rounded-xl overflow-hidden hover:scale-110 transition-all duration-500">
            <div className="absolute w-full h-full md:bg-cyan-400 md:opacity-30 hover:opacity-0 transition-all duration-500"></div>
            <img
              src={item.image}
              alt="projects image"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`flex flex-col items-center justify-center mt-8 ${
              index % 2 === 0 ? "md:items-start" : "md:items-end"
            }`}
          >
            <h1 className="text-orange-400 text-2xl md:text-3xl">
              {item.name}
            </h1>
            <h1 className="text-gray-400 text-lg md:text-xl">{item.year}</h1>
            <button className="text-cyan-500 flex gap-2 items-center cursor-pointer hover:text-orange-400 transition-colors duration-500">
              View
              <BsArrowUpRightCircleFill />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsImage;
