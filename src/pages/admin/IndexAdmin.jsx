/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/admin/navbar/Navbar";
import Sidebar from "../../components/admin/sidebar/Sidebar";

const IndexAdmin = () => {
  return (
    <div className="flex font-ComicNeue text-black">
      {/* sidebar */}
      <div className="h-screen fixed shadow-lg z-0">
        <Sidebar />
      </div>
      <div className="flex flex-wrap absolute left-56 right-0">
        {/* navbar */}
        <div className="w-full z-40 absolute top-0">
          <Navbar />
        </div>
        {/* content */}
        <div className="w-full ml-4 px-4 absolute right-0 top-16">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default IndexAdmin;
