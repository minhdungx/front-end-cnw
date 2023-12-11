import NewSectionForm from "./NewSectionForm";
import NewLectureForm from "./NewLectureForm";

export default function Section({
  index,
  sectionId,
  className,
  sectionTitle,
  sectionDescription,
  objectIndex,
}) {
  // console.log("render Section ", index);
  return (
    <>
      {sectionId !== 0 && (
        <div className="">
          <div>
            <NewSectionForm index={index} />
          </div>

          <div className="pl-3 pt-3 bg-gray-200">
            <div className="flex gap-2">
              <h2>
                Section <span>{objectIndex}:</span>
              </h2>
              <h3>{sectionTitle}</h3>
            </div>

            <div className="pl-6 mr-3">
              <NewLectureForm index={index + 1} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
