import React from 'react';
import { Routes, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/admin/flexboxgrid.min.css";
import "./style/admin/index.css";
import {
  AdminScreen,
  AdminDashBoard,
  OrdersScreen,
  DashProjectDataScreen,
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
          <Route exact={true} path="/adminDash" element={<AdminDashBoard />} />
          <Route exact={true} path="/Orders" element={<OrdersScreen />} />
          <Route exact={true} path="/Admins" element={<AdminScreen />} />
          <Route exact={true} path="/DashProjectData" element={<DashProjectDataScreen />} />
          <Route exact={true} path="/DashData" element={<DashDataScreen />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </div>
  );
}

export default AdminRoute;