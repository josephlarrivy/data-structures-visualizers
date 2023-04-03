import React, {useState, useEffect} from "react";
import StackHandler from "./StackHandler";
import StackClass from "./StackClass";


const StackDisplay = () => {

  const [stack, setStack] = useState(new StackClass());

  useEffect(() => {
    console.log('total reload')
  }, [])


  return (
    <>
      <StackHandler stack={stack} setStack={setStack}/>
    </>
  )
}

export default StackDisplay;