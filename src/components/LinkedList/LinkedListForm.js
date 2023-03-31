import React, { useEffect, useState } from "react";
import LinkedList from "./LinkedList";
import LinkedListVisualizer from "./LinkedListVisualizer";

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
    // event.preventDefault();1
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
      <LinkedListVisualizer list={list} setList={setList} handleRemove={handleRemove} />
      <h1>Linked List Form</h1>
      <form onSubmit={handleAdd}>
        <label>
          Value:
          <input
            type="number"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            required
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
        <button type="submit">Add Node</button>
      </form>
      <ul>{displayNodes}</ul>
    </div>
  );
};

export default LinkedListForm;
