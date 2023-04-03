import React, { useEffect, useState } from "react";


const StackVisualizer = ({stack}) => {

  const [displayStack, setDisplayStack] = useState(stack)

  useEffect(() => {
    setDisplayStack(stack)
    if (displayStack.items) {
      console.log(displayStack.items.length)
    }
  }, [stack])

  return (
    <div className="stack-visualizer">
      <p>stack visualizer</p>
      <ul>
        {displayStack.items.length>=1
          ? <p>displayStack</p>
          : <p>test</p>
        }
      </ul>
    </div>
  )
}

export default StackVisualizer;