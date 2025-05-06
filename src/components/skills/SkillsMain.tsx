import SkillsBottom from "./SkillsBottom";
import SkillsIcon from "./SkillsIcon";
import SkillsText from "./SkillsText";

const SkillsMain = () => {
  return (
    <>
      <div id="skills" className="max-w-[1150px] mx-auto pt-32 pb-16 relative overflow-hidden lg:min-h-[600px]">
        <SkillsText />
        <SkillsIcon />
      </div>
      <SkillsBottom />
    </>
  );
};

export default SkillsMain;
