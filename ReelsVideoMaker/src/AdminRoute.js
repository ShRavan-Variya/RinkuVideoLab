import React from 'react';
import { Routes, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/admin/flexboxgrid.min.css";
import "./style/admin/index.css";
import {
  AdminLogin,
  AdminScreen,
  ClientScreen,
  AdminDashBoard,
  OrdersScreen,
  DashDataScreen,
} from "./screens";
import { SideBar } from './components';
import { useGlobal } from "./context/globalContext";

function AdminRoute() {
  const globalContext = useGlobal();
  const adminData = globalContext.adminData;

  console.log('adminData' + JSON.stringify(adminData));

  return (
    <div>
      <SideBar adminData={adminData}>
        <Routes>
          <Route path="/adminDash" element={<AdminDashBoard />} />
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