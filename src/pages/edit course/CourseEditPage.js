import { useNavigate, useParams } from "react-router-dom";
import SideBar from "../../components/SideBar";
import SettingIcon from "../../icons/SettingIcon";
import { useEffect } from "react";
import Layout from "../../components/Layout";

export default function CourseEditPage() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  return <Layout>test</Layout>;
}
