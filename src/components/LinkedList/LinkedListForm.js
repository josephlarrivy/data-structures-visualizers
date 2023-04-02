import React, { useEffect, useState } from "react";
import LinkedListVisualizer from "./LinkedListVisualizer";
import Node from "./Node";
import './LinkedListForm.css'

const LinkedListForm = ({list, setList}) => {
  const [value, setValue] = useState("");
  const [index, setIndex] = useState("");
  const [displayNodes, setDisplayNodes] = useState([])
  const [listlength, setListLength] = useState(null)
  const [caption, setCaption] = useState('use form to add nodes')
  const [captionHighlightStyle, setCaptionHighlightStyle] = useState('highlight-off')

  const triggerCaptionHighlight = () => {
    setCaptionHighlightStyle('highlight-on');
    setTimeout(() => {
      setCaptionHighlightStyle('highlight-off');
    }, 2000);
  };


  const handleAdd = (event) => {
    event.preventDefault();
    list.insert(Number(index), Number(value));
    setList(list);
    setValue("");
    setIndex("");
    if (index > list.length-1) {
      setCaption(
        `added: [node: (value: ${value}) (index: ${list.length - 1})]`
      )
    } else {
      setCaption(
        `added: [node: (value: ${value}) (index: ${index})]`
      )
    }
    triggerCaptionHighlight()
  };

  const handleRemove = (event, index) => {
    event.preventDefault();
    list.remove(index);
    setList(list);
    setListLength(list.length)
    const val = event.target.closest('.node-wrapper').querySelector('.value').textContent
    const idx = event.target.closest('.node-wrapper').querySelector('.idx').textContent
    setCaption(
      `removed: [node: (${val}) (${idx})]`
    )
    triggerCaptionHighlight()
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
      <div className={captionHighlightStyle}>
        <p className="caption">{caption}</p>
      </div>
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
