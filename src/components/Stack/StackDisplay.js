import React from "react";
import StackForm from "./StackForm";
import StackVisualizer from "./StackVisualizer";

const StackDisplay = () => {


  return (
    <div className="stack-display-container">
      <h1>Stack</h1>
      <StackVisualizer />
      <StackForm />
    </div>
  )
}

export default StackDisplay;