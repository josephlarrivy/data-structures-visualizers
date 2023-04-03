import React, {useEffect} from "react";
import StackItem from "./StackItem";

const StackDisplay2 = ({ stack }) => {
  const reversedStack = stack.slice().reverse();

  // useEffect(() => {
  //   console.log(stack);
  // }, [stack]);

  return (
    <>
      {stack.map((item, index) => (
        <StackItem key={index} item={item} />
      ))}
    </>
  );
};

export default StackDisplay2;
