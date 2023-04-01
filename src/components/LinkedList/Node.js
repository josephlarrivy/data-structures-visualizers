import React, { useState, useEffect } from "react";

import './Node.css'

const Node = ({ value, index, head, tail, next, handleRemove, createArrowBeginEnd }) => {

  useEffect(() => {
    createArrowBeginEnd()
  }, []);

  const nodeHandleRemove = (event, index) => {
    handleRemove(event, index)
  }


  return (
    <div className="node">
      <div className='circle'>
        <p>value: {value}</p>
      </div>
      <p>index: {index}</p>
      <hr></hr>
      <p className="next">next: {next!==null?next:'null'}</p>
      {head && <p>head</p>}
      {tail && <p>tail</p>}
      {next&&
        <button onClick={nodeHandleRemove}>remove</button>
      }

    </div>
    
  );
};

export default Node;