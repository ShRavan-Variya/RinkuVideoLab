import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import axios from "axios";
import { useGlobal } from "../../context/globalContext";
import PaymentsItem from "./PaymentsItem";

export default function Payments() {
  const globalContext = useGlobal();
  const userData = globalContext.userData;
  const [listOfPayments, setListOfPayments] = useState([]);

  useEffect(() => {
    moment.locale("en");
    doGetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const doGetData = async () => {
    const userId = userData.user_id;

    await axios
      .get(
        `http://localhost:8080/reelsvideoapis/client/get_projects.php?userId=${userId}`
      )
      .then(function (response) {
        // console.log("response :: " + JSON.stringify(response));

        if (response.data.status === true) {
          const listPayment = response.data.data;
          if (listPayment.length > 0) {
            const time = new Date().getTime();

            const newList = [];
            listPayment.map((item) => {
              const dateTime = moment(item.created_at, "YYYY-MM-DD hh:mm:ss");
              const downLoadTime = dateTime + 2 * 60 * 60 * 1000;
              console.log("date :: " + downLoadTime);
              console.log("time :: " + time);

              if (downLoadTime > time) {
                newList.push({
                  ...item,
                  downLoadTime,
                });
              } else {
                newList.push(item);
              }
            });

            console.log("newList :: " + JSON.stringify(newList));

            setListOfPayments(newList);
          }
        }
      })
      .catch((error) => {
        console.log("====================================");
        console.log("ERR :: " + JSON.stringify(error));
        console.log("====================================");
        // alert(error.response.data.message);
      });
  };

  return (
    <Wrapper className="whiteBg">
      <div class="container centerCardFull">
          <div class="outer-wrapper">
            <div class="table-wrapper">
              <table>
                <thead>
                  <th className="lightColor">Index</th>
                  <th className="lightColor">Project Name</th>
                  <th className="lightColor">Title</th>
                  <th className="lightColor">Payment Date Time</th>
                  <th className="lightColor">Download</th>
                </thead>
                <tbody>
                  {listOfPayments.map((item, index) => (
                    <PaymentsItem item={item} index={index} key={index} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 120px;
  padding-bottom: 150px;
  width: 100%;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;