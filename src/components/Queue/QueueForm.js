import React, { useEffect, useState } from "react";

const QueueForm = ({ callEnqueue, callDequeue }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value)
    console.log('change, new value:', value)
  }

  const handleAdd = (e) => {
    e.preventDefault();
    callEnqueue(value)
  };

  const handleRemove = (e) => {
    e.preventDefault();
    callDequeue();
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <input type="number" value={value} onChange={handleChange} />
        <button type="submit">Enqueue</button>
      </form>
      <button onClick={handleRemove}>Dequeue</button>
    </div>
  );
};

export default QueueForm;