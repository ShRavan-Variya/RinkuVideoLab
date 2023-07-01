import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import moment from 'moment';
import axios from "axios";
import { DashImageData } from "../../../../components";

const DashDataScreen = () => {
  const [listOfDashImages, setListOfDashImages] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    doGetDataImages();
  }, [])

  const doGetDataImages = async () => {
    setShowLoader(true);
    await axios
      .get('http://localhost:80/reelsvideoapis/client/get_dashImages.php')
      .then(function (response) {
        console.log("response :: " + JSON.stringify(response));

        if (response.data.status === true) {
          const listImages = response.data.data;
          if (listImages.length > 0) {
            const newList = [];
            listImages.map((item) => {
              const createdAt = moment(item.created_at).format('DD/MM/YYYY - hh:mm:ss a');
              const updatedAt = moment(item.updated_at).format('DD/MM/YYYY - hh:mm:ss a');
              newList.push({
                id: item.id,
                imageName: item.imageName,
                image: 'http://localhost:80/reelsvideoapis/Reels/DashData/' + item.image,
                created_at: createdAt,
                updated_at: updatedAt,
              })
            })
            setListOfDashImages(newList)
          }
        }
        setShowLoader(false);
      })
      .catch((error) => {
        setShowLoader(false);
        console.log("====================================");
        console.log("ERR :: " + JSON.stringify(error));
        console.log("====================================");
      });
  };

  const uploadData = async (fileInputRef, id, type) => {
    const selectedImage = fileInputRef.current.files[0]
    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("id", id);

    setShowLoader(true);
    try {
      const res = await axios.post('http://localhost:80/reelsvideoapis/admin/upload_data_images.php', formData)
      console.log(res.data);

      if (res.data.status) {
        doGetDataImages()
      } else {
        console.log('ERR', JSON.stringify(res));
        alert(res.data.message)
      }
    } catch (ex) {
      setShowLoader(false);
      console.log('ERR', JSON.stringify(ex));
      console.log(ex);
    }
  }

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
        <DashImageData style={{ display: 'flex' }} listImages={listOfDashImages} onClickUpload={(fileInputRef, id) => uploadData(fileInputRef, id)} />
      </motion.div>
      {showLoader ? (
        <div className="popup">
          <div className="popup-loader">
            <div className="loader" />
          </div>
        </div>
      ) : null}
    </div >
  );
};

const TextTitle = styled.div`
  margin: 15px 0 0 0;
`;


export default DashDataScreen;
