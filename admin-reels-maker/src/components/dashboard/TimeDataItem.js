import React from 'react';

const TimeDataItem = ({item, index, onClickItem}) => {
  return (
    <div 
      key={index}
      className={item.isSelected ? 'dashCardSelected' : 'dashCard' }
      onClick={onClickItem}
    >
      {item.title}
    </div>
  )
}

export default TimeDataItem;