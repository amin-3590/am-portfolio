import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="mt-12 flex items-center justify-center gap-4">
      <div className="border border-orange-400 rounded-full p-3 text-2xl text-orange-400 cursor-pointer">
        <FaLinkedinIn />
      </div>
      <div className="border border-orange-400 rounded-full p-3 text-2xl text-orange-400 cursor-pointer">
        <FiGithub />
      </div>
      <div className="border border-orange-400 rounded-full p-3 text-2xl text-orange-400 cursor-pointer">
        <FaInstagram />
      </div>
    </div>
  );
};

export default ContactSocial;
