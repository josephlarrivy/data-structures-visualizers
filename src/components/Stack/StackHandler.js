import React, {useEffect, useState} from "react";
import StackForm from "./StackForm";
import StackVisualizer from "./StackVisualizer";
import StackClass from "./StackClass";

const StackHandler = ({stack, setStack}) => {

  
  const addToStack = (value) => {
    const newStack = new StackClass();
    newStack.items = [...stack.items, value];
    setStack(newStack);
  }

  const popFromStack = () => {
    console.log(stack)
  }


  return (
    <div className="stack-display-container">
      <h1>Stack</h1>
      <StackVisualizer stack={stack}/>
      <StackForm addToStack={addToStack} popFromStack={popFromStack}/>
    </div>
  )
}

export default StackHandler;