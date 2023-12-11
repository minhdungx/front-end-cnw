import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <h1 className="font-bold my-4">Sign up and start learning</h1>
      <div className="flex flex-col gap-2">
        <input
          className="ipt w-96 font-bold"
          type="text"
          placeholder="Full name"
        />
        <input className="ipt w-96 font-bold" type="text" placeholder="Email" />
        <input
          className="ipt w-96 font-bold"
          type="password"
          placeholder="Password"
        />
      </div>
      <div className=" flex flex-col justify-center items-center w-96">
        <button className="my-4 bg-[#cc1728] w-full py-2 text-white font-bold">
          Sign up
        </button>
        <span className="mt-4 py-3 w-full text-center border-t border-gray-300">
          Already have an account?{" "}
          <Link to={"/login"} className="font-bold text-[#cc1728] underline">
            Log in
          </Link>
        </span>
      </div>
    </div>
  );
}
