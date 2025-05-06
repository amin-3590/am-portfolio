import { Link } from "react-scroll";

const links: { link: string; section: string }[] = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
];

const FooterText = () => {
  return (
    <div className="text-end mt-2">
      <div className="hidden md:flex items-center justify-between">
        <h1 className="text-4xl color-footer-text font-serif">
          Amin Aliakbari
        </h1>
        <ul className="color-footer-text flex items-center gap-x-3 text-lg">
          {links.map((link, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-gray-300 transition-all duration-500"
            >
              <Link
                to={link.section}
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
              >
                {link.link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <h1 className="text-sm color-footer md:mt-2">
        © 2025 Amin AliaKbari | All Rights Reserved.
      </h1>
    </div>
  );
};

export default FooterText;
