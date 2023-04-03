import React, {useEffect, useState} from "react";
import StackItem from "./StackItem";

const StackDisplay2 = ({ stack }) => {

  const [displayStack, setDisplayStack] = useState(stack)
  
  useEffect(() => {
    const stackAsObjects = []
    if (stack.length === 0) {
      return setDisplayStack(stackAsObjects)
    } else if (stack.length === 1) {
      stackAsObjects.push(
        {
          'head': true,
          'tail': true,
          'value': stack[0],
        }
      )
      return setDisplayStack(stackAsObjects)
    } else if (stack.length === 2) {
      stackAsObjects.push(
        {
          'head': false,
          'tail': true,
          'value': stack[0],
        },
        {
          'head': true,
          'tail': false,
          'value': stack[1],
        }
      )
      return setDisplayStack(stackAsObjects)
    } else {
      stackAsObjects.push(
        {
          'head': false,
          'tail': true,
          'value': stack[0],
        }
      )
      for (let i=1; i<stack.length-1; i++) {
        stackAsObjects.push(
          {
            'head': false,
            'tail': false,
            'value': stack[i],
          }
        )
      }
      stackAsObjects.push(
        {
          'head': true,
          'tail': false,
          'value': stack[stack.length-1],
        }
      )
      return setDisplayStack(stackAsObjects)
    }
  }, [stack])



  return (
    <>
      {displayStack.map((item, index) => (
        <StackItem key={index} item={item} />
      ))}
    </>
  );
};

export default StackDisplay2;
