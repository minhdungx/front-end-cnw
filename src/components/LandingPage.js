import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "./Layout";

export default function LandingPage() {
  const [category, setCategory] = useState(0);
  const [categories, setCategories] = useState([]);
  const { courseId } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/instructor/category`)
      .then((result) => {
        setCategories(result.data);
      });
  }, []);

  return (
    <Layout>
      <div className="flex flex-col px-6 shadow-2xl 2xl:m-12 2xl:px-12">
        <h1 className="title border-b border-gray-300">Course landing page</h1>
        <p className="py-10">
          As you complete this section, think about creating a compelling Course
          Landing Page that demonstrates why someone would want to enroll in
          your course. Learn more about creating your course landing page and
          course title standards.
        </p>
        <div className="flex flex-col gap-4">
          <div>
            <h2>Course title</h2>
            <input
              className="ipt w-full"
              type="text"
              placeholder="Insert your course title"
              maxLength={60}
            />
          </div>
          <div>
            <h2>Course subtitle</h2>
            <input
              className="ipt w-full"
              type="text"
              placeholder="Insert your course subtitle"
              maxLength={120}
            />
          </div>
          <div>
            <h2>Basic info</h2>
            <div className="grid grid-cols-2 gap-3">
              <select className="ipt">
                <option>--Select Level--</option>
                <option>Beginner Level</option>
                <option>Intermediate Level</option>
                <option>Expert Level</option>
                <option>All Levels</option>
              </select>
              <select className="ipt">
                <option>--Select Category--</option>
                {categories.length > 0 &&
                  categories.map((c) => (
                    <option key={c.categoryId}>{c.categoryDescription}</option>
                  ))}
              </select>
            </div>
          </div>
          <div>
            <h2>What is primarily taught in your course?</h2>
            <input
              className="ipt w-full"
              type="text"
              placeholder="e.g. Landscape Photography"
            />
          </div>
          <div>
            <h2>Course image</h2>
            <input
              type="file"
              accept=".jpg, .jpeg, .gif, .png"
              placeholder={require("../constant/image-placeholder.jpg")}
            />
            <p>
              Upload your course image here. It must meet our course image
              quality standards to be accepted. Important guidelines: 750x422
              pixels; .jpg, .jpeg,. gif, or .png. no text on the image.
            </p>
          </div>
          <div>
            <h2>Promotional video</h2>
            <input
              type="file"
              accept="video/*"
              placeholder={require("../constant/image-placeholder.jpg")}
            />
            <p>
              Your promo video is a quick and compelling way for students to
              preview what they will learn in your course. Students considering
              your course are more likely to enroll if your promo video is
              well-made. Learn how to make your promo video awesome!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
