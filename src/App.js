import { Route, Routes } from "react-router-dom";
import CourseList from "./pages/CourseList";
import NewCourse from "./pages/NewCourse";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CourseEditPage from "./pages/edit course/CourseEditPage";
import IntendedLearners from "./components/IntendedLearners";
import Curriculum from "./components/Curriculum";
import LandingPage from "./components/LandingPage";
import { CurriculumContextProvider } from "./context/CurriculumContext";
import CurriculumPage from "./pages/CurriculumPage";
import SearchPage from "./pages/SearchPage";
import ViewCourse from "./pages/View course";
import Setting from "./components/SettingComp/Setting";


function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/instructor" element={<CourseList />} />
        <Route path="/instructor/course/create" element={<NewCourse />} />
        <Route
          path="/instructor/course/:courseId/edit"
          element={<CourseEditPage />}
        />
        <Route
          path="/instructor/course/:courseId/edit/goals"
          element={<IntendedLearners />}
        />
        <Route
          path="/instructor/course/:courseId/edit/curriculum"
          element={<CurriculumPage />}
        />

        <Route
          path="/instructor/course/:courseId/edit/basics"
          element={<LandingPage />}
        />
        <Route
          path="/course/query"
          element={<SearchPage />}
        />
        <Route
          path="/course/view/:courseId"
          element={<ViewCourse />}
        />
        <Route
          path="/course/settingtest"
          element={<Setting />}
        />
      </Routes>
    </div>
  );
}

export default App;
