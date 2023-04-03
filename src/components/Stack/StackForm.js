import React, { useState } from "react";

import './StackFrom.css'

const StackForm = ({addToStack, popFromStack, value, setValue}) => {


  const handleSubmit = (e) => {
    e.preventDefault();
    addToStack(value);
    setValue(0);
  }

  return (
    <form className="stack-form" onSubmit={handleSubmit}>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="button-stack" type="submit">Add to Stack</button>
      <button className="button-stack" onClick={popFromStack}>Pop</button>
    </form>
  );
}


export default StackForm;