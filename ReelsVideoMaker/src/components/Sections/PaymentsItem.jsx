import React, { useState } from "react";
import styled from "styled-components";

export default function PaymentsItem(props) {
  // const [showBottomView, setShowBottomView] = useState(false);

  let payment;
  if (props.item.paymentId === 0) {
    payment = "Success";
  } else if (props.item.paymentId === 1) {
    payment = "In progress";
  } else if (props.item.paymentId === 3) {
    payment = "Rejected";
  } else {
    payment = "Pending";
  }

  // const toggleView = () => {
  //   setShowBottomView(!showBottomView);
  // };

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
            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 row">
              <h4>{props.index + 1}.&nbsp;&nbsp;</h4>
              <h4>{props.item.projectName}</h4>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <h4>{props.item.createdAt}</h4>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              <h4>{payment}</h4>
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
