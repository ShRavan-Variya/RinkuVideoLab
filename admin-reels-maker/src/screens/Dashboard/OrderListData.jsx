import React from "react";
import userImage from "../../assets/img/userImage.jpg";

export default function OrderListData(props) {
  console.log("props :: " + JSON.stringify(props));

  const orderItem = (item, index) => {
    return (
      <tr key={item.id}>
        <td className="imageTh">
          <img className="orderImage" src={userImage} alt={userImage} />
        </td>
        <td className="tdTitle" style={{ width: '180px' }}>{item.id}</td>
        <td className="tdTitle" style={{ width: '230px' }}>{'User Name'}</td>
        <td className="tdTitle" style={{ width: '230px' }}>{item.projectName}</td>
        <td className="tdTitle" style={{ width: '150px' }}>{item.dataSize}</td>
        <td className="tdTitle" style={{ width: '150px' }}>{item.payment}</td>
        <td className="tdTitle" style={{ width: '210px' }}>{item.orderDateTime}</td>
        <td className="tdTitle" style={{ width: '210px' }}>{'In progress'}</td>
      </tr>
    );
  }

  return (
    <table>
      <tbody>
        <tr>
          <th className="imageTh" />
          <th className="thTitle">ID</th>
          <th className="thTitle">User Name</th>
          <th className="thTitle">Project Name</th>
          <th className="thTitle">Data Size</th>
          <th className="thTitle">Payment</th>
          <th className="thTitle">Order Date Time</th>
          <th className="thTitle">Completed</th>
        </tr>
        {props.listOrder.map(orderItem)}
      </tbody>
    </table>
  )

}
