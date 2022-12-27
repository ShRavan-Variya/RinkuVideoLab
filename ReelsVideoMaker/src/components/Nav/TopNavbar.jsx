import React, { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import Cookies from "universal-cookie";
import styled from "styled-components";
import { useGlobal } from "../../context/globalContext";
// Components
import Backdrop from "../Elements/Backdrop";
import Sidebar from "./Sidebar";
// Assets
import BurgerIcon from "../../assets/svg/BurgerIcon";
import LogoIcon from "../../assets/svg/Logo";

export default function TopNavbar({ isLogin }) {
  const cookies = new Cookies();
  const globalContext = useGlobal();
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  let menuRef = useRef();
  const [showUserPopup, setShowUserPopup] = useState(false);
  const profileMenu = ['My Profile', 'Privacy Policy', 'Tearms & Conditions', 'Change Password', 'Logout'];

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowUserPopup(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);


    return () => {
      document.removeEventListener("mousedown", handler);
    }

  });

  const doLogout = () => {
    const userData = cookies.get("userData");

    const userId = '';
    globalContext.setLogin(false);
    globalContext.setUserId(userId);
    globalContext.setUserData('');

    cookies.remove("userData");
    
    return <Link push to='/' />
  }

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
              <div className="flexNullCenter">
                <li className="semiBold font15 pointer flexCenter">
                  <Link
                    className="radius8 lightBg"
                    style={{ padding: "10px 30px" }}
                    to="/upload"
                  >
                    Create Reels
                  </Link>
                </li>
                <div className='menu-container' ref={menuRef}>
                  <li
                    className="menu-trigger semiBold font15 pointer flexCenter"
                    style={{ margin: '0 0 0 25px' }}
                    onClick={() => {
                      console.log('Clicked user');
                      setShowUserPopup(!showUserPopup)
                    }}
                  >
                    <FaUserAlt size={25} className={'darkColorNew'} />
                  </li>
                  <div className={`dropdown-menu shadow semiBold ${showUserPopup ? 'activeCard' : 'inactive'}`} >
                    <ul>
                      <DropdownItem
                        text={"My Profile"}
                        bottomDivider={true}
                        toLink={"/userProfile"}
                      />
                      <DropdownItem
                        text={"Privacy Policy"}
                        bottomDivider={true}
                        toLink={"/privacy"}
                      />
                      <DropdownItem
                        text={"Terms & Conditions"}
                        bottomDivider={true}
                        toLink={"/terms"}
                      />
                      <DropdownItem
                        text={"Logout"}
                        bottomDivider={false}
                        onClick={doLogout}
                      />
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <Link style={{ padding: "10px 30px 10px 0" }} to="/login" className="semiBold font15 pointer">
                Log in
              </Link>
            )}
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

function DropdownItem(props) {
  return (
    <li className={`dropdownItem ${props.bottomDivider ? 'dividerBottom' : ''}`} onClick={props.onClick}>
      {props.toLink ? (
        <Link
          to={props.toLink}
        >
          <a>{props.text}</a>
        </Link>
      ) : (
        <a
          style={{ padding: '0 0 0 10px' }}>{props.text}</a>
      )}

    </li>
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
