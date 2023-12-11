import CloseIcon from "../icons/CloseIcon";
import { useContext, useState } from "react";
import axios from "axios";
import { CurriculumContext } from "../context/CurriculumContext";

export default function NewLectureForm({ index }) {
  const [showForm, setShowForm] = useState(false);
  const [lectureTitle, setLectureTitle] = useState("");
  const {
    curriculumList,
    addNewCurriculum,
    saveNewStructure,
    getCurriculum,
    structure,
    addNewStructureItem,
  } = useContext(CurriculumContext);

  function handleNewLecture() {
    setLectureTitle("");
    setShowForm(!showForm);
  }

  async function handleAddNewLecture(e) {
    e.preventDefault();
    if (lectureTitle.trim() === "" || lectureTitle === undefined) {
      alert("You need to fill all information");
      return;
    }
    const data = { lectureTitle, lectureDescription: "test" };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/instructor/course/2/curriculum/lecture`,
        data
      );

      const newObject = response.data;

      console.log(newObject);

      addNewCurriculum(newObject, index);

      const newStructureItem = {
        className: "lecture",
        divId: newObject.lectureId,
      };

      console.log("New structure item is: ", newStructureItem);

      const structToSend = [...structure];
      structToSend.splice(index, 0, newStructureItem);
      console.log("Struct to send is: ", structToSend);

      axios.post(
        `${process.env.REACT_APP_API_URL}/instructor/course/2/curriculum/structure`,
        structToSend
      );

      addNewStructureItem(newStructureItem, index);
    } catch (err) {
      console.log(err);
    }
    handleNewLecture();
  }

  return (
    <div className="group">
      {showForm && (
        <form className="flex flex-col gap-2 pt-3 pb-5">
          <span onClick={handleNewLecture}>
            <CloseIcon />
          </span>

          <div className="flex flex-col gap-4 px-3 py-4 border border-black bg-white">
            <div>
              <h2>New Lecture:</h2>
              <input
                className="ipt h-10 w-full"
                type="text"
                placeholder="Enter a Title"
                value={lectureTitle}
                onChange={(e) => setLectureTitle(e.target.value)}
                maxLength={80}
              />
            </div>

            <div className="flex gap-5 justify-end">
              <button className="font-bold" onClick={handleNewLecture}>
                Cancel
              </button>
              <button
                className="font-bold bg-black text-white px-2 py-1"
                onClick={handleAddNewLecture}
              >
                Add Lecture
              </button>
            </div>
          </div>
        </form>
      )}

      <button
        className={
          showForm
            ? "hidden"
            : "invisible group-hover:visible border border-black bg-white w-24 font-bold my-4"
        }
        onClick={handleNewLecture}
      >
        <span className="text-xl">+</span> Lecture
      </button>
    </div>
  );
}
