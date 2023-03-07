import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export const NavBar = () => {
  const [category, setCategory] = useState(true);
  const location = useLocation();
  console.log(category);

  return (
    <nav className="navbar">
      <ul>
        <Link to="/">
          <li
            className={`${
              location.pathname === "/" ? "bg-gray-900" : "bg-white-700"
            } text-gray-300 hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}
          >
            Home
          </li>
        </Link>
        <Link to="/about">
          <li
            className={`${
              location.pathname === "/about" ? "bg-gray-900" : "bg-white-700"
            } text-gray-300 hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}
          >
            About
          </li>
        </Link>
        <Link to="/login">
          <li
            className={`${
              location.pathname === "/login" ? "bg-gray-900" : "bg-white-700"
            } text-gray-300 hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium `}
          >
            Login
          </li>
        </Link>
        <Link to="/signup">
          <li
            className={`${
              location.pathname === "/signup" ? "bg-gray-900" : "bg-white-700"
            } text-gray-300 hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium `}
          >
            Signup
          </li>
        </Link>

        <div className="dropdown_head">
          <button
            className="dropdownbtn"
            onClick={() => setCategory(!category)}
          >
            DROPDOWN
            {category && (
              <div className="dropdownoption">
                <div>
                  {" "}
                  <Link to="/ProfileSettingPage">Profile setting</Link>
                </div>
                <div>
                  <Link to="/Emojisearchpage">Emoji Search</Link>
                </div>
                <div>
                  <Link to="/logout">Logout</Link>
                </div>
              </div>
            )}
          </button>
        </div>
      </ul>
    </nav>
  );
};
