import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { OrderListData, TimeDataItem, TimeDataListItem } from "../../../../components";
import { IcSettings } from "../../../../assets/svg";

const ClientScreen = () => {
  const [listOfTimeData, setListOfTimeData] = useState([]);
  const [listOfTopCards, setListOfTopCards] = useState([]);
  const [listOfOrders, setListOfOrders] = useState([]);

  useEffect(() => {
    getTimeData();
    getDataTopCards();
    getOrders();
  }, []);

  const getTimeData = () => {
    const newList = [];
    newList.push({ title: "Today", isSelected: true });
    newList.push({ title: "Week" });
    newList.push({ title: "Month" });
    newList.push({ title: "Year" });
    setListOfTimeData(newList);
  };

  const getDataTopCards = () => {
    const newList = [];
    newList.push({
      title: "Total Projects",
      subTitle: "5000",
      icon: <IcSettings height={40} width={40} />,
    });
    newList.push({
      title: "Completed Projects",
      subTitle: "4800",
      icon: <IcSettings height={40} width={40} />,
    });
    newList.push({
      title: "Pending Projects",
      subTitle: "5000",
      icon: <IcSettings height={40} width={40} />,
    });
    newList.push({
      title: "Working Projects",
      subTitle: "5000",
      icon: <IcSettings height={40} width={40} />,
    });
    setListOfTopCards(newList);
  };

  const getOrders = () => {
    const newList = [];
    for (let index = 0; index < 10; index++) {
      newList.push({
        id: 'ABABA051051',
        projectName: 'Project 01',
        dataSize: '250Mb',
        payment: '250Rs',
        orderDateTime: 'AAAA',
        completed: true,
      })
    }
    setListOfOrders(newList);
  }

  return (
    <div className="main-container flex" style={{ height: '100%' }}>
      <div style={{ height: '20%' }}>
        <div className="dashCard-row" >
          {listOfTimeData.map((item, index) => (
            <TimeDataItem
              item={item}
              index={index}
              onClickItem={() => {
                const newList = [...listOfTimeData];
                newList.map((_item, _index) => {
                  if (_index === index) {
                    _item.isSelected = true;
                  } else {
                    _item.isSelected = false;
                  }
                });
                setListOfTimeData(newList);
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
          style={{ margin: '0 15px 0 0' }}
        >
          {listOfTopCards.map((item, index) => (
            <TimeDataListItem
              item={item}
              index={index}
              onClickItem={() => {
                const newList = [...listOfTimeData];
                newList.map((_item, _index) => {
                  if (_index === index) {
                    _item.isSelected = true;
                  } else {
                    _item.isSelected = false;
                  }
                });
                setListOfTimeData(newList);
              }}
            />
          ))}
        </motion.div>
      </div>
      {/* <div className={"dividerHeader"} /> */}
      <motion.div
        style={{ height: '74%' }}
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
        <OrderListData style={{display: 'flex'}} listOrder={listOfOrders} />
      </motion.div>

      {/* <div className={"dividerHeader"} /> */}
    </div >
  );
};

export default ClientScreen;
