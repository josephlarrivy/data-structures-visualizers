import React, { useEffect } from "react";
import Node from "./Node";

import './LinkedListVisualizer.css'

const LinkedListVisualizer = ({ list, handleRemove }) => {


  useEffect(() => {
    let nodes = list.getNodesAsObjects()
    console.log(nodes)
    console.log(list)
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


  // return (
  //   <div className="nodes-container">
  //     {nodes}
  //   </div>
  // );


  return (
    <div className="nodes-container">
      {list.getNodesAsObjects().map((current, index) => (
        <Node
          key={index}
          value={current.value}
          head={current.head}
          tail={current.tail}
          next={current.next}
          />
      )) }
    </div>
  );
};

export default LinkedListVisualizer;