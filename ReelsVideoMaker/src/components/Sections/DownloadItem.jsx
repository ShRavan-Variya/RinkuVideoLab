import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function DownloadItem(props) {
  // const [showBottomView, setShowBottomView] = useState(false);
  const [textTimeLeft, setTextTimeLeft] = useState(false);

  useEffect(() => {
    if (props.item.downloadId !== 0) {
      const TimerFunc = setInterval(function () {
        const downloadTime = new Date(props.item.downloadAt).getTime();
        const now = new Date().getTime();
        const timeLeft = downloadTime - now;
        const hours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        const time = `${hours}:${minutes}:${seconds}`;

        setTextTimeLeft(time);

        if (timeLeft < 0) {
          setTextTimeLeft('0:00:00');
          clearInterval(TimerFunc);
        }
      }, 1000);
    } else {
      setTextTimeLeft("0:00:00");
    }
  }, []);

  let createDateTime = "";
  const dateCreate = new Date(props.item.createdAt).toLocaleDateString();
  const timeCreate = new Date(props.item.createdAt).toLocaleTimeString();
  createDateTime = dateCreate + " " + timeCreate;

  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" key={props.index}>
      <BurderWrapper
        className="col-xs-12 col-sm-12 col-md-12 col-lg-12"
        onClick={() => {
          // toggleView();
        }}
      >
        <div class="card_box">
          <ListTopWrapper className="col-xs-12 col-sm-12 col-md-12 col-lg-12 row">
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 row">
              <h4>{props.index + 1}.&nbsp;&nbsp;</h4>
              <h4>{props.item.projectName}</h4>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <h4>{createDateTime}</h4>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              <h4>{textTimeLeft}</h4>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              <h4>{textTimeLeft === '0:00:00' ? 'Download' : 'Processing'}</h4>
            </div>
          </ListTopWrapper>
          {/* {showBottomView ? (
            <ListBottomWrapper className="col-xs-12 col-sm-12 col-md-12 col-lg-12 row">
              <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 row">
                <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
                <h4>{props.item.projectName}</h4>
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <h4>{props.item.createdAt}</h4>
              </div>
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <h4>{payment}</h4>
              </div>
            </ListBottomWrapper>
          ) : null} */}
        </div>
      </BurderWrapper>
    </div>
  );
}

const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  width: 100%;
`;
const ListTopWrapper = styled.li`
  margin-left: 25px;
  margin-right: 25px;
  padding-top: 25px;
  padding-bottom: 25px;
`;
// const ListBottomWrapper = styled.li`
//   margin-left: 25px;
//   margin-right: 25px;
//   padding-bottom: 25px;
// `;
