/** @format */

import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Alumni from "../pages/admin/alumni/Alumni";
// pages admin
import DashboardAdmin from "../pages/admin/dashboard/Dashboard";
import Distrik from "../pages/admin/distrik/Distrik";
import IndexAdmin from "../pages/admin/IndexAdmin";
import Kabupaten from "../pages/admin/kabupaten/Kabupaten";
import Provinsi from "../pages/admin/provinsi/Provinsi";

// auth pages
import CekLogin from "../pages/auth/CekLogin";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

// user pages
import IndexUser from "../pages/users/IndexUser";
import DashboardUser from "../pages/users/dashboard/Dashboard";
import AlumniUser from "../pages/users/alumni/Alumni";
import AboutUser from "../pages/users/about/About";

// ketua pages
import IndexKetua from "../pages/ketua/IndexKetua";
import DashboardKetua from "../pages/ketua/dashboard/Dashboard";

// error
import NotFound from "../pages/errors/NotFound";
import Keseluruhan from "../pages/ketua/laporan/Keseluruhan";
import PerDistrik from "../pages/ketua/laporan/PerDistrik";

const MyRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={pathname}>
        <Route path="/" element={<Navigate replace to="/auth/login" />} />
        {/* user pages */}
        <Route path="user" element={<IndexUser />}>
          <Route path="dashboard" element={<DashboardUser />} />
          <Route path="about" element={<AboutUser />} />
          <Route path="alumni/:id" element={<AlumniUser />} />
        </Route>
        {/* auth pages */}
        <Route path="auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cek-login" element={<CekLogin />} />
        </Route>
        {/* admin pages */}
        <Route path="admin" element={<IndexAdmin />}>
          <Route path="dashboard" element={<DashboardAdmin />} />
          <Route path="wilayah">
            <Route path="provinsi" element={<Provinsi />} />
            <Route path="kabupaten" element={<Kabupaten />} />
            <Route path="distrik" element={<Distrik />} />
          </Route>
          <Route path="alumni" element={<Alumni />} />
        </Route>
        {/* ketua pages */}
        <Route path="ketua" element={<IndexKetua />}>
          <Route path="dashboard" element={<DashboardKetua />} />
          <Route path="laporan">
            <Route path="keseluruhan" element={<Keseluruhan />} />
            <Route path="perdistrik" element={<PerDistrik />} />
          </Route>
        </Route>

        {/* not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default MyRoutes;
