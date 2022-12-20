import React from "react";
import userImage from "../../assets/img/userImage.jpg";

export default function OrderListData(props) {

  const orderItem = (item, index) => {
    return (
      <tr key={item.id} style={{margin: '10px 0'}}>
        <td className="imageTh">
          <img className="orderImage" src={userImage} alt={userImage} />
        </td>
        <td className="tdTitle" style={{ width: '180px' }}>{item.id}</td>
        <td className="tdTitle" style={{ width: '240px' }}>{'User Name'}</td>
        <td className="tdTitle" style={{ width: '250px' }}>{item.projectName}</td>
        <td className="tdTitle" style={{ width: '150px' }}>{item.dataSize}</td>
        <td className="tdTitle" style={{ width: '150px' }}>{item.payment}</td>
        <td className="tdTitle" style={{ width: '210px' }}>{item.orderDateTime}</td>
        <td className="tdTitle" style={{ width: '210px' }}>{'In progress'}</td>
      </tr>
    );
  }

  return (
    <table className="flex" style={{height: '87%', width: '100%', overflowY: 'hidden'}}>
      <div className='table-wrapper'>
        <tbody>
          <tr className='table-header'>
            <th className='imageTh' />
            <th className='thTitle'>ID</th>
            <th className='thTitle'>User Name</th>
            <th className='thTitle'>Project Name</th>
            <th className='thTitle'>Data Size</th>
            <th className='thTitle'>Payment</th>
            <th className='thTitle'>Order Date Time</th>
            <th className='thTitle'>Completed</th>
          </tr>
          {props.listOrder.map(orderItem)}
        </tbody>
      </div>
    </table>
  )

}
