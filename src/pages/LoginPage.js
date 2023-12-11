import NavigationBar from "../components/NavigationBar";
import FacebookIcon from "../icons/FacebookIcon";
import GoogleIcon from "../icons/GoogleIcon";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div>
      <NavigationBar />
      <div className="flex flex-col justify-center items-center mt-8">
        <h1 className="font-bold my-4">Login to your account</h1>
        <div className="flex flex-col gap-2">
          <div className="flex items-center border border-black gap-3 w-96 px-3 py-2 font-bold">
            <GoogleIcon />
            <button>Continue with Google</button>
          </div>
          <div className="flex items-center border border-black gap-3 w-96 px-3 py-2 font-bold">
            <FacebookIcon />
            <button>Continue with Facebook</button>
          </div>

          <input
            className="ipt w-96 font-bold"
            type="text"
            placeholder="Email"
          />
          <input
            className="ipt w-96 font-bold"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex flex-col justify-center items-center pb-4 border-b border-gray-300">
          <button className="my-4 bg-[#cc1728] w-96 py-2 text-white font-bold">
            Log in
          </button>
          <span>
            or{" "}
            <Link
              className="font-bold text-[#cc1728] underline"
              to={"/user/forgot-password"}
            >
              Forgot Password
            </Link>
          </span>
        </div>
        <span className="mt-4">
          Don't have an account?{" "}
          <Link to={"/signup"} className="font-bold text-[#cc1728] underline">
            Sign up
          </Link>
        </span>
      </div>
    </div>
  );
}
