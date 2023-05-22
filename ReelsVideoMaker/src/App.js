import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Screens
import Landing from "./screens/Landing";
import Login from "./screens/auth/Login";
import Upload from "./screens/Dashboard/Upload";
import Payments from "./screens/Dashboard/Payments";
import Downloads from "./screens/Dashboard/Downloads";
import UserProfile from "./screens/settings/UserProfile";
import TermsCondition from "./screens/settings/TermsCondition";
import PrivacyPolicy from "./screens/settings/PrivacyPolicy";
import AdminRoute from "./AdminRoute";

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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Helmet>
      {/* <TopNavbar /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/admin/*" element={<AdminRoute />} />
          <Route path="login" element={<Login />} />
          <Route path="upload" element={<Upload />} />
          <Route path="payments" element={<Payments />} />
          <Route path="Downloads" element={<Downloads />} />
          <Route path="userProfile" element={<UserProfile />} />
          <Route path="terms" element={<TermsCondition />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
