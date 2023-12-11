import CloseIcon from "../icons/CloseIcon";
import { useContext, useState } from "react";
import axios from "axios";
import { CurriculumContext } from "../context/CurriculumContext";

export default function NewSectionForm({ index }) {
  const [showForm, setShowForm] = useState(false);
  const [sectionTitle, setSectionTitle] = useState("");
  const [sectionDescription, setSectionDescription] = useState("");
  const {
    curriculumList,
    setCurriculumList,
    addNewCurriculum,
    saveNewStructure,
    getCurriculum,
    structure,
    setStructure,
    addNewStructureItem,
  } = useContext(CurriculumContext);

  function handleNewSection() {
    setSectionTitle("");
    setSectionDescription("");
    setShowForm(!showForm);
  }

  async function handleAddNewSection(e) {
    e.preventDefault();
    if (sectionTitle.trim() === "" && sectionDescription.trim() === "") {
      alert("You need to fill all information");
      return;
    }
    const data = { sectionTitle, sectionDescription };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/instructor/course/2/curriculum/section`,
        data
      );

      const newObject = response.data;

      addNewCurriculum(newObject, index);

      const newStructureItem = {
        className: "section",
        divId: newObject.sectionId,
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
    handleNewSection();
  }

  console.log(structure);

  return (
    <div className="group">
      {showForm && (
        <form className="flex flex-col gap-2 my-8">
          <span onClick={handleNewSection}>
            <CloseIcon />
          </span>

          <div className="flex flex-col gap-4 px-3 py-4 border border-black">
            <div>
              <h2>New Section:</h2>
              <input
                className="ipt h-10 w-full"
                type="text"
                placeholder="Enter a Title"
                value={sectionTitle}
                onChange={(e) => setSectionTitle(e.target.value)}
                maxLength={80}
              />
            </div>
            <div>
              <h2>
                What will students be able to do at the end of this section?
              </h2>
              <input
                className="ipt h-10 w-full"
                type="text"
                placeholder="Enter a Learning Objective"
                value={sectionDescription}
                onChange={(e) => setSectionDescription(e.target.value)}
                maxLength={200}
              />
            </div>
            <div className="flex gap-5 justify-end">
              <button className="font-bold" onClick={handleNewSection}>
                Cancel
              </button>
              <button
                className="font-bold bg-black text-white px-2 py-1"
                onClick={handleAddNewSection}
              >
                Add Section
              </button>
            </div>
          </div>
        </form>
      )}

      <button
        className={
          showForm
            ? "hidden"
            : "invisible group-hover:visible border border-black w-24 font-bold my-4"
        }
        onClick={handleNewSection}
      >
        <span className="text-xl">+</span> Section
      </button>
    </div>
  );
}
