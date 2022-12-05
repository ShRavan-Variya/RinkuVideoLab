import React, { useEffect } from "react";
import Cookies from "universal-cookie";
import Projects from "../components/Sections/Projects";
import Contact from "../components/Sections/Contact";
import { useGlobal } from "../context/globalContext";
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Footer from "../components/Sections/Footer";

const Landing = () => {
  const cookies = new Cookies();
  const globalContext = useGlobal();
  const isLogin = globalContext.isLogin;

  useEffect(() => {
    doGetCookie();
  }, [])

  const doGetCookie = () => {
    const userData = cookies.get("userData");

    if (userData !== undefined && userData !== null) {
      const userId = userData.user_id;
      if (userId !== undefined && userId !== null) {
        globalContext.setLogin(true);
        globalContext.setUserId(userData.userId);
        globalContext.setUserData(userData);
      }
    } 
  }

  return (
    <>
      <TopNavbar isLogin={isLogin} />
      <Header />
      {/* <Services /> */}
      <Projects />
      {/* <Blog /> */}
      {/* <Pricing /> */}
      <Contact />
      <Footer isHome={true} />
    </>
  );
};

export default Landing;
