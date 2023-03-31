import React, { useState, useEffect } from "react";

import './Node.css'

const Node = ({ key, value, head, tail, next }) => {

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
    <div className='node'>
      {value}
    </div>
  );
};

export default Node;