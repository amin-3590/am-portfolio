import HeroBotton from "./HeroBotton";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

const HeroMain = () => {
  return (
    <>
      <div className="max-w-[1150px] mx-auto md:pt-35 md:pb-6 md:flex justify-between">
        <HeroText />
        <HeroImage />
      </div>
      <div>
        <HeroBotton />
      </div>
    </>
  );
};

export default HeroMain;
