import { Routes, Route } from "react-router-dom";
import CourseList from "../pages/CourseList";
import NewCourse from "../pages/NewCourse";
import CourseEditPage from "../pages/edit course/CourseEditPage";

export default function InstructorRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/instructor/" element={<CourseList />} />
        <Route path="/instructor/course/create" element={<NewCourse />} />
        <Route
          path="/instructor/course/:id/edit"
          element={<CourseEditPage />}
        />
      </Routes>
    </div>
  );
}
