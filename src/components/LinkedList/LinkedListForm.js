import React, { useEffect, useState } from "react";
import LinkedListVisualizer from "./LinkedListVisualizer";
import Node from "./Node";
import './LinkedListForm.css'

const LinkedListForm = ({list, setList}) => {
  const [value, setValue] = useState("");
  const [index, setIndex] = useState("");
  const [displayNodes, setDisplayNodes] = useState([])
  const [listlength, setListLength] = useState(null)


  const handleAdd = (event) => {
    event.preventDefault();
    list.insert(Number(index), Number(value));
    setList(list);
    setValue("");
    setIndex("");
  };

  const handleRemove = (event, index) => {
    event.preventDefault();
    list.remove(index);
    setList(list);
    setListLength(list.length)
  };

  useEffect(() => {
    const nodes = list.toArray().map((value, index) => (
      <li key={index}>
        <p>Node</p>
        <p> index:{index}, value:{value} </p>
        <button onClick={(event) => handleRemove(event, index)}>
          Remove Node
        </button>
      </li>
    ));
    setDisplayNodes(nodes)
    // console.log(nodes)
  }, [value, index, listlength])
  

  return (
    <div>
      <h1>Linked List</h1>
      <LinkedListVisualizer list={list} handleRemove={handleRemove} />
      <form onSubmit={handleAdd}>
        <label>
          Value:
          <input
            type="number"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            required
            max={999}
          />
        </label>
        <label>
          Index:
          <input
            type="number"
            value={index}
            onChange={(event) => setIndex(event.target.value)}
            required
            min="0"
          />
        </label>
        <br></br>
        <button type="submit">Add Node</button>
      </form>
      {/* <ul>{displayNodes}</ul> */}
    </div>
  );
};

export default LinkedListForm;
