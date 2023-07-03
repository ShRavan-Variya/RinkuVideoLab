import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import moment from "moment";
import axios from "axios";
import { DashProjectData } from "../../../../components";

const DashProjectDataScreen = () => {
  const [listOfDashProjects, setListOfDashProjects] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    doGetDataProjects();
  }, []);

  const doGetDataProjects = async () => {
    setShowLoader(true);
    await axios
      .get("https://reelsmaker.in/apis/client/get_dashProjects.php")
      .then(function (response) {
        console.log("response :: " + JSON.stringify(response));

        setShowLoader(false);
        if (response.data.status === true) {
          const listImages = response.data.data;
          if (listImages.length > 0) {
            const newList = [];
            listImages.map((item) => {
              const createdAt = moment(item.created_at).format(
                "DD/MM/YYYY - hh:mm:ss a"
              );
              const updatedAt = moment(item.updated_at).format(
                "DD/MM/YYYY - hh:mm:ss a"
              );
              newList.push({
                id: item.id,
                imageName: item.image,
                image:
                  "https://reelsmaker.in/apis/Reels/DashData/" +
                  item.image,
                created_at: createdAt,
                updated_at: updatedAt,
              });
            });
            setListOfDashProjects(newList);
          }
        }
      })
      .catch((error) => {
        setShowLoader(false);
        console.log("====================================");
        console.log("ERR :: " + JSON.stringify(error));
        console.log("====================================");
      });
  };

  const uploadData = async (fileInputRef, id) => {
    const selectedImage = fileInputRef.current.files[0];
    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("id", id);

    setShowLoader(true);
    try {
      const res = await axios.post(
        "https://reelsmaker.in/apis/admin/upload_data_projects.php",
        formData
      );
      console.log(res.data);

      if (res.data.status) {
        doGetDataProjects();
      } else {
        setShowLoader(false);
        console.log("ERR", JSON.stringify(res));
        alert(res.data.message);
      }
    } catch (ex) {
      console.log("ERR", JSON.stringify(ex));
      console.log(ex);
    }
  };

  return (
    <div className="main-container" style={{ height: "100%" }}>
      <motion.div
        style={{ height: "94%" }}
        className="listDatashboardCard"
        animate={{
          translateX: [800, 1, 1],
        }}
        transition={{
          delay: 0.2,
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <TextTitle className="textTitle1">{"Awesome Projects"}</TextTitle>
        <DashProjectData
          style={{ display: "flex" }}
          listImages={listOfDashProjects}
          onClickUpload={(fileInputRef, id) => uploadData(fileInputRef, id)}
        />
      </motion.div>
      {showLoader ? (
        <div className="popup">
          <div className="popup-loader">
            <div className="loader" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

const TextTitle = styled.div`
  margin: 15px 0 0 0;
`;

export default DashProjectDataScreen;
