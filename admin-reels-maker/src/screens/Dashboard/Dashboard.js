import React, { useEffect, useState } from "react";
import { TimeDataItem } from "../../components";
import { IcHome } from "../../assets/svg";

const Dashboard = () => {
  const [listOfTimeData, setListOfTimeData] = useState([]);
  const [listOfTopCards, setListOfTopCards] = useState([]);

  useEffect(() => {
    getTimeData();
    getDataTopCards();
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
      title: "Total Revenue",
      subTitle: "250000",
      icon: <IcHome height={22} width={22} />,
    });
    newList.push({
      title: "Total Orders",
      subTitle: "5000",
      icon: <IcHome height={22} width={22} />,
    });
    newList.push({
      title: "Completed Orders",
      subTitle: "4800",
      icon: <IcHome height={22} width={22} />,
    });
    newList.push({
      title: "Total Users",
      subTitle: "350",
      icon: <IcHome height={22} width={22} />,
    });
    newList.push({
      title: "Pending Orders",
      subTitle: "5000",
      icon: <IcHome height={22} width={22} />,
    });
    newList.push({
      title: "Working Orders",
      subTitle: "5000",
      icon: <IcHome height={22} width={22} />,
    });
    setListOfTopCards(newList);
  };

  return (
    <div className="main-container">
      <div>
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
      <div className={"dividerHeader"} />
    </div>
  );
};

export default Dashboard;
