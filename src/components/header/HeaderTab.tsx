import { Link } from "react-scroll";

const links: { link: string; section: string }[] = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const HeaderTab = () => {
  return (
    <ul className="flex lg:flex-row flex-col gap-6 text-white lg:relative absolute top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md text-xl bg-cyan-400/30 backdrop-blur-lg lg:bg-stone-900 w-full py-4">
      {links.map((link, index) => (
        <li className="group" key={index}>
          <Link
            to={link.section}
            spy={true}
            smooth={true}
            duration={500}
            offset={-120}
            className="text-lg transition-all duration-500 cursor-pointer hover:text-cyan-300"
          >
            {link.link}
          </Link>
          <div className="mx-auto bg-cyan-300 w-0 h-[1px] group-hover:w-full transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  );
};

export default HeaderTab;
