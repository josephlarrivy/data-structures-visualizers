import React, { useEffect, useState } from "react";
import StackClass from "./StackClass";


const StackVisualizer = ({stack}) => {

  const [displayStack, setDisplayStack] = useState(stack)

  useEffect(() => {
    // console.log(displayStack)
  }, [stack])

  return (
    <div className="stack-visualizer">
      <p>stack visualizer</p>
      <ul>
        {/* {displayStack.items.length>=1
          ? <p>displayStack</p>
          : <p>test</p>
        } */}
      </ul>
    </div>
  )
}

export default StackVisualizer;