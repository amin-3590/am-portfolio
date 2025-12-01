import AboutMain from "./components/about/AboutMain";
import ContactMain from "./components/contact/ContactMain";
import ExperienceMain from "./components/experience/ExperienceMain";
import FooterMain from "./components/footer/FooterMain";
import HeaderMain from "./components/header/HeaderMain";
import HeroGradient from "./components/hero/HeroGradient";
import HeroMain from "./components/hero/HeroMain";
import ProjectsMain from "./components/projects/ProjectsMain";
import SkillsMain from "./components/skills/SkillsMain";

function App() {
  return (
    <div className="overflow-hidden relative">
      <HeaderMain />
      <div className="relative">
        <HeroMain />
        <HeroGradient />
      </div>
      <AboutMain />
      <SkillsMain />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMain />
      <FooterMain />
    </div>
  );
}

export default App;
