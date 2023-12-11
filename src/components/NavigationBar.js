import { Link } from "react-router-dom";
import WishList from "../icons/WishList";
import CartIcon from "../icons/CartIcon";
import SearchIcon from "../icons/SearchIcon";
import BarIcon from "../icons/BarIcon";
import { useState } from "react";

export default function NavigationBar() {

  const [input, setInput] = useState('')

  const handleChange = (value) => {
    setInput(value)
  }


  return (
    <div className="flex gap-3 2xl:grid 2xl:grid-cols-10 px-4 w-full h-20 items-center py-5 border-b border-gray-300">
      <div className="grow justify-self-center">
        <Link to={"/"}>
          <img className="w-52 h-auto" src={require("../constant/logo.jpg")} />
        </Link>
      </div>
      <div className="hidden 2xl:block 2xl:justify-self-center">
        <span className="flex items-center justify-center w-full">
          Categories
        </span>
      </div>
      <div
        // className="2xl:col-span-5 2xl:w-full 2xl:justify-self-center 2xl:flex 2xl:items-center 2xl:gap-3 2xl:border 2xl:rounded-full 2xl:border-black 2xl:px-3 2xl:py-2">
        className="2xl:col-span-5 w-full justify-self-center flex items-center gap-3 border rounded-full border-black px-3 py-2"
      >
        <Link to={`/course/query?courseTitle=${input}`}>
          <SearchIcon />
        </Link>

        <input
          // className="hidden 2xl:block 2xl:truncate 2xl:w-full 2xl:mr-3"
          className="block truncate w-full mr-3"
          type="text"
          placeholder="Search for anything"
          onChange={e => handleChange(e.target.value)}
          value={input}
        />
      </div>
      <div className="hidden 2xl:block 2xl:justify-self-center">
        <Link to={"/instructor/"}>Instructor</Link>
      </div>

      <div className="hidden 2xl:col-span-2 2xl:flex 2xl:gap-2">
        <Link
          className="flex items-center justify-center w-full border border-black p-3 h-10 font-bold"
          to={"/login"}
        >
          Log in
        </Link>
        <Link
          className="flex items-center justify-center w-full border border-black p-3 h-10 font-bold bg-black text-white"
          to={"/signup"}
        >
          Sign up
        </Link>
      </div>
      <div className="2xl:hidden">
        <BarIcon />
      </div>
    </div>
  );
}
