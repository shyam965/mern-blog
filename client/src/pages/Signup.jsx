import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="min-h-screen mt-20 ">
        <div className="flex  mx-auto flex-col md:flex-row md:items-center gap-5 ml-10 mr-10">
          {/* left */}
          <div className="flex-1">
            <p className="text-2xl font-semibold font-serif">
              Shyam <span className="text-pink-500">Blog</span>
            </p>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              consequuntur labore, tempora fuga provident sit aut obcaecati
              excepturi voluptatum nam enim fugit repellat minima quidem nemo
              consectetur aliquid eos ullam.
            </p>
          </div>
          {/* Right */}
          <div className="flex-1">
            <form action="" className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="username">UserName</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="enter your username"
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="enter your email"
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="enter your password"
                  className="rounded-md"
                />
              </div>
              <button className="border p-2 bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 rounded-md text-xl text-white">
                Submit
              </button>
            </form>
            <div className="flex gap-2 mt-5">
              <span className="">Have an Account</span>
              <Link to="/sigin" className="text-blue-500">
                Sigin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
