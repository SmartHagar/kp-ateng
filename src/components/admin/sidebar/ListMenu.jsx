/** @format */

import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  BiHome,
  BiSpa,
  BiUserCheck,
  BiStation,
  BiStats,
  BiStar,
} from "react-icons/bi";

import "./style.css";

export const ListMenu = () => {
  // state
  const [pathName, setPathName] = useState("");
  // navigation
  const location = useLocation();
  const path = location.pathname.split("/");
  // use effect
  useEffect(() => {
    setPathName(path[2]);
  }, [location]);

  return (
    <nav
      aria-label="Main Nav"
      className="mt-6 flex flex-col space-y-1 nav-admin"
    >
      <NavLink
        to="/admin/dashboard"
        className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-hijau hover:text-black"
      >
        <BiHome size={20} />

        <span className="ml-3 text-sm"> Dashboard </span>
      </NavLink>

      <details className="group" open={pathName === "wilayah" && true}>
        <summary className="flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-hijau hover:text-black">
          <BiSpa size={20} />
          <span className="ml-3 text-sm"> Wilayah </span>

          <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <nav aria-label="Wilayah Nav" className="mt-1.5 ml-8 flex flex-col">
          <NavLink
            to="/admin/wilayah/provinsi"
            className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-hijau hover:text-black"
          >
            <BiStation size={20} />

            <span className="ml-3 text-sm"> Provinsi </span>
          </NavLink>

          <NavLink
            to="/admin/wilayah/kabupaten"
            className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-hijau hover:text-black"
          >
            <BiStats size={20} />

            <span className="ml-3 text-sm"> Kabupaten </span>
          </NavLink>

          <NavLink
            to="/admin/wilayah/distrik"
            className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-hijau hover:text-black"
          >
            <BiStar size={20} />

            <span className="ml-3 text-sm"> Distrik </span>
          </NavLink>
        </nav>
      </details>

      <a
        href="#"
        className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-hijau hover:text-black"
      >
        <BiUserCheck size={20} />

        <span className="ml-3 text-sm"> Alumni </span>
      </a>
    </nav>
  );
};
