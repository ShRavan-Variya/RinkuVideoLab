import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaHome } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { IcHome, IcLists, IcLogout, IcOffers, IcUser } from "../../assets/svg";
import userImage from "../../assets/img/userImage.jpg";
import LogoIcon from "../../assets/svg/Logo";
import SidebarMenu from "./sidebarMenu";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <IcHome height={22} width={22} />,
  },
  {
    name: "divider",
  },
  {
    path: "/Orders",
    name: "Orders",
    icon: <IcLists height={22} width={22} />,
  },
  {
    path: "/Admins",
    name: "Admins",
    icon: <IcUser height={22} width={22} />,
  },
  {
    path: "/Clients",
    name: "Clients",
    icon: <IcUser height={22} width={22} />,
    // subRoutes: [],
  },
  {
    path: "/DashData",
    name: "DashboardData",
    icon: <IcUser height={22} width={22} />,
    // subRoutes: [],
  }
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="side-container">
        <motion.div
          animate={{
            width: isOpen ? "380px" : "120px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={"sidebar lightBg"}
        >
          <div className="sidebarRound whiteBg">
            <div className="top_section" style={{ padding: "35px 20px" }}>
              <AnimatePresence>
                {isOpen && (
                  <motion.h1
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="logo"
                  >
                    ReelsMaker
                  </motion.h1>
                )}
              </AnimatePresence>

              <FaBars onClick={toggle} size={20} />
            </div>
            <section className="routes">
              {routes.map((route, index) => {
                if (route.name === "divider") {
                  return <div className={"sideBarDivider"} />;
                } else {
                  if (route.subRoutes) {
                    return (
                      <SidebarMenu
                        setIsOpen={setIsOpen}
                        route={route}
                        showAnimation={showAnimation}
                        isOpen={isOpen}
                      />
                    );
                  }

                  return (
                    <NavLink
                      to={route.path}
                      key={index}
                      className="link"
                      activeClassName="active"
                    >
                      <div className={isOpen ? "icon" : "iconNoPad"}>
                        {route.icon}
                      </div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            variants={showAnimation}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="link_text"
                          >
                            {route.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </NavLink>
                  );
                }
              })}
            </section>
          </div>
        </motion.div>

        <div className="lightBg" style={{ width: "100%", height: '100vh', padding: "1vh" }}>
          <div className="flexRow" style={{height: '10%'}}>
            <div className="flexEnd">
              <div className="userName">Jon Snow</div>
              <div className="userRole">Admin</div>
            </div>
            <div className="imageSpace">
              <LogoIcon />
              {/* <img className="userImage" src={userImage} alt={userImage} /> */}
            </div>
          </div>
          <div className={"dividerHeader"} />
          <div style={{height: '90%'}}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
