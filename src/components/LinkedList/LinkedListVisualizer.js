import React, { useEffect } from "react";
import Node from "./Node";

import './LinkedListVisualizer.css'

const LinkedListVisualizer = ({ list }) => {


  useEffect(() => {
    console.log(list)
  }, [list])


  const nodes = list.toArray().map((value, index) => (
    <Node key={index} value={value} />
  ));

  return (
    <div className="nodes-container">
      {nodes}
    </div>
  );
};

export default LinkedListVisualizer;