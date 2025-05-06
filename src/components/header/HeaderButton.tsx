import { GoArrowDownRight } from "react-icons/go";
import { Link } from "react-scroll";

const HeaderButton = () => {
  return (
    <button className="px-4 py-2 flex items-center gap-1 text-white border border-cyan-300 rounded-full font-bold text-lg cursor-pointer font-roboto bg-gradient-to-r from-cyan-500 to-orange-400 hover:scale-110 hover:border-orange-300 hover:shadow-[0_0_20px_0_rgba(14,211,207,0.4)] transition-all duration-500 ">
      <Link
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
        offset={-120}
        className="flex items-center gap-x-1"
      >
        Hire Me <GoArrowDownRight />
      </Link>
    </button>
  );
};

export default HeaderButton;
