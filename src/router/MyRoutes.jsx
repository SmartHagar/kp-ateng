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
import NotFound from "../pages/errors/NotFound";

// auth pages

// user pages
import IndexUser from "../pages/users/IndexUser";
import DashboardUser from "../pages/users/dashboard/Dashboard";
import AlumniUser from "../pages/users/alumni/Alumni";
import AboutUser from "../pages/users/about/About";
// ketua

const MyRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={pathname}>
        <Route path="/" element={<Navigate replace to="/user/dashboard" />} />
        {/* user pages */}
        <Route path="user" element={<IndexUser />}>
          <Route path="dashboard" element={<DashboardUser />} />
          <Route path="about" element={<AboutUser />} />
          <Route path="alumni/:id" element={<AlumniUser />} />
        </Route>
        {/* auth pages */}
        <Route path="auth"></Route>
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

        {/* not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default MyRoutes;
