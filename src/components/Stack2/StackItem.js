import React, {useState, useEffect} from "react";
import './StackItem.css'

const StackItem = ({item, index}) => {

  useEffect(() => {
    console.log(index)
  }, [])

  return (
    <div className="item-container">
      <p>{item}</p>
    </div>
  )
}

export default StackItem;