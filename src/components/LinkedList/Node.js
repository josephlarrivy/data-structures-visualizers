import React, { useState, useEffect } from "react";

import './Node.css'

const Node = ({ value, index, head, tail, next, handleRemove }) => {

  
  return (
    <div className="node-wrapper">
      <p className="node-icon">[node]</p>
      <div className="node">
        <div className='circle'>
          <p>value: {value}</p>
        </div>
        <p>index: {index}</p>
        {/* <hr></hr> */}
        <p
          className="next">
          next: {next !== null ? next : 'null'}
        </p>
      </div>
      <button onClick={(event) => handleRemove(event, index)}>remove</button>
      {head && <p className="head-tail">head</p>}
      {tail && <p className="head-tail">tail</p>}
    </div>
  );
};

export default Node;