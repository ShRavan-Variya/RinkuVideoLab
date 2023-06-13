import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import {
  OrderListData,
  TimeDataItem,
  TimeDataListItem,
} from "../../../components";
import emptyImage from "../../../assets/img/emptyImage.png";
import { IcSettings } from "../../../assets/svg";
import { AdminDashBoardData } from "../../../components/orders";
import moment from "moment";

const AdminDashBoard = () => {
  const [listOfTimeData, setListOfTimeData] = useState([]);
  const [listOfTopCards, setListOfTopCards] = useState([]);
  const [listOfData, setListOfData] = useState([]);

  useEffect(() => {
    getTimeData();
  }, []);

  const getTimeData = () => {
    const newList = [];
    newList.push({ title: "Today", isSelected: true, type: 1 });
    newList.push({ title: "Week", type: 2 });
    newList.push({ title: "Month", type: 3 });
    newList.push({ title: "Year", type: 4 });

    getDataList(newList);
  };

  const getDataList = (newList) => {
    let count = 0;
    newList.map((item) => {
      if (item.isSelected) {
        count = item.type;
      }
    });

    setListOfTimeData(newList);
    getCounts(count);

    getProjectByType();
  };

  const getCounts = async (type) => {
    await axios
      .get(
        `http://localhost:80/reelsvideoapis/admin/get_dashcount.php?countType=${type}`
      )
      .then(function (response) {
        // console.log("response :: " + JSON.stringify(response));

        if (response.data.status === true) {
          getDataTopCards(response.data.data);
        }
      })
      .catch((error) => {
        console.log("====================================");
        console.log("ERR :: " + JSON.stringify(error));
        console.log("====================================");
      });
  };

  const getProjectByType = async () => {
    await axios
      .get(`http://localhost:80/reelsvideoapis/admin/get_user_projects.php`)
      .then(function (response) {
        if (response.data.status === true) {
          const listData = response.data.data;
          if (listData.length > 0) {
            const newList = [];
            listData.sort((a, b) => b.created_at.localeCompare(a.created_at));
            listData.map((item) => {
              const createdAt = moment(item.created_at).format('DD/MM/YYYY - hh:mm:ss a');
              const downloadTime = moment(item.downloadTime).format('DD/MM/YYYY - hh:mm:ss a');
              newList.push({
                id: item.order_id,
                userName: item.user_name,
                projectName: item.proj_name,
                title: item.title,
                notes: item.notes,
                song: item.song,
                dataSize: '0',
                payment: item.amount,
                orderDateTime: createdAt,
                uploadingDateTime: downloadTime,
                status: item.status === '1' ? 'Pending' : 'Working',
                downloadUserData: '',
                uploadData: '',
              });
            });
            setListOfData(newList);
          }
        }
      })
      .catch((error) => {
        console.log("====================================");
        console.log("ERR :: " + JSON.stringify(error));
        console.log("====================================");
      });
  };

  const getDataTopCards = (data) => {
    const newList = [];
    // newList.push({
    //   title: "Total Revenue",
    //   subTitle: "250000",
    //   icon: <IcSettings height={40} width={40} />,
    // });
    newList.push({
      title: "Total Projects",
      subTitle: data.total,
      icon: <IcSettings height={40} width={40} />,
    });
    newList.push({
      title: "Completed Projects",
      subTitle: data.complete,
      icon: <IcSettings height={40} width={40} />,
    });
    // newList.push({
    //   title: "Happy Clients",
    //   subTitle: "5000",
    //   icon: <IcSettings height={40} width={40} />,
    // });
    newList.push({
      title: "Pending Projects",
      subTitle: data.pending,
      icon: <IcSettings height={40} width={40} />,
    });
    newList.push({
      title: "Working Projects",
      subTitle: data.working,
      icon: <IcSettings height={40} width={40} />,
    });
    setListOfTopCards(newList);
  };

  return (
    <div className="main-container" style={{ height: "100%" }}>
      <div style={{ height: "25%" }}>
        <div className="dashCard-row">
          {listOfTimeData.map((item, index) => (
            <TimeDataItem
              item={item}
              index={index}
              key={index}
              onClickItem={() => {
                const newList = [...listOfTimeData];
                newList.map((_item, _index) => {
                  if (_index === index) {
                    _item.isSelected = true;
                  } else {
                    _item.isSelected = false;
                  }
                });

                getDataList(newList);
              }}
            />
          ))}
        </div>
        <motion.div
          animate={{
            translateY: [100, 1, 1],
          }}
          transition={{
            delay: 0.2,
            duration: 1,
            ease: "easeInOut",
          }}
          className="row"
          style={{ margin: "0 15px 15px 0" }}
        >
          {listOfTopCards.map((item, index) => (
            <TimeDataListItem
              item={item}
              index={index}
              key={index}
              onClickItem={() => {
                // const newList = [...listOfTimeData];
                // newList.map((_item, _index) => {
                //   if (_index === index) {
                //     _item.isSelected = true;
                //   } else {
                //     _item.isSelected = false;
                //   }
                // });
                // setListOfTimeData(newList);
              }}
            />
          ))}
        </motion.div>
      </div>
      {/* <div className={"dividerHeader"} /> */}
      <motion.div
        style={{ height: "69%" }}
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
        <div className="textTitle">{"Recent Orders"}</div>
        {listOfData.length > 0 ? (
          <AdminDashBoardData style={{ display: "flex" }} pageSize={5} listOrder={listOfData} />
        ) : (
          <div
            style={{ display: "flex", height: "100%" }}
            className="fullCenter"
          >
            <EmptyImage src={emptyImage} alt={emptyImage} />
          </div>
        )}
      </motion.div>

      {/* <div className={"dividerHeader"} /> */}
    </div>
  );
};

const EmptyImage = styled.img`
  width: 250px;
  height: 250px;
`;

export default AdminDashBoard;
