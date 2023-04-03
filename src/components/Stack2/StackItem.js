import React, {useState, useEffect} from "react";
import './StackItem.css'

const StackItem = ({item, index}) => {

  useEffect(() => {
    // console.log(index)
  }, [])

  return (
    <div className="item-container">
      <p className="item-block">value: {item.value}</p>
      {item.head && <p className="stack-head-tail">head</p>}
      {item.tail && <p className="stack-head-tail">tail</p>}
    </div>
  )
}

export default StackItem;