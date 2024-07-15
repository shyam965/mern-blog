import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <Navbar className="border-b-2 p-2">
        <Link
          to="/"
          className="self-center font-semibold text-sm sm:text-xl dark:text-white"
        >
          <span className="px-2 py-1 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
            Shyam
          </span>
          Blog
        </Link>
        {/* <form action="" className="flex items-center ">
          <div className="relative">
            <TextInput
              id="text"
              type="text"
              placeholder="search................."
              required
              className="pl-10"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <CiSearch className="text-gray-400" />
            </div>
          </div>
        </form> */}

        <div className="flex justify-center">
          <Link to="/" className="mr-4 ">
            Home
          </Link>
          <Link to="/about">About</Link>
        </div>

        <div className="flex gap-2">
          <Button
            className="w-12 h-10 hidden sm:inline rounded-md"
            color="gray"
            pill
          >
            <FaMoon />
          </Button>
          <Link to="/sigin">
            <Button
              color="gray"
              className="p-2 rounded-md bg-blue-500 font-semibold text-white"
            >
              Sigin
            </Button>
          </Link>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
