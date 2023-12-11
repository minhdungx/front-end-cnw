import axios from "axios";
import { useState, useContext, createContext, useEffect } from "react";

export const CurriculumContext = createContext();

export function CurriculumContextProvider({ children }) {
  const [curriculumList, setCurriculumList] = useState([]);
  const [structure, setStructure] = useState([]);

  // console.log("Curriculum list: ", curriculumList);

  function addNewCurriculum(object, index) {
    setCurriculumList((curriculumList) => {
      const list = [...curriculumList];
      list.splice(index, 0, object);
      return list;
    });
  }

  function addNewStructureItem(object, index) {
    setStructure((structure) => {
      const newStruct = [...structure];
      newStruct.splice(index, 0, object);
      return newStruct;
    });
  }

  // function setInitialStructure() {
  //   console.log("Initial list: ", curriculumList);
  //   const struct = curriculumList.map((curriculum) => {
  //     if (curriculum.className === "section") {
  //       const s = {
  //         className: "section",
  //         divId: curriculum.sectionId,
  //       };
  //       return s;
  //     } else if (curriculum.className === "lecture") {
  //       const l = {
  //         className: "lecture",
  //         divId: curriculum.lectureId,
  //       };
  //       return l;
  //     }
  //   });
  //   setStructure(struct);
  //   console.log("Initial struct: ", structure);
  // }

  function saveNewStructure() {
    // console.log("Structure to save: ", structure);

    // console.log("Structure list: ", curriculumList);
    // const newStructure = curriculumList.map((curriculum) => {
    //   if (curriculum.className === "section") {
    //     const s = {
    //       className: "section",
    //       divId: curriculum.sectionId,
    //     };
    //     return s;
    //   } else if (curriculum.className === "lecture") {
    //     const l = {
    //       className: "lecture",
    //       divId: curriculum.lectureId,
    //     };
    //     return l;
    //   }
    // });

    axios.post(
      `${process.env.REACT_APP_API_URL}/api/course/2/curriculum/structure`,
      structure
    );
  }

  // await axios.post(
  //   `${process.env.REACT_APP_API_URL}/api/course/2/curriculum/structure`,
  //   newStructure
  // );

  return (
    <CurriculumContext.Provider
      value={{
        curriculumList,
        setCurriculumList,
        structure,
        setStructure,
        // setInitialStructure,
        addNewCurriculum,
        addNewStructureItem,
        saveNewStructure,
      }}
    >
      {children}
    </CurriculumContext.Provider>
  );
}
