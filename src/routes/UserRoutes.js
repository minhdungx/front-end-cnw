import { Routes, Route } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

export default function UserRoutes() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}
