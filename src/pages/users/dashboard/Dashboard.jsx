/** @format */

import React, { useState } from "react";
import AlumniGrafik from "../../../components/grafik/AlumniGrafik";
import VisiMisi from "../../../assets/gambar/visi-misi.jpeg";
const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-center mb-10">
        <img src={VisiMisi} alt="" />
      </div>
      <div className="-z-50 relative min-h-[85vh]">
        <AlumniGrafik />
      </div>
    </div>
  );
};

export default Dashboard;
