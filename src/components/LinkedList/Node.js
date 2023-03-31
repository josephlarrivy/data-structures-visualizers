import React, { useState, useEffect } from "react";

import './Node.css'

const Node = ({ value, index, head, tail, next, handleRemove}) => {

  const [nodeState, setNodeState] = useState("initialize")

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setNodeState("node");
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);


  return (
    <div className="node">
      <div className='circle'>
        <p>value: {value}</p>
      </div>
      <p>index: {index}</p>
      <hr></hr>
      {next && <p>next: {next?next:'null'}</p>}
      {head && <p>head</p>}
      {tail && <p>tail</p>}
    </div>
    
  );
};

export default Node;