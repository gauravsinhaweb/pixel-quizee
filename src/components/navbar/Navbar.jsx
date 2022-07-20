import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  GiHamburgerMenu,
  HiOutlineLogout,
} from "../../services/icons";

export const Navbar = () => {
  const userLogin = localStorage.getItem("token");

  const logoutHandler = () => {
    localStorage.removeItem("token");
    toast("you are logged out!");
    navigate("/");
  };
  return (
    <>
      <nav className="w-screen flex flex-row items-center p-1 justify-between bg-transparent shadow-xs">
        <div className="ml-8 text-lg text-white  hidden md:flex">
          <Link to="/">
            <div className="font-bold  cursive text-xl uppercase cursor-pointer opacity-90 hover:opacity-100">
              <span>pixel</span>
              <span className=" text-yellow-400 font-bold tracking-normal">
                {" "}
                quizee
              </span>
            </div>
          </Link>
        </div>

        <div className="flex text-2xl flex-row-reverse mr-4 ml-4 md:hidden">
          <GiHamburgerMenu />
        </div>
        <div className="flex flex-row mr-8 hidden md:flex">
          {!userLogin ? (
            <div
              title="login"
              className="text-gray-300 hover:text-white text-2xl text-center pl-12 mr-4 py-2 m-2  cursor-pointer"
            >
              <Link to="/login">
                <FaUserCircle />
              </Link>
            </div>
          ) : (
            <div
              onClick={logoutHandler}
              title="logout"
              className="text-gray-300 hover:text-white text-2xl text-center pl-12 mr-4 py-2 m-2  cursor-pointer"
            >
              <HiOutlineLogout />
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
