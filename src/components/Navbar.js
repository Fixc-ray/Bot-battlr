import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full top-0 left-0 z-50 shadow-md fixed">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="text-xl font-bold text-gray-900 hover:text-orange-500"
            >
              BOT BATTL'R
            </Link>
          </div>
          <div className="flex">
            <div className="hidden md:flex space-x-8 mt-5 mr-40">
              <Link to="/" className="text-orange-500 hover:text-yellow-500">
                All Bots
              </Link>
              <Link to="/add" className="text-orange-500 hover:text-yellow-500">
                Add A New Bot
              </Link>
              <Link
                to="/my bots"
                className="text-orange-500 hover:text-yellow-500"
              >
                My Bot Army
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
