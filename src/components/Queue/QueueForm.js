import React, { useEffect, useState } from "react";

import './Queue.css'


const QueueForm = ({ callEnqueue, callDequeue }) => {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleAdd = (e) => {
    e.preventDefault();
    callEnqueue(value)
    setValue(0)
  };

  const handleRemove = (e) => {
    e.preventDefault();
    callDequeue();
  };

  return (
    <div id="queue-form-container">

        <div id="queue-number-input-container">
        <b>Enter a value:</b>
        <br></br>
          <input id='queue-number-input' type="number" value={value} onChange={handleChange} max={100} min={-99} />
        </div>
        
        <div id="queue-buttons-container">
          <button onClick={handleAdd} type="submit">Enqueue</button>
          <button onClick={handleRemove}>Dequeue</button>
        </div>  

    </div>
  );
};

export default QueueForm;