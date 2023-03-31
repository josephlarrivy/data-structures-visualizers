import React, {useState, useEffect} from "react";
import LinkedListForm from "./LinkedListForm";
import LinkedList from "./LinkedList";


const LinkedListDisplay = () => {

  const [list, setList] = useState(new LinkedList());

  useEffect(() => {
    console.log(list)
  }, [list])
  

  return (
    <div>
      <LinkedListForm list={list} setList={setList}/>
    </div>
  )
}

export default LinkedListDisplay;