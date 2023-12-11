import { useState } from "react";
import CloseIcon from "../icons/CloseIcon";
import axios from "axios";

export default function NewVideoForm({ lectureId }) {
  const [showForm, setShowForm] = useState(false);
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  function handleFile(ev) {
    if (ev.target.files[0] === undefined) return;
    setFile(ev.target.files[0]);
  }

  console.log("file", file);

  async function handleUploadFile(e) {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("multipartFile", file);

      await axios
        .post(
          `${process.env.REACT_APP_API_URL}//instructor/course/2/curriculum/lecture/${lectureId}/video`,
          formData,
          {
            // headers: {
            //   "Content-Type": "multipart/form-data",
            // },
            onUploadProgress: (progressEvent) => {
              const progress = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              setUploadProgress(progress);
            },
          }
        )
        .then((response) => {
          console.log("File upload successfully:", response.data);
        })
        .catch((err) => {
          console.log("Error uploading file: ", err);
        });
    }
  }

  return (
    <div className="w-full">
      {showForm && (
        <form className="relative w-full flex gap-2 px-3 py-2 border border-black">
          <span
            className="absolute -ml-10 -mt-2 cursor-pointer"
            onClick={() => setShowForm(!showForm)}
          >
            <CloseIcon />
          </span>

          <input type="file" accept="video/*" onChange={handleFile} />
          <button
            className="bg-black text-white font-bold w-20"
            onClick={handleUploadFile}
          >
            Upload
          </button>
          {uploadProgress > 0 && uploadProgress < 100 && (
            <div>
              <progress value={uploadProgress} max="100" />
              <span>{uploadProgress}%</span>
            </div>
          )}
        </form>
      )}

      <button
        className={
          showForm ? "hidden" : "border border-black bg-white w-24 font-bold"
        }
        onClick={() => setShowForm(!showForm)}
      >
        <span className="text-xl">+</span> Content
      </button>
    </div>
  );
}
