import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import axios from "axios";
import { DashImageData } from "../../../../components";

const DashDataScreen = () => {
  const [listOfDashImages, setListOfDashImages] = useState([]);

  useEffect(() => {
    doGetData();
  }, [])

  const doGetData = async () => {
    await axios
      .get('http://localhost:80/reelsvideoapis/client/get_dashImages.php')
      .then(function (response) {
        console.log("response :: " + JSON.stringify(response));

        if (response.data.status === true) {
          const listImages = response.data.data;
          if (listImages.length > 0) {
            const newList = [];
            listImages.map((item) => {
              newList.push({
                id: item.id,
                imageName: item.imageName,
                image: 'http://localhost:80/reelsvideoapis/Reels/DashData/' + item.image,
                created_at: item.created_at,
                updated_at: item.updated_at,
              })
            })
            setListOfDashImages(newList)
          }
        }
      })
      .catch((error) => {
        console.log("====================================");
        console.log("ERR :: " + JSON.stringify(error));
        console.log("====================================");
      });
  };

  return (
    <div className="main-container" style={{ height: '100%' }}>
      <motion.div
        style={{ height: '94%' }}
        className='listDatashboardCard'
        animate={{
          translateX: [800, 1, 1],
        }}
        transition={{
          delay: 0.2,
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <div className="textTitle1">{'Top-Bottom List'}</div>
        <DashImageData style={{display: 'flex'}} listImages={listOfDashImages} />
        <TextTitle className="textTitle1">{'Awesome Projects'}</TextTitle>
        <DashImageData style={{display: 'flex'}} listImages={listOfDashImages} />
      </motion.div>
    </div >
  );
};

const TextTitle = styled.div`
  margin: 15px 0 0 0;
`;


export default DashDataScreen;
