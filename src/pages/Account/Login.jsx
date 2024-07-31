import React from 'react';
import { Checkbox } from '@mui/material';
import { HiMiniUser, HiLockClosed, HiEyeSlash } from 'react-icons/hi2';
import logo from '../../images/logo.png';

const Login = () => {
  return (
    //start UI login
    <section className=" grid lg:grid-cols-12 md:grid-cols-8 pm:grid-cols-1  bg-[#2e2e2e] ">
      {/* ---------form login------------- */}
      <div className=" lg:col-span-5 md:col-span-4 pm:col-span-1 lg:p-14 md:p-10 sm:p-14 pm:p-8  bg-[#C8C8C8]">
        <form className="mt-8 mb-2 lg:p-20 md:p-10 pm:p-8 sm:p-20 bg-[#2e2e2e] rounded-xl shadow-[10px_10px_11px_0px_rgba(0,0,0,0.25)] ">
          <h2 className=" text-white text-6xl text-center">LOGIN</h2>
          <div className="mb-1 flex flex-col gap-4">
            {/* -----input email------- */}
            <div className=" flex items-center text-center text-white ">
              <HiMiniUser />
              <label htmlFor="email" color="blue-gray" className=" font-medium">
                Email
              </label>
            </div>

            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="name@mail.com"
              className=" border p-3 rounded-lg bg-[#222121] focus:!border-gray-900 "
            />

            <div className=" flex items-center text-center text-white">
              <HiLockClosed />
              <label
                htmlFor="password"
                color="blue-gray"
                className=" font-medium"
              >
                Password
              </label>
            </div>
            <div className="bg-[#222121] flex justify-center items-center border px-3 py-2 rounded-lg focus-within:border-2 focus-within:border-gray-900 text-white">
              <input
                type="password"
                id="password"
                name="password"
                required
                className=" grow focus:outline-none bg-[#222121]"
                placeholder="••••••••"
              />
              <div
                className=" rounded-full p-2 hover:bg-slate-200 duration-200 text-gray-500 hover:text-black"
                name="hidden"
              >
                <HiEyeSlash />
              </div>
            </div>
          </div>
          <div className=" flex justify-between items-center text-center gap-2">
            <div className="flex items-center text-white">
              <Checkbox />
              <h2>Remember me</h2>
            </div>
            <h2 className="text-[#F31982]">Forgot password?</h2>
          </div>
          <button
            type="submit"
            className="border-gradient-to-r  mt-6  bg-white border-2 border-black text-black py-2 px-auto font-bold  w-full rounded-lg"
          >
            LOGIN
          </button>

          <h2 className="text-center text-white font-medium mt-4">
            Don't have an account?
            <a href="#" className="text-white ml-1 underline">
              Create now
            </a>
          </h2>
        </form>
      </div>

      {/* ----------description on right-------- */}
      <div className="md:block pm:hidden lg:col-span-7 md:col-span-4 sm:col-span-1 border-l-2 py-14 ">
        <div className=" flex flex-col relative">
          <div className=" flex justify-center items-center">
            <img src={logo} alt="logo" className="w-1/2 " />
          </div>
          <h2 className=" text-white text-5xl text-center">
            Welcome to NSGSecure
          </h2>
          <h2 className="text-3xl mt-8 text-center text-[#E6F90B] text-decoration-underline animate-pulse">
            Enter into a NEW World of Surveillance
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Login;
