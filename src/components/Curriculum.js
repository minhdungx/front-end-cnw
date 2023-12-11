import { useContext, useEffect, useState } from "react";
import Section from "./Section";
import axios from "axios";
import Lecture from "./Lecture";
import NewSectionForm from "./NewSectionForm";
import { CurriculumContext } from "../context/CurriculumContext";
import Layout from "./Layout";
import { useParams } from "react-router-dom";
import { itemData } from "../constant/data";

export default function Curriculum() {
  const { courseId } = useParams();
  const {
    curriculumList,
    setCurriculumList,
    structure,
    setStructure,
    setInitialStructure,
  } = useContext(CurriculumContext);

  useEffect(() => {
    async function fetch() {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/instructor/course/2/curriculum/structure`
      );

      setCurriculumList(response.data);
      const struct = response.data.map((item) => {
        if (item === null || item === undefined) return;
        if (item.className === "section") {
          const s = {
            className: "section",
            divId: item.sectionId,
          };
          return s;
        } else if (item.className === "lecture") {
          const l = {
            className: "lecture",
            divId: item.lectureId,
          };
          return l;
        }
      });
      console.log("struct is: ", struct);
      setStructure(struct);
    }
    fetch();
  }, []);

  return (
    <Layout>
      <div className="flex flex-col px-6 shadow-2xl 2xl:m-12 2xl:px-12">
        <h1 className="title border-b border-gray-300">Curriculum</h1>
        <p className="py-10">
          Start putting together your course by creating sections, lectures and
          practice activities. Use your course outline to structure your content
          and label your sections and lectures clearly. If you are intending to
          offer your course for free, the total length of video content must be
          less than 2 hours.
        </p>
        <div className="relative flex flex-col">
          {curriculumList.length > 0 &&
            curriculumList.map((item, index) => {
              if (item === null || item === undefined) return;
              else if (item.className === "section") {
                return <Section key={index} index={index} {...item} />;
              } else if (item.className === "lecture") {
                return <Lecture key={index} index={index} {...item} />;
              }
            })}
        </div>
        <div>
          <NewSectionForm index={curriculumList.length} />
        </div>
      </div>
    </Layout>
  );
}
