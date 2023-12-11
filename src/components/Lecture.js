import NewLectureForm from "./NewLectureForm";
import CurriculumItem from "./NewLectureForm";
import NewVideoForm from "./NewVideoForm";

export default function Lecture({
  index,
  courseId,
  lectureId,
  className,
  objectIndex,
  lectureTitle,
  lectureDescription,
}) {
  // console.log("render lecture ", index);
  return (
    <div className="bg-gray-200 pl-9 pr-3">
      <div className="flex flex-wrap justify-between border border-black bg-white p-2">
        <div className="flex gap-2">
          <h2 className="flex gap-1">
            Lecture <span>{objectIndex}:</span>
          </h2>
          <h3 className="">{lectureTitle}</h3>
        </div>
        <div className="">
          <NewVideoForm lectureId={lectureId} />
        </div>
      </div>

      <div>
        <NewLectureForm index={index + 1} />
      </div>
    </div>
  );
}
