/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import useLogin from "../../../store/login";
import { ListMenu } from "./ListMenu";

const Sidebar = () => {
  // navigate
  const navigate = useNavigate();
  // logout store
  const { setLogout } = useLogin();
  const handleLogout = async () => {
    const logout = await setLogout();
    if (logout.status === "berhasil") {
      navigate("/user/dashboard");
    }
  };
  return (
    <div className="w-56 bg-bg-1 bg-cover bg-center">
      <div className="flex h-screen flex-col justify-between border-r shadow-lg backdrop-blur-2xl bg-white/80">
        <div className="px-4 py-2">
          <div className="h-10 w-40 rounded-lg bg-biru mx-auto flex justify-center items-center">
            <span className="font-bold">MENU</span>
          </div>
          <ListMenu />
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 cursor-pointer">
          <div
            onClick={handleLogout}
            className="flex shrink-0 items-center p-4 "
          >
            <div className="ml-1.5">
              <p className="text-lg">
                <strong className="block">Logout</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
