import React, { useState, useEffect } from "react";
import Node from "./Node";

import './LinkedListVisualizer.css'


const LinkedListVisualizer = ({ list, handleRemove }) => {

  const [storeList, setStoreList] = useState(list)

  useEffect(() => {
    let nodes = list.getNodesAsObjects()
    console.log(nodes)
    console.log(list)
    setStoreList(list)
  }, [list])

  const nodes = list.toArray().map((value, index) => (
    <Node key={index} value={value} handleRemove={handleRemove}/>
  ));


  if (nodes.length === 0) {
    return (
      <div className="nodes-container">
        <p>use form to add nodes</p>
      </div>
    )
  }

  return (
    <div className="nodes-container">

      {list.getNodesAsObjects().map((current, index) => (
        <Node
          key={index}
          value={current.value}
          index={index}
          head={current.head}
          tail={current.tail}
          next={current.next}
          handleRemove={handleRemove}
          />
      )) }
      

    </div>
  );
};

export default LinkedListVisualizer;