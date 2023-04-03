import React, { useEffect, useState } from 'react';
import StackDisplay2 from './StackDisplay2'
import './Stack2.css'

function Stack() {
  const [stack, setStack] = useState([]);
  
  const pushToStack = (item) => {
    setStack([...stack, item]);
  };

  const popFromStack = () => {
    const newStack = [...stack];
    newStack.pop();
    setStack(newStack);
  };

  return (
    <div>
      <h1>Stack</h1>
      <div className='stack-display-container'>
        <StackDisplay2 stack={stack} />
      </div> 
      <div className='buttons-container'>
        <button className='button-stack' onClick={() => pushToStack(Math.floor(Math.random() * 100))}>
          Push to Stack
        </button>
        <button className='button-stack' onClick={() => popFromStack()}>Pop from Stack</button>
      </div>
    </div>
  );
}

export default Stack;
