import React, {useEffect, useState} from "react";
import StackForm from "./StackForm";
import StackVisualizer from "./StackVisualizer";
import StackClass from "./StackClass";

const StackDisplay = () => {

  const [stack, setStack] = useState(null);

  useEffect(() => {
    setStack(new StackClass())
  }, [])

  const addToStack = (value) => {
    const newStack = stack.push(value)
    setStack(newStack);
  }

  // const popFromStack = () => {
  //   setStack(stack.pop())
  // }

  return (
    <div className="stack-display-container">
      <h1>Stack</h1>
      <StackVisualizer stack={stack}/>
      <StackForm addToStack={addToStack}/>
    </div>
  )
}

export default StackDisplay;