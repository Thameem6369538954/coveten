"use client";
import React, { useState } from "react";
// import { IoIosContact } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <div className="sticky top-0 z-50">
      {/* Navbar Container */}
      <nav
        className="flex justify-between px-10 md:justify-around items-center
       bg-white min-h-[10vh] shadow-md sticky top-0 z-50"
      >
        {/* Logo */}
        <div>
          <h1 className="text-7xl font-bold text-black font-logo">Coveten</h1>
        </div>

        {/* Menu for Larger Screens */}
        <div className="hidden md:flex space-x-8">
          <ul className="flex items-center space-x-6 text-lg text-black">
            <li className="hover:text-primary cursor-pointer font-sans text-2xl">
              Home
            </li>
            <li className="hover:text-primary cursor-pointer font-sans text-2xl">
              About
            </li>
            <li className="hover:text-primary cursor-pointer font-sans text-2xl">
              services
            </li>
            <Link href="/blog"><li className="hover:text-primary cursor-pointer font-sans text-2xl">
              Blog
            </li>
            </Link>
            <Link href="/products"><li className="hover:text-primary cursor-pointer font-sans text-2xl">
              Products
            </li>
            </Link>
            <li className="hover:text-primary cursor-pointer font-sans text-2xl">
              Contact
            </li>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {open ? (
            <IoCloseOutline
              className="text-3xl cursor-pointer"
              onClick={handleClick}
            />
          ) : (
            <CiMenuFries
              className="text-3xl cursor-pointer"
              onClick={handleClick}
            />
          )}
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={` ${
          open ? "block" : "hidden"
        } bg-primary min-h-[90vh] z-20 p-5 absolute w-full top-[10vh] left-0`}
      >
        <ul className="flex flex-col items-center space-y-4 text-lg text-black relative top-20 font-TimeRanges">
          <li className="hover:text-yellow-500 cursor-pointer font-sans text-4xl">
            Home
          </li>
          <li className="hover:text-yellow-500 cursor-pointer font-sans text-4xl">
            About
          </li>
          <li className="hover:text-[#f97316] cursor-pointer font-sans text-4xl">
            services
          </li>
          <li className="hover:text-yellow-500 cursor-pointer font-sans text-4xl">
            Contact
          </li>
          <li className="hover:text-yellow-500 cursor-pointer font-sans text-4xl">
            Blog
          </li>
          <li className="hover:text-yellow-500 cursor-pointer font-sans text-4xl">
            Careers
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
