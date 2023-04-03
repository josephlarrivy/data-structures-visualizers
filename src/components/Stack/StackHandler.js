import React, {useEffect, useState} from "react";
import StackForm from "./StackForm";
import StackVisualizer from "./StackVisualizer";
import StackClass from "./StackClass";

const StackHandler = ({stack, setStack}) => {

  const [value, setValue] = useState('');
  
  const addToStack = (value) => {
    const newStack = new StackClass();
    newStack.items = [...stack.items, value];
    setStack(newStack);
    console.log(stack.getFullStack())
  }

  const popFromStack = () => {
    const poppedValue = stack.pop();
    console.log(poppedValue);

    const newStack = new StackClass();
    newStack.items = stack.items;
    console.log(newStack.getFullStack());
    setStack(newStack)
  }


  return (
    <div className="stack-display-container">
      <h1>Stack</h1>
      <StackVisualizer stack={stack}/>
      <StackForm addToStack={addToStack} popFromStack={popFromStack} value={value} setValue={setValue}/>
    </div>
  )
}

export default StackHandler;