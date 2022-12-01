import React from "react";
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
  const userData = cookies.get("userData");
  


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
