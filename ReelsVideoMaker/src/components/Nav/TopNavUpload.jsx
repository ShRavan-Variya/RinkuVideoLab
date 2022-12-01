import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Components
import SidebarUpload from "./SidebarUpload";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavUpload(props) {
  const [y, setY] = useState(window.scrollY);
  const [textPosition, setTextPosition] = useState(0);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    const position = props.onPosition;
    setTextPosition(position);
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SidebarUpload onPosition={props.onPosition} sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
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
          <Link className="pointer flexNullCenter" to="/" smooth={true}>
            <LogoIcon />
            <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
              Reels Maker
            </h1>
          </Link>
          <BurderWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link
                style={{ padding: "10px 15px" }}
                to="/Upload"
                smooth={true}
                className={textPosition === 0 ? "active purpleColor" : "darkColor"}
              >
                Upload
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                style={{ padding: "10px 15px" }}
                to="/Payments"
                smooth={true}
                className={textPosition === 1 ? "active purpleColor" : "darkColor"}
              >
                Payments
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                style={{ padding: "10px 15px" }}
                to="/Downloads"
                smooth={true}
                className={textPosition === 2 ? "active purpleColor" : "darkColor"}
              >
                Downloads
              </Link>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link
                style={{ padding: "10px 15px" }}
                to="/"
                className="darkColor"
              >
                Home
              </Link>
            </li>
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
