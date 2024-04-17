import React from "react";
import Image from "next/image";
import { AiOutlineGlobal } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaPlay } from "react-icons/fa6";
import { SlArrowRight } from "react-icons/sl";

export default function Home() {
  return (
    <>
      <nav className="flex flex-row  items-center justify-center gap-40 shadow-lg max-[1000px]:hidden">
        <ul className="flex flex-row justify-center item-center gap-10 p-4 text-sm text-white ">
          <Image
            src="imagenes\logo\Quickit.svg"
            alt="Logo Quickit"
            width={100}
            height={100}
            className="mx-8"
          />

          <li className="font-bold flex items-center  transition ease-in-out delay-150 hover:-translate-y- hover:scale-110  duration-300">
            <button>Why Quickit</button>
          </li>
          <li className="font-bold flex items-center  transition ease-in-out delay-150 hover:-translate-y- hover:scale-110  duration-300">
            <button>Solutions</button>
          </li>
          <li className="font-bold flex items-center  transition ease-in-out delay-150 hover:-translate-y- hover:scale-110  duration-300">
            <button>Resources</button>
          </li>
          <li className="font-bold flex items-center  transition ease-in-out delay-150 hover:-translate-y- hover:scale-110  duration-300">
            <button>Pricing</button>
          </li>
        </ul>

        <div className="flex justify-center gap-6 text-white">
          <button className="font-bold flex items-center  transition ease-in-out delay-150 hover:-translate-y- hover:scale-110  duration-300">
            <AiOutlineGlobal />
          </button>
          <span className="flex items-center"> | </span>
          <button className="font-bold flex text-center text-sm items-center  transition ease-in-out delay-150 hover:-translate-y- hover:scale-110  duration-300">
            Log In
          </button>
          <button className="bg-blue-500 w-36 h-12  font-bold flex text-center text-sm justify-center items-center transition ease-in-out delay-150 hover:-translate-y- hover:scale-110 hover:bg-indigo-500 duration-300">
            Request a Demo
          </button>
        </div>
      </nav>

      <div className="flex flex-row justify-center max-[1000px]:hidden">
        <div className="w-full p-20 mx-8">
          <h1 className="text-white text-7xl z-50 font-extrabold flex flex-row justify-start w-full">
            {" "}
            Welcome to the
          </h1>

          <p className="font-extrabold text-7xl -z-50  text-transparent w-full h-28 bg-gradient-to-tr from-blue-500 to-cyan-300 bg-clip-text">
            Quick Landings
          </p>

          <p className="text-white text-sm py-4 z-50">
            {" "}
            Create screens right in your Figma. Connect different blocks and
            create <br /> awesome landings. Yes, it just takes a few minutes!
          </p>

          <button className="text-white font-bold bg-blue-500 w-40 h-14 mt-4 flex justify-center items-center gap-2 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
            Get Access
            <p className="bg-blue-400 shadow-2xl bg-opacity-30 w-6 h-6 flex items-center justify-center text-xs">
              <SlArrowRight />
            </p>
          </button>
        </div>
        <div className=" animate-pulse animate-ease-in-out -z-50  animate-alternate-reverse animate-fill-both">
          <div className="bg-blue-500 bg-opacity-25   h-80 w-80 z-0  rounded-full flex justify-end blur-3xl absolute bottom-40 left-0"></div>
          <div className="bg-white bg-opacity-25 h-96 w-96 z-0 rounded-full flex justify-end blur-3xl absolute bottom-40 right-0"></div>
        </div>

        <Image
          src="imagenes\iPhone 12 _ 12 Pro.svg"
          alt="phone"
          width={200}
          height={10}
          className="mx-36 mt-8 "
        ></Image>
      </div>
    </>
  );
}
