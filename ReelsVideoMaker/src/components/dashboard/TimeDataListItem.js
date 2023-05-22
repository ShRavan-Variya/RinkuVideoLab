import React from 'react';

const TimeDataListItem = ({ item, index, onClickItem }) => {
  return (
    <div key={index} className="col-xs-12 col-sm-3 col-md-3 col-lg-3" style={{ padding: '0' }}>
      <div
        className='dashDataItemCard'
        onClick={onClickItem}
      >
        <div className='divIconDash'>
          {item.icon}
        </div>

        <div style={{padding: '0 15px'}}>
          <div className='titleDashCard'>
            {item.title}
          </div>
          <div className='subTitleDashCard'>
            {item.subTitle}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeDataListItem;