import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function PaymentsItem(props) {
  console.log("props :: " + JSON.stringify(props));

  const downLoadTime = props.item.downLoadTime;

  if (downLoadTime) {
  }

  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{props.item.proj_name}</td>
      <td>{props.item.title}</td>
      <td>{props.item.created_at}</td>

      {downLoadTime ? (
        <td className="purpleColor">{downLoadTime}</td>
      ) : (
        <td>
          <Link to="/Downloads" smooth={true} className={"purpleColor"}>
            Download
          </Link>
        </td>
      )}
    </tr>
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
