import React from "react";

import './Node.css'

const Node = ({ value }) => {
  return (
    <div
      className="node"
    >
      {value}
    </div>
  );
};

export default Node;