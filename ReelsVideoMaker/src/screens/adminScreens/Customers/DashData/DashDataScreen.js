import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import moment from 'moment';
import axios from "axios";
import { DashImageData } from "../../../../components";

const DashDataScreen = () => {
  const [listOfDashImages, setListOfDashImages] = useState([]);
  const [listOfDashProjects, setListOfDashProjects] = useState([]);

  useEffect(() => {
    doGetDataImages();
    doGetDataProjects();
  }, [])

  const doGetDataImages = async () => {
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
      })
      .catch((error) => {
        console.log("====================================");
        console.log("ERR :: " + JSON.stringify(error));
        console.log("====================================");
      });
  };

  const doGetDataProjects = async () => {
    await axios
      .get('http://localhost:80/reelsvideoapis/client/get_dashProjects.php')
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
                imageName: item.image,
                image: 'http://localhost:80/reelsvideoapis/Reels/DashData/' + item.image,
                created_at: createdAt,
                updated_at: updatedAt,
              })
            })
            setListOfDashProjects(newList)
          }
        }
      })
      .catch((error) => {
        console.log("====================================");
        console.log("ERR :: " + JSON.stringify(error));
        console.log("====================================");
      });
  };

  const uploadData = async (fileInputRef, id, type) => {
    const formData = new FormData();
    const selectedImage = fileInputRef.current.files[0]
    formData.append("image", selectedImage);
    formData.append("id", id);

    console.log(formData);

    try {
      let url = 'http://localhost:80/reelsvideoapis/admin/upload_data_images.php';
      if (type === 2) {
        url = 'http://localhost:80/reelsvideoapis/admin/upload_data_projects.php';
      }

      const res = await axios.post(url, formData)
      console.log(res.data);

      if (res.data.status) {
        if (type === 1) {
          doGetDataImages()
        } else {
          doGetDataProjects()
        }
        
      } else {
        alert(res.data.message)
      }
    } catch (ex) {
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
        <DashImageData style={{ display: 'flex' }} listImages={listOfDashImages} uploadData={(fileInputRef, id) => uploadData(fileInputRef, id, 1)} />
        <TextTitle className="textTitle1">{'Awesome Projects'}</TextTitle>
        <DashImageData style={{ display: 'flex' }} listImages={listOfDashProjects} uploadData={(fileInputRef, id) => uploadData(fileInputRef, id, 2)} />
      </motion.div>
    </div >
  );
};

const TextTitle = styled.div`
  margin: 15px 0 0 0;
`;


export default DashDataScreen;
