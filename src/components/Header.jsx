import React from "react";
import logo1 from "../assets/logo1.png";
import { useState } from "react";

const Header = () => {
  const [ btnNameReact, setBtnNameReact ] = useState("Login");

  return (
    <div className="flex justify-between border-solid border-black border-[1px]">
      <div className="flex">
        <img className="w-16 m-2 " src={logo1} alt="logo" />
        <h1 className="mt-3 font-extrabold">Namaste Food</h1>
        <h3  className="mt-10 cursor-wait">Bad UI but Awesome food</h3>
      </div>
      
      <div className="cursor-pointer">
        <ul className="flex text-xl ">
          <li className="p-2 m-3 hover:bg-zinc-900 hover:text-white rounded-md transition-all">
            Home
          </li>
          <li className="p-2 m-3 hover:bg-zinc-900 hover:text-white rounded-md transition-all">
            About
          </li>
          <li className="p-2 m-3 hover:bg-zinc-900 hover:text-white rounded-md transition-all">
            Menu
          </li>
          <li className="p-2 m-3 hover:bg-zinc-900 hover:text-white rounded-md transition-all">
            Contact
          </li>
          <button
            className="p-2 m-3 bg-red-400 hover:bg-red-600 rounded-md transition-all"
            onClick={() => {
              btnNameReact === "Login"
              ? setBtnNameReact("Logout") 
              : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
