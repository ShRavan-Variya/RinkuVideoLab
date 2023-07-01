import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { OrderListData } from "../../../components";
import moment from "moment";

const OrdersScreen = () => {
  const [listOfOrders, setListOfOrders] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    setShowLoader(true);
    await axios
      .get(`http://localhost:80/reelsvideoapis/admin/get_all_user_projects.php`)
      .then(function (response) {
        // console.log("response :: " + JSON.stringify(response));

        if (response.data.status === true) {
          const listData = response.data.data;
          if (listData.length > 0) {
            const newList = [];
            listData.sort((a, b) => b.created_at.localeCompare(a.created_at));
            listData.map((item) => {
              const createdAt = moment(item.created_at).format(
                "DD/MM/YYYY - hh:mm:ss a"
              );
              const downloadTime = moment(item.downloadTime).format(
                "DD/MM/YYYY - hh:mm:ss a"
              );
              newList.push({
                id: item.order_id,
                userName: item.user_name,
                projectName: item.proj_name,
                title: item.title,
                notes: item.notes,
                song: item.song,
                dataSize: "0",
                payment: item.amount,
                orderDateTime: createdAt,
                uploadingDateTime: downloadTime,
                status:
                  item.status === "1"
                    ? "Pending"
                    : item.status === "2"
                    ? "Working"
                    : "Done",
                zipId: item.zipId,
                user_id: item.user_id,
                paymentId: item.paymentId,
                image: item.image,
                downloadLink: item.downloadLink,
                data_list: {
                  data_id: item.data_list.data_id,
                  filename: item.data_list.filename,
                  folder: item.data_list.folder,
                  created_at: item.data_list.created_at,
                  updated_at: item.data_list.updated_at,
                },
              });
            });

            console.log("====================================");
            console.log("newList :: " + JSON.stringify(newList));
            console.log("====================================");
            setListOfOrders(newList);
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

  const updateStatus = async (item) => {
    const statusData = JSON.stringify({
      id: item.id,
      status: 2,
    });

    setShowLoader(true);
    await axios
      .post(
        `http://localhost:80/reelsvideoapis/admin/update_status_order.php`,
        statusData
      )
      .then(function (response) {
        console.log("response :: " + JSON.stringify(response));
        if (response.data.status === true) {
          const newList = [...listOfOrders];
          newList.map((_item) => {
            if (_item.id === item.id) {
              _item.status = "Working";
            }
          });

          const filename = item.data_list.filename;
          const downloadLink = `http://localhost:80/reelsvideoapis/Reels/Row/${filename}`;
          window.open(downloadLink, "_blank");
          setListOfOrders(newList);
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

  const uploadData = async (fileInputRef, id) => {
    const selectedVideo = fileInputRef.current.files[0];
    const formData = new FormData();
    formData.append("video", selectedVideo);
    formData.append("id", id);
    formData.append("status", 3);

    setShowLoader(true);
    try {
      const res = await axios.post(
        "http://localhost:80/reelsvideoapis/admin/upload_final_video.php",
        formData
      );
      console.log(res.data);

      if (res.data.status) {
        const newList = [...listOfOrders];
        newList.map((item) => {
          if (item.id === id) {
            item.status = "Done";
          }
        });
        setListOfOrders(newList);
        setShowLoader(false);
        alert(res.data.message);
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
        style={{ height: "94.5%" }}
        className="listDataCard"
        animate={{
          translateX: [800, 1, 1],
        }}
        transition={{
          delay: 0.2,
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <div className="textTitle">{"All Orders"}</div>
        <OrderListData
          style={{ display: "flex" }}
          pageSize={9}
          listOrder={listOfOrders}
          onClickDownload={(item) => {
            const newList = [...listOfOrders];
            newList.map((_item) => {
              if (_item.id === item.id) {
                _item.status = "Working";
              }
            });

            const filename = item.data_list.filename;
            const downloadLink = `http://localhost:80/reelsvideoapis/Reels/Row/${filename}`;
            window.open(downloadLink, "_blank");
            setListOfOrders(newList);
            updateStatus(item);
          }}
          onClickUpload={(fileInputRef, id) => uploadData(fileInputRef, id)}
        />
      </motion.div>

      {/* <div className={"dividerHeader"} /> */}
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

export default OrdersScreen;
