import React, { useState, useEffect } from "react";
import Node from "./Node";

import './LinkedListVisualizer.css'


const LinkedListVisualizer = ({ list, handleRemove }) => {

  const [storeList, setStoreList] = useState(list)

  useEffect(() => {
    setStoreList(list)
  }, [list])

  if (list.length === 0) {
    return (
      <div className="nodes-container">
        <p></p>
      </div>
    )
  }

  return (
    <div className="nodes-container">

      {list.getNodesAsObjects().map((current, index) => (
        <>
          <Node
            key={index}
            value={current.value}
            index={index}
            head={current.head}
            tail={current.tail}
            next={current.next}
            handleRemove={handleRemove}
          />
          {current.next!=null
            ?<div className="link">
              <p>link</p>
              <div className="arrow"></div>
            </div>
            :null}
        </>
      ))}
    </div>
  );
};

export default LinkedListVisualizer;