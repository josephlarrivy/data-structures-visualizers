import React, {useState, useEffect} from "react";
import LinkedListForm from "./LinkedListForm";
import LinkedList from "./LinkedList";

import './LinkedListDisplay.css'

const LinkedListDisplay = () => {

  const [list, setList] = useState(new LinkedList());

  return (
    <div className="linkedlist-display">
      <LinkedListForm list={list} setList={setList}/>
    </div>
  )
}


export default LinkedListDisplay;