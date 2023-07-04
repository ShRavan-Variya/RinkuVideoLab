import React from "react";
import { Helmet } from "react-helmet";
import { Elements } from '@stripe/react-stripe-js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import stripePromise from './components/payments/stripeConfig';
// Screens
import Landing from "./screens/Landing";
import Login from "./screens/auth/Login";
import Upload from "./screens/Dashboard/Upload";
import UserProfile from "./screens/settings/UserProfile";
import TermsCondition from "./screens/settings/TermsCondition";
import PrivacyPolicy from "./screens/settings/PrivacyPolicy";
import AdminRouteMain from "./AdminRouteMain";

export default function App() {
  return (
    <Elements stripe={stripePromise}>
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
          <Route path="/" element={<Landing />} />
          <Route exact={true} path="/admin/*" element={<AdminRouteMain />} />
          <Route exact={true} path="login" element={<Login />} />
          <Route exact={true} path="upload" element={<Upload />} />
          <Route exact={true} path="userProfile" element={<UserProfile />} />
          <Route exact={true} path="terms" element={<TermsCondition />} />
          <Route exact={true} path="privacy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </Elements>
  );
}
