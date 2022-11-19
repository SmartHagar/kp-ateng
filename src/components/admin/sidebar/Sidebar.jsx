/** @format */

import React from "react";
import { ListMenu } from "./ListMenu";

const Sidebar = () => {
  return (
    <div className="border w-56 ">
      <div className="flex h-screen flex-col justify-between border-r backdrop-blur-sm bg-white">
        <div className="px-4 py-2">
          <div className="h-10 w-40 rounded-lg bg-biru mx-auto flex justify-center items-center">
            <span className="font-bold">MENU</span>
          </div>
          <ListMenu />
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <a
            href="#"
            className="flex shrink-0 items-center bg-white p-4 hover:bg-gray-50"
          >
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="h-10 w-10 rounded-full object-cover"
            />

            <div className="ml-1.5">
              <p className="text-xs">
                <strong className="block font-medium">Eric Frusciante</strong>

                <span> eric@frusciante.com </span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
