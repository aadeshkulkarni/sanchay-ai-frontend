import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4 shadow-md flex justify-between">
      <Link to="/"><h1 className="text-xl text-gray-700 font-bold">Sanchay AI</h1></Link>
      <div className="flex justify-center items-center">
        <Link className="px-2 font-light" to="/projects">Projects</Link>
        <div className="bg-slate-200 rounded-full w-[30px] h-[30px] mx-4"></div>
        </div>
    </header>
  );
};

export default Header;
