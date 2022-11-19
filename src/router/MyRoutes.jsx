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
// pages admin
import DashboardAdmin from "../pages/admin/dashboard/Dashboard";
import Distrik from "../pages/admin/distrik/Distrik";
import IndexAdmin from "../pages/admin/IndexAdmin";
import Kabupaten from "../pages/admin/kabupaten/Kabupaten";
import Provinsi from "../pages/admin/provinsi/Provinsi";
import NotFound from "../pages/errors/NotFound";

// auth pages

// user pages

const MyRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={pathname}>
        <Route path="/" element={<Navigate replace to="/admin/dashboard" />} />
        {/* user pages */}
        <Route path="user"></Route>
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
        </Route>

        {/* not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default MyRoutes;
