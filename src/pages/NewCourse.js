import axios from "axios";
import { useState, useEffect } from "react";

export default function NewCourse() {
  const [courseTitle, setCourseTitle] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/instructor/category`)
      .then((result) => {
        setCategories(result.data);
      });
  }, []);

  async function handleCreateCourse(e) {
    e.preventDefault();
    const data = { courseTitle, categoryId };
    await axios.post(
      `${process.env.REACT_APP_API_URL}/instructor/course/1`,
      data
    );
  }

  return (
    <form className="flex flex-col gap-5 m-20 relative overflow-hidden">
      <div className="flex flex-col gap-3 w-full items-center justify-center">
        <label className="text-3xl text-center font-bold">
          How about a working title?
        </label>
        <input
          className="border border-black w-full max-w-2xl px-3 py-2"
          type="text"
          placeholder="e.g. Learn Photoshop CS6 from Scratch"
          value={courseTitle}
          onChange={(e) => setCourseTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-3 items-center justify-center py-2">
        <label className="text-3xl text-center font-bold">
          What category best fits the knowledge you'll share?
        </label>
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="border border-black w-full max-w-2xl h-10 px-3 cursor-pointer"
        >
          <option key={0} value={0}>
            Choose a category
          </option>
          {categories.length > 0 &&
            categories.map((category) => (
              <option key={category.categoryId} value={category.categoryId}>
                {category.categoryDescription}
              </option>
            ))}
        </select>
      </div>
      <div className="flex w-full fixed bottom-0 right-0 px-6 py-3 justify-end bg-white border-t border-gray-300">
        <button
          className="bg-black text-white font-bold px-2 py-1 w-32"
          onClick={handleCreateCourse}
        >
          Create course
        </button>
      </div>
    </form>
  );
}
