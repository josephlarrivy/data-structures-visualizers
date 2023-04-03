import React, { useState } from "react";

import './StackFrom.css'

const StackForm = ({addToStack, popFromStack}) => {

  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addToStack(value);
    setValue('');
  }

  return (
    <form className="stack-form" onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit">Add to Stack</button>
      <button onClick={popFromStack}>Pop</button>
    </form>
  );
}


export default StackForm;