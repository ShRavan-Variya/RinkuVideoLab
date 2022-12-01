import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
// Components
import Sidebar from "./Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar({ isLogin }) {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar isLogin={isLogin} sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate"
        style={
          y > 100
            ? { height: "60px", backgroundColor: "#FFF" }
            : { height: "80px", backgroundColor: "#f5f5f5" }
        }
      >
        <NavInner className="container flexSpaceCenter">
          <ScrollLink
            className="pointer flexNullCenter"
            to="home"
            smooth={true}
          >
            <LogoIcon />
            <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
              Reels Maker
            </h1>
          </ScrollLink>
          <BurderWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <ScrollLink
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Home
              </ScrollLink>
            </li>
            {/* <li className="semiBold font15 pointer">
              <ScrollLink activeClass="active" style={{ padding: "10px 15px" }} to="services" spy={true} smooth={true} offset={-80}>
                Services
              </ScrollLink>
            </li> */}
            <li className="semiBold font15 pointer">
              <ScrollLink
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Projects
              </ScrollLink>
            </li>
            {/* <li className="semiBold font15 pointer">
              <ScrollLink activeClass="active" style={{ padding: "10px 15px" }} to="blog" spy={true} smooth={true} offset={-80}>
                Blog
              </ScrollLink>
            </li> */}
            {/* <li className="semiBold font15 pointer">
              <ScrollLink
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="pricing"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Pricing
              </ScrollLink>
            </li> */}
            <li className="semiBold font15 pointer">
              <ScrollLink
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Contact
              </ScrollLink>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            {isLogin === true ? (
              <li className="semiBold font15 pointer flexCenter">
                <Link
                  className="radius8 lightBg"
                  style={{ padding: "10px 30px" }}
                  to="/upload"
                >
                  Get Started
                </Link>
              </li>
            ) : (
              <li className="semiBold font15 pointer">
                <Link style={{ padding: "10px 30px 10px 0" }} to="/login">
                  Log in
                </Link>
              </li>
            )}
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;
