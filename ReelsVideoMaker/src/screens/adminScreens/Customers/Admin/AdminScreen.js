import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AdminLists } from "../../../../components/orders";
import axios from "axios";

const AdminScreen = () => {
  const [listOfAdmins, setListOfAdmins] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    getAdmins();
  }, []);

  const getAdmins = async () => {
    setShowLoader(true);
    await axios
      .get(`https://reelsmaker.in/api/admin/get_admins.php`)
      .then(function (response) {
        setShowLoader(false);
        if (response.data.status === true) {
          const listData = response.data.data;
          console.log('listData ::: ' + JSON.stringify(listData));
          setListOfAdmins(listData);
        }
      })
      .catch((error) => {
        setShowLoader(false);
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

export default AdminScreen;
