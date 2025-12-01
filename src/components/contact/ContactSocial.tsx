import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="mt-12 flex items-center justify-center gap-4">
      <div className="border border-orange-400 rounded-full p-3 text-2xl text-orange-400 cursor-pointer">
        <a href="https://www.linkedin.com/in/aminaliakbari/">
          <FaLinkedinIn />
        </a>
      </div>
      <div className="border border-orange-400 rounded-full p-3 text-2xl text-orange-400 cursor-pointer">
        <a href="https://github.com/amin-3590">
          <FiGithub />
        </a>
      </div>
      <div className="border border-orange-400 rounded-full p-3 text-2xl text-orange-400 cursor-pointer">
        <a href="https://instagram.com/amin.fe47">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default ContactSocial;
