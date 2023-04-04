import React, {useState, useEffect} from "react";
import './StackItem.css'

const StackItem = ({item, index}) => {

  useEffect(() => {
    // console.log(index)
  }, [])

  return (
    <div className="item-container">
      <p className="item-block">value: {item.value}</p>
      {item.top && <p className="stack-top-bottom">top</p>}
      {item.bottom && <p className="stack-top-bottom">bottom</p>}
    </div>
  )
}

export default StackItem;