import { Link } from "react-router-dom";
import SearchIcon from "../icons/SearchIcon";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CourseList() {
  const [courseList, setCourseList] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/instructor/course/user/1`)
      .then((result) => {
        console.log(result.data);
        setCourseList(result.data);
      });
  }, []);

  return (
    <div className="w-11/12 m-auto">
      <div className="py-5 flex items-center justify-end gap-6">
        <Link to={"/"} className="hover:text-[#cc1728]">
          Student
        </Link>
        <Link
          to={"/profile"}
          className="w-9 h-9 flex items-center justify-center bg-black text-white font-bold rounded-full"
        >
          VU
        </Link>
      </div>
      <h1 className="title text-4xl mt-4 mb-8">Courses</h1>
      <div className="flex justify-between">
        <div className="flex justify-between gap-8">
          <div className="border border-black flex w-60 h-10 items-center">
            <input
              className="h-full p-2"
              type="text"
              placeholder="Search your courses"
            />
            <div className="w-full h-full bg-black">
              <button className="text-white w-full h-full flex items-center justify-center">
                <SearchIcon />
              </button>
            </div>
          </div>
          <div className="border border-black flex items-center justify-center">
            <select className="font-bold px-2">
              <option>Newest</option>
              <option>Oldest</option>
              <option>A-Z</option>
              <option>Z-A</option>
              <option>Published first</option>
              <option>Unpublished first</option>
            </select>
          </div>
        </div>
        <Link
          to={"/instructor/course/create"}
          className="bg-[#cc1728] font-bold text-white px-3 flex items-center justify-center"
        >
          New course
        </Link>
      </div>
      <div className="flex flex-col gap-3 my-5">
        {courseList.length > 0 &&
          courseList.map((course) => (
            <div className="flex border border-black items-center">
              <img src={course.courseImage} alt="test" />
              <Link
                to={`/instructor/course/${course.courseId}/edit`}
                className="px-5 py-3 h-32 w-full"
              >
                {course.courseTitle}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
