import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { OrderListData, TimeDataItem, TimeDataListItem } from "../../../../components";
import { IcSettings } from "../../../../assets/svg";
import { AdminLists } from "../../../../components/orders";
import axios from "axios";

const AdminScreen = () => {
  const [listOfAdmins, setListOfAdmins] = useState([]);

  useEffect(() => {
    getAdmins();
  }, []);

  const getAdmins = async () => {
    await axios
      .get(`http://localhost:80/reelsvideoapis/admin/get_admins.php`)
      .then(function (response) {
        if (response.data.status === true) {
          const listData = response.data.data;
          console.log('listData ::: ' + JSON.stringify(listData));
          setListOfAdmins(listData);
        }
      })
      .catch((error) => {
        console.log("====================================");
        console.log("ERR :: " + JSON.stringify(error));
        console.log("====================================");
      });
  }

  return (
    <div className="main-container" style={{ height: '100%' }}>
      {/* <div className={"dividerHeader"} /> */}
      <motion.div
        style={{ height: '94%' }}
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
        <div className="textTitle">{'Recent Orders'}</div>
        <AdminLists style={{display: 'flex'}} listOrder={listOfAdmins} />
      </motion.div>

      {/* <div className={"dividerHeader"} /> */}
    </div >
  );
};

export default AdminScreen;
