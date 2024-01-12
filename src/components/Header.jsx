import React from "react";
import logo1 from "../assets/logo1.png";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/UseOnlineStatus.jsx";

const Header = () => {
  const [ btnNameReact, setBtnNameReact ] = useState("Login");
  const OnlineStatus = useOnlineStatus()

  return (
    <div className="flex justify-between border shadow-lg shadow-zinc-200 bg-slate-100">
      <div className="flex">
        <img className="w-16 m-2 " src={logo1} alt="logo" />
        <h1 className="mt-3 font-extrabold">Namaste Food</h1>
        <h3  className="mt-10 cursor-wait">Bad UI but Awesome food</h3>
      </div>
      
      <div className="cursor-pointer items-center">
        <ul className="flex text-md ">
          <li className="p-2 m-3">{OnlineStatus?"🟢":"🔴"}</li>
          <li className="p-2 m-3 hover:bg-zinc-900 hover:text-white rounded-sm hover:scale-90 transition-all">
            <Link to ='/'>Home</Link> 
          </li>
          <li className="p-2 m-3 hover:bg-zinc-900 hover:text-white rounded-sm hover:scale-90 transition-all">
            <Link to='/about'>About</Link>
          </li>
          <li className="p-2 m-3 hover:bg-zinc-900 hover:text-white rounded-sm hover:scale-90 transition-all">
            <Link>Menu</Link>
          </li>
          <li className="p-2 m-3 hover:bg-zinc-900 hover:text-white rounded-sm hover:scale-90 transition-all">
            <Link to='/contact'>Contact</Link>
          </li>
          <li className="p-2 m-3 hover:bg-zinc-900 hover:text-white rounded-sm hover:scale-90 transition-all">
            <Link to='/grocery'>Grocery</Link>
          </li>
          <button
            className="p-2 m-3 bg-red-400 hover:bg-red-600 rounded-sm hover:scale-90 transition-all"
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
