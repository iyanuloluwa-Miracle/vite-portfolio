import React from "react";
import { IoLogoHtml5 } from "react-icons/io";
import { DiCss3Full, DiJavascript1 } from "react-icons/di";
const Skills = () => {

  return (
    <div className="">
      <div>
        <ul className="flex flex-wrap gap-[16px]">
          <li className="w-[200px] h-[96px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
            <span className="flex gap-[16px]">
              <img
                src="https://cdn.simpleicons.org/git"
                alt="git icon"
                className="w-[32px] h-[32px]"
              />
              <p className="flex justify-center items-center text-[16px] text-black2 dark:text-white leading-[24px]">
                Git
              </p>
            </span>
          </li>
          <li className="w-[200px] h-[96px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
            <span className="flex gap-[16px]">
              <img
                src="https://cdn.simpleicons.org/react"
                alt="react icon"
                className="w-[32px] h-[32px]"
              />
              <p className="flex justify-center items-center text-[16px] text-black2 dark:text-white leading-[24px]">
                React
              </p>
            </span>
          </li>
          <li className="w-[200px] h-[96px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
            <span className="flex gap-[16px]">
              <img
                src="https://cdn.simpleicons.org/tailwindcss"
                alt="tailwind icon"
                className="w-[32px] h-[32px]"
              />
              <p className="flex justify-center items-center text-[16px] text-black2 dark:text-white leading-[24px]">
                Tailwind
              </p>
            </span>
          </li>
          <li className="w-[200px] h-[96px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
            <span className="flex gap-[16px]">
              <span className="bg-[#F16529] rounded-md">
                <IoLogoHtml5 className="w-[35px] h-[35px] fill-white" />
              </span>
              <p className="flex justify-center items-center text-[16px] text-black2 dark:text-white leading-[24px]">
                HTML
              </p>
            </span>
          </li>
          <li className="w-[200px] h-[96px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
            <span className="flex gap-[16px]">
              <span className="bg-[#2965F1] rounded-md">
                <DiCss3Full className="w-[35px] h-[35px] fill-white" />
              </span>
              <p className="flex justify-center items-center text-[16px] text-black2 dark:text-white leading-[24px]">
                CSS
              </p>
            </span>
          </li>
          <li className="w-[200px] h-[96px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
            <span className="flex gap-[16px]">
              <span className="bg-[#F7DF1E] w-[35px] h-[35px] flex justify-end items-end rounded-md">
                <DiJavascript1 className=" w-[25px] h-[25px]" />
              </span>
              <p className="flex justify-center items-center text-[16px] text-black2 dark:text-white leading-[24px]">
                JavaScript
              </p>
            </span>
          </li>
          <li className="w-[200px] h-[96px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
            <span className="flex gap-[16px]">
              <p className="flex justify-center items-center text-[16px] text-black2 dark:text-white leading-[24px] font-[500]">
                Team-Work
              </p>
            </span>
          </li>
          <li className="w-[200px] h-[96px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
            <span className="flex gap-[16px]">
              <p className="flex justify-center items-center text-[16px] text-black2 dark:text-white leading-[24px] font-[500]">
                Creative Thinking
              </p>
            </span>
          </li>
          <li className="w-[200px] h-[96px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
            <span className="flex gap-[16px]">
              <p className="flex justify-center items-center text-[16px] text-black2 dark:text-white leading-[24px] font-[500]">
                Debugging
              </p>
            </span>
          </li>
          <li className="w-[200px] h-[96px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
            <span className="flex gap-[16px]">
              <p className="flex justify-center items-center text-[16px] text-black2 dark:text-white leading-[24px] font-[500]">
                Time Management
              </p>
            </span>
          </li>
          <li className="w-[200px] h-[96px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
            <span className="flex gap-[16px]">
              <p className="flex justify-center items-center text-[16px] text-black2 dark:text-white leading-[24px] font-[500]">
                Communication
              </p>
            </span>
          </li>
          <li className="w-[200px] h-[96px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
            <span className="flex gap-[16px]">
              <p className="flex justify-center items-center text-[16px] text-black2 dark:text-white leading-[24px] font-[500]">
                Design to Code
              </p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
