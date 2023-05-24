import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { OrderListData } from "../../../components";

const OrdersScreen = () => {
  const [listOfOrders, setListOfOrders] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    await axios
      .get(`http://localhost:80/reelsvideoapis/admin/get_all_user_projects.php`)
      .then(function (response) {
        // console.log("response :: " + JSON.stringify(response));

        if (response.data.status === true) {
          const listData = response.data.data;
          if (listData.length > 0) {
            const newList = [];
            listData.map((item) => {
              newList.push({
                id: item.order_id,
                userName: item.user_name,
                projectName: item.proj_name,
                title: item.title,
                notes: item.notes,
                song: item.song,
                dataSize: '0',
                payment: item.amount,
                orderDateTime: item.created_at,
                uploadingDateTime: item.downloadTime,
                status: item.status,
                downloadUserData: '',
                uploadData: '',
              });
            });
            setListOfOrders(newList);
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
        style={{ height: '94.5%' }}
        className='listDataCard'
        animate={{
          translateX: [800, 1, 1],
        }}
        transition={{
          delay: 0.2,
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <div className="textTitle">{'All Orders'}</div>
        <OrderListData style={{display: 'flex'}} pageSize={9} listOrder={listOfOrders} />
      </motion.div>

      {/* <div className={"dividerHeader"} /> */}
    </div >
  );
};

export default OrdersScreen;
