import React from 'react';
import { Routes, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/admin/flexboxgrid.min.css";
import "./style/admin/index.css";
import {
  AdminLogin,
} from "./screens";
import AdminRoute from './AdminRoute';

function AdminRouteMain() {
  return (
    <Routes>
      <Route path="/" element={<AdminLogin />} />
      <Route path="*" element={<AdminRoute />} />
    </Routes>
  );
}

export default AdminRouteMain;