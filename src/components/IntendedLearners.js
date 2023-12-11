import { useState } from "react";
import DeleteIcon from "../icons/DeleteIcon";
import SettingBar from "./SettingBar";
import axios from "axios";
import { useParams } from "react-router-dom";
import Layout from "./Layout";

export default function IntendedLearners() {
  const [courseObjective, setCourseObjective] = useState(["", "", "", ""]);
  const [courseRequirement, setCourseRequirement] = useState([""]);
  const [courseFor, setCourseFor] = useState([""]);
  const { courseId } = useParams();

  function handleAddObjective() {
    setCourseObjective([...courseObjective, ""]);
  }

  function handleRemoveObjective(index) {
    if (courseObjective.length <= 4) return;
    const list = [...courseObjective];
    list.splice(index, 1);
    setCourseObjective(list);
  }

  function handleObjectiveChange(e, index) {
    const { value } = e.target;
    const list = [...courseObjective];
    list[index] = value;
    setCourseObjective(list);
  }

  function handleAddRequirement() {
    setCourseRequirement([...courseRequirement, ""]);
  }

  function handleRemoveRequirement(index) {
    if (courseRequirement.length <= 1) return;
    const list = [...courseRequirement];
    list.splice(index, 1);
    setCourseRequirement(list);
  }

  function handleRequirementChange(e, index) {
    const { value } = e.target;
    const list = [...courseRequirement];
    list[index] = value;
    setCourseRequirement(list);
  }

  function handleAddFor() {
    setCourseFor([...courseFor, ""]);
  }

  function handleRemoveFor(index) {
    if (courseFor.length <= 1) return;
    const list = [...courseFor];
    list.splice(index, 1);
    setCourseFor(list);
  }

  function handleForChange(e, index) {
    const { value } = e.target;
    const list = [...courseFor];
    list[index] = value;
    setCourseFor(list);
  }

  async function handleAddGoals(e) {
    e.preventDefault();
    const data = { courseObjective, courseRequirement, courseFor };
    await axios.post(
      `${process.env.REACT_APP_API_URL}/instructor/course/${courseId}/manage/goals/1`,
      data
    );
  }

  return (
    <Layout>
      <div className="flex flex-col px-6 shadow-2xl 2xl:m-12 2xl:px-12">
        <h1 className="title border-b border-gray-300">Intended learners</h1>
        <p className="py-10">
          The following descriptions will be publicly visible on your Course
          Landing Page and will have a direct impact on your course performance.
          These descriptions will help learners decide if your course is right
          for them.
        </p>
        <div>
          <h2>What will students learn in your course?</h2>
          <p className="py-3">
            You must enter at least 4 learning objectives or outcomes that
            learners can expect to achieve after completing your course.
          </p>
          <div className="flex flex-col gap-4 w-full">
            {courseObjective.map((objective, index) => (
              <div id={index}>
                <div className="flex items-center">
                  <input
                    className="ipt w-4/5 max-w-5xl"
                    name="objective"
                    type="text"
                    placeholder="New response"
                    value={objective}
                    onChange={(e) => handleObjectiveChange(e, index)}
                    maxLength={160}
                    required
                  />
                  <button
                    className={
                      courseObjective.length <= 4
                        ? "text-gray-500 p-4 disabled cursor-not-allowed"
                        : "text-gray-500 hover:text-black p-4"
                    }
                    onClick={handleRemoveObjective}
                  >
                    <DeleteIcon />
                  </button>
                </div>
                <div>
                  {courseObjective.length - 1 === index &&
                    courseObjective.length < 100 && (
                      <button
                        className="my-5 font-bold text-[#cc1728]"
                        onClick={() => handleAddObjective(index)}
                      >
                        <span className="text-2xl">+</span> Add more to your
                        response
                      </button>
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2>
            What are the requirements or prerequisites for taking your course?
          </h2>
          <p className="py-3">
            List the required skills, experience, tools or equipment learners
            should have prior to taking your course. If there are no
            requirements, use this space as an opportunity to lower the barrier
            for beginners.{" "}
          </p>
          <div className="flex flex-col gap-4 w-full">
            {courseRequirement.map((requirement, index) => (
              <div id={index}>
                <div className="flex items-center">
                  <input
                    className="ipt w-4/5 max-w-5xl"
                    name="objective"
                    type="text"
                    placeholder="New response"
                    value={requirement}
                    onChange={(e) => handleRequirementChange(e, index)}
                    maxLength={160}
                    required
                  />
                  <button
                    className={
                      courseRequirement.length <= 1
                        ? "text-gray-500 p-4 disabled cursor-not-allowed"
                        : "text-gray-500 hover:text-black p-4"
                    }
                    onClick={handleRemoveRequirement}
                  >
                    <DeleteIcon />
                  </button>
                </div>
                <div>
                  {courseRequirement.length - 1 === index &&
                    courseRequirement.length < 100 && (
                      <button
                        className="my-5 font-bold text-[#cc1728]"
                        onClick={() => handleAddRequirement(index)}
                      >
                        <span className="text-2xl">+</span> Add more to your
                        response
                      </button>
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2>Who is this course for?</h2>
          <p className="py-3">
            Write a clear description of the intended learners for your course
            who will find your course content valuable. This will help you
            attract the right learners to your course.
          </p>
          <div className="flex flex-col gap-4 w-full">
            {courseFor.map((c, index) => (
              <div id={index}>
                <div className="flex items-center">
                  <input
                    className="ipt w-4/5 max-w-5xl"
                    name="objective"
                    type="text"
                    placeholder="New response"
                    value={c}
                    onChange={(e) => handleForChange(e, index)}
                    maxLength={160}
                    required
                  />
                  <button
                    className={
                      courseFor.length <= 1
                        ? "text-gray-500 p-4 disabled cursor-not-allowed"
                        : "text-gray-500 hover:text-black p-4"
                    }
                    onClick={handleRemoveFor}
                  >
                    <DeleteIcon />
                  </button>
                </div>
                <div>
                  {courseFor.length - 1 === index && courseFor.length < 100 && (
                    <button
                      className="my-5 font-bold text-[#cc1728]"
                      onClick={() => handleAddFor(index)}
                    >
                      <span className="text-2xl">+</span> Add more to your
                      response
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button onClick={handleAddGoals}>Save</button>
    </Layout>
  );
}
