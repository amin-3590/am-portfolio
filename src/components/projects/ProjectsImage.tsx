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
      name: "Ecommerce Shopcart-am",
      year: "Mar2025",
      image: "/images/website-img-1.png",
      link: "https://shopcart-am.netlify.app/",
    },
    {
      name: "Code Tutor",
      year: "Sept2024",
      image: "/images/website-img-2.png",
      link: "https://am-codetuterui.netlify.app/",
    },
    {
      name: "Foodie Zone",
      year: "Jan2024",
      image: "/images/website-img-3.png",
      link: "https://am-foodie-zone.netlify.app/",
    },
    {
      name: "Weather App",
      year: "May2025",
      image: "/images/website-img-4.png",
      link: "https://amin-weather-app.netlify.app/",
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
          className={`flex w-full flex-col items-center justify-start md:gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
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
            className={`flex flex-col items-center justify-center mt-8 ${index % 2 === 0 ? "md:items-start" : "md:items-end"
              }`}
          >
            <h1 className="text-orange-400 text-2xl md:text-3xl">
              {item.name}
            </h1>
            <h1 className="text-gray-400 text-lg md:text-xl">{item.year}</h1>
            <a href={item.link} className="text-cyan-500 flex gap-2 items-center cursor-pointer hover:text-orange-400 transition-colors duration-500">
              View
              <BsArrowUpRightCircleFill />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsImage;
