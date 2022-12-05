import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function PaymentsItem(props) {
  const downLoadTime = props.item.downLoadTime;

  if (downLoadTime) {
  }

  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" key={props.index}>
      <BurderWrapper
        onClick={() => {
          // toggleView();
        }}
      >
        <table className="table-layout:fixed">
        <div class="card_box">
          <ListTopWrapper className="row ">
            <DivSingle className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
              <h4>{props.index + 1}</h4>
            </DivSingle>
            <DivWrapper className="col-xs-5 col-sm-4 col-md-3 col-lg-3">
              <h4>{props.item.proj_name}</h4>
            </DivWrapper>
            <DivWrapper className="col-xs-5 col-sm-4 col-md-3 col-lg-4">
              <h4>{props.item.title}</h4>
            </DivWrapper>
            <DivWrapperEnd className="col-xs-8 col-sm-3 col-md-3 col-lg-2 textRight">
              <h4>{props.item.created_at}</h4>
            </DivWrapperEnd>
            <DivWrapperEnd className="col-xs-4 col-sm-12 col-md-2 col-lg-2 textRight">
              {downLoadTime ? (
                <h4>{downLoadTime}</h4>
              ) : (
                <Link
                style={{ padding: "10px 15px" }}
                to="/Upload"
                smooth={true}
                className={"darkColor"}
              >
                Download
              </Link>
              )}
            </DivWrapperEnd>
          </ListTopWrapper>
        </div>
        </table>
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
  ${"" /* height: 70px; */}
  margin-left: 5px;
  margin-right: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: center;
  text-align: center;
`;
const DivSingle = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
`;
const DivWrapper = styled.div`
  justify-content: center;
  text-align: left;
  padding-top: 5px;
  padding-bottom: 5px;
`;
const DivWrapperEnd = styled.div`
  justify-content: center;
  text-align: right;
  padding-top: 5px;
  padding-bottom: 5px;
  @media only screen and (max-width: 55em) {
    justify-content: right;
    text-align: right;
  }
`;
