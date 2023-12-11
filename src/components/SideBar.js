import { Link } from "react-router-dom";
import IntendedLearners from "./IntendedLearners";
import Curriculum from "./Curriculum";
import LandingPage from "./LandingPage";
import { useState } from "react";
import SettingBar from "./SettingBar";
import { CurriculumContextProvider } from "../context/CurriculumContext";

export default function SideBar({ courseId }) {
  // const path = window.location.pathname;
  const [toggle, setToggle] = useState(0);

  return (
    <div className="2xl:flex mx-2">
      <div className="hidden 2xl:flex-none 2xl:w-56 2xl:mt-20 2xl:flex 2xl:flex-col">
        <Link
          to={`/instructor/course/${courseId}/edit/goals`}
          className={toggle === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => setToggle(1)}
        >
          Intended learners
        </Link>
        <Link
          to={`/instructor/course/${courseId}/edit/curriculum`}
          className={toggle === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => setToggle(2)}
        >
          Curriculum
        </Link>
        <Link
          to={`/instructor/course/${courseId}/edit/basics`}
          className={toggle === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => setToggle(3)}
        >
          Course landing page
        </Link>
      </div>
      {/* <div>
          <div className={toggle === 1 ? "content active-content" : "content"}>
            <IntendedLearners courseId={courseId} />
          </div>
          <div className={toggle === 2 ? "content active-content" : "content"}>
            <CurriculumContextProvider>
              <Curriculum courseId={courseId} />
            </CurriculumContextProvider>
          </div>
          <div className={toggle === 3 ? "content active-content" : "content"}>
            <LandingPage />
          </div>
        </div> */}
    </div>
  );
}
