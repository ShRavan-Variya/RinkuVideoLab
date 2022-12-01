import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Screens
import Landing from "./screens/Landing";
import Login from "./screens/auth/Login";
import Upload from "./screens/Dashboard/Upload";
import Payments from "./screens/Dashboard/Payments";
import Downloads from "./screens/Dashboard/Downloads";
// import AdminLogin from "../admin/src/screens/auth/AdminLogin";

export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {/* <TopNavbar /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="upload" element={<Upload />} />
          <Route path="payments" element={<Payments />} />
          <Route path="Downloads" element={<Downloads />} />
          {/* <Route path="/admin" element={<AdminLogin />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
