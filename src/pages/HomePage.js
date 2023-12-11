import Curriculum from "../components/Curriculum";
import LandingPage from "../components/LandingPage";
import NavigationBar from "../components/NavigationBar";
import SideBar from "../components/SideBar";
import CurriculumPage from "./CurriculumPage";

export default function HomePage() {
  return (
    <div>
      <NavigationBar />
      <CurriculumPage />
    </div>
  );
}
