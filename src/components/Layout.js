import { useParams } from "react-router-dom";
import SettingBar from "./SettingBar";
import SideBar from "./SideBar";
import { CurriculumContextProvider } from "../context/CurriculumContext";

export default function Layout({ children }) {
  const { courseId } = useParams();
  return (
    <div>
      <SettingBar />
      <div className="flex">
        <SideBar courseId={courseId} />
        {children}
      </div>
    </div>
  );
}
