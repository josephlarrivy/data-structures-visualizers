import React, { useEffect, useState } from 'react';
import StackDisplay2 from './StackDisplay2';
import './Stack2.css';

function Stack() {
  const [stack, setStack] = useState([]);
  const [value, setValue] = useState(0);

  const pushToStack = (event) => {
    event.preventDefault();
    setStack([...stack, value]);
    setValue(0);
  };

  const popFromStack = () => {
    const newStack = [...stack];
    newStack.pop();
    setStack(newStack);
  };

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <h1>Stack</h1>

      <div className="stack-display-container">
        <StackDisplay2 stack={stack} />
      </div>
      <div className='horazontal-rule'>
        <hr></hr>
      </div>

      <div className='stack-number-input'>
        <label htmlFor="number-input">Enter a value:</label>
        <input type="number" id="number-input" value={value} onChange={handleValueChange}/>
      </div>
      
      <div className="buttons-container">
        <button onClick={pushToStack} className="button-stack">Push to Stack</button>
        <button className="button-stack" onClick={() => popFromStack()}>
          Pop from Stack
        </button>
      </div>

    </div>
  );
}

export default Stack;
