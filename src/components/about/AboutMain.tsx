import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

const AboutMain = () => {
  return (
    <div id="about" className="max-w-[1150px] mx-auto pt-25 text-center md:flex items-center justify-between gap-4">
      <AboutText />
      <AboutImage />
    </div>
  );
};

export default AboutMain;
