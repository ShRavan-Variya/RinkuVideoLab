import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Components
// import Sidebar from "../Nav/Sidebar";
// import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
// import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavLogin() {
  const [y, setY] = useState(window.scrollY);
  // const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (  
    <>
      <Wrapper
        className="flexCenter animate"
        style={
          y > 100
            ? { height: "60px", backgroundColor: "#FFF" }
            : { height: "80px", backgroundColor: "#f5f5f5" }
        }
      >
        <NavInner className="container flexCenter">
          <Link
            className="pointer flexNullCenter"
            to="/"
            smooth={true}
          >
            <LogoIcon />
            <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
              Reels Maker
            </h1>
          </Link>
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
// const BurderWrapper = styled.button`
//   outline: none;
//   border: 0px;
//   background-color: transparent;
//   height: 100%;
//   padding: 0 15px;
//   display: none;
//   @media (max-width: 760px) {
//     display: block;
//   }
// `;
// const UlWrapper = styled.ul`
//   display: flex;
//   @media (max-width: 760px) {
//     display: none;
//   }
// `;
// const UlWrapperRight = styled.ul`
//   @media (max-width: 760px) {
//     display: none;
//   }
// `;
