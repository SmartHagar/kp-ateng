/** @format */

import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../components/admin/navbar/Navbar";
import Sidebar from "../../components/admin/sidebar/Sidebar";

const IndexAdmin = () => {
  // navigate
  const navigate = useNavigate();
  useEffect(() => {
    const user_login = JSON.parse(localStorage.getItem("user_login"));
    if (user_login) {
      const { role } = user_login;
      if (role === "ketua") {
        navigate("/ketua/dashboard");
      }
    } else {
      navigate("/user/dashboard");
    }
  }, []);
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
