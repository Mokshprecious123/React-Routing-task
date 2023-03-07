import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export const NavBar = () => {
const location = useLocation();
console.log(location);
  return (
    <nav className="navbar">
      <ul>
        <Link to="/">
          <li className={`${location.pathname ==='/' ? 'bg-gray-900': 'bg-white-700'} text-gray-300 hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}>
            Home
          </li>
        </Link>

        <Link to="/about">
          <li className={`${location.pathname === "/about" ? "bg-gray-900" : "bg-white-700"} text-gray-300 hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}>
            About
          </li>
        </Link>

        <Link to="/login">
          <li className={`${location.pathname === "/login" ? "bg-gray-900" : "bg-white-700"} text-gray-300 hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium `}>
            Login
          </li>
        </Link>

        <Link to="signup">
          <li className={`${location.pathname === "/signup" ? "bg-gray-900" : "bg-white-700"} text-gray-300 hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium `}>
            Signup
          </li>
        </Link>
      </ul>
    </nav>
  );
};

