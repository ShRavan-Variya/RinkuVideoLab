import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import Projects from "../components/Sections/Projects";
import Contact from "../components/Sections/Contact";
import { useGlobal } from "../context/globalContext";
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Footer from "../components/Sections/Footer";
import moment from "moment";
import axios from "axios";

const Landing = () => {
  const cookies = new Cookies();
  const globalContext = useGlobal();
  const isLogin = globalContext.isLogin;
  const [topImage1, setTopImage1] = useState('');
  const [topImage2, setTopImage2] = useState('');
  const [topImage3, setTopImage3] = useState('');
  const [topImage4, setTopImage4] = useState('');
  const [bottomImage1, setBottomImage1] = useState('');
  const [bottomImage2, setBottomImage2] = useState('');
  const [bottomImage3, setBottomImage3] = useState('');
  const [listOfProject, setListOfProject] = useState([]);

  useEffect(() => {
    doGetCookie();
    moment.locale("en");
    doGetData();
  }, [])

  const doGetCookie = () => {
    const userData = cookies.get("userData");

    console.log(userData);

    if (userData !== undefined && userData !== null) {
      const userId = userData.user_id;
      if (userId !== undefined && userId !== null) {
        globalContext.setLogin(true);
        globalContext.setUserId(userData.userId);
        globalContext.setUserData(userData);
      }
    } 
  }

  const doGetData = async () => {
    await axios
      .get('https://reelsmaker.in/api/client/get_dashImages.php')
      .then(function (response) {
        console.log("response :: " + JSON.stringify(response));

        if (response.data.status === true) {
          const listImages = response.data.data;
          if (listImages.length > 0) {
            listImages.map((item) => {
              if (item.imageName === 'dashTop1') {
                setTopImage1(item.image)
              } else if (item.imageName === 'dashTop2') {
                setTopImage2(item.image)
              } else if (item.imageName === 'dashTop3') {
                setTopImage3(item.image)
              } else if (item.imageName === 'dashTop4') {
                setTopImage4(item.image)
              } else if (item.imageName === 'dashContact1') {
                setBottomImage1(item.image)
              } else if (item.imageName === 'dashContact2') {
                setBottomImage2(item.image)
              } else if (item.imageName === 'dashContact3') {
                setBottomImage3(item.image)
              }
            }) 
          }
        }
        doGetProjects();
      })
      .catch((error) => {
        doGetProjects();
      });
  };

  const doGetProjects = async () => {
    await axios
      .get('https://reelsmaker.in/api/client/get_dashProjects.php')
      .then(function (response) {
        console.log("response :: " + JSON.stringify(response));

        if (response.data.status === true) {
          const listProjects = response.data.data;
          setListOfProject(listProjects);
        }
      })
      .catch((error) => {
        console.log("====================================");
        console.log("ERR :: " + JSON.stringify(error));
        console.log("====================================");
      });
  };

  return (
    <>
      <TopNavbar isLogin={isLogin} />
      <Header image1={topImage1} image2={topImage2} image3={topImage3} image4={topImage4} />
      {/* <Services /> */}
      <Projects data={listOfProject} />
      {/* <Blog /> */}
      {/* <Pricing /> */}
      <Contact image1={bottomImage1} image2={bottomImage2} image3={bottomImage3} />
      <Footer isHome={true} />
    </>
  );
};

export default Landing;
