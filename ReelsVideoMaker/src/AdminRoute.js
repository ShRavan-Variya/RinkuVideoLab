import React from 'react';
import { Routes, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/admin/flexboxgrid.min.css";
import "./style/admin/index.css";
import {
  AdminScreen,
  ClientScreen,
  AdminDashBoard,
  OrdersScreen,
  DashDataScreen,
} from "./screens";
import { SideBar } from './components';

function AdminRoute() {
  return (
    <div>
      <SideBar>
        <Routes>
          <Route path="/" element={<AdminDashBoard />} />
          <Route path="/Orders" element={<OrdersScreen />} />
          <Route path="/Admins" element={<AdminScreen />} />
          <Route path="/Clients" element={<ClientScreen />} />
          <Route path="/DashData" element={<DashDataScreen />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </div>
  );
}

export default AdminRoute;