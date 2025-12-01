import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const ContactInfo = () => {
  return (
    <div className="mt-12 flex flex-col gap-4">
      <div className="flex items-center gap-3 text-lg text-gray-300">
        <MdOutlineMailOutline className="text-3xl" />
        <h1>lyakbryamyn7@gmail.com</h1>
      </div>
      <div className="flex items-center gap-3 text-lg text-gray-300">
        <FiPhone className="text-3xl" />
        <p>+98 0913 423 0680</p>
      </div>
      <div className="flex items-center gap-3 text-lg text-gray-300">
        <IoLocationOutline className="text-3xl" />
        <h1>Iran, Kashan</h1>
      </div>
    </div>
  );
};

export default ContactInfo;
