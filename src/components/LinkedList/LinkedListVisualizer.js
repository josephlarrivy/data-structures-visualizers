import React, { useState, useEffect } from "react";
import Node from "./Node";
import Arrow from "./Arrow";

import './LinkedListVisualizer.css'


const LinkedListVisualizer = ({ list, handleRemove }) => {

  const [arrows, setArrows] = useState(null)

  useEffect(() => {
    let nodes = list.getNodesAsObjects()
    console.log(nodes)
    console.log(list)
  }, [list])

  function createArrowBeginEnd() {
    function selectParagraphs() {
      const nextParagraphs = document.querySelectorAll(".next");
      const positions = [];

      nextParagraphs.forEach((paragraph) => {
        const rect = paragraph.getBoundingClientRect();
        const beginX = rect.left + window.pageXOffset + rect.width;
        const beginY = rect.top + window.pageYOffset;
        positions.push({ beginX, beginY });
      });

      return positions;
    }

    function selectNextNodes() {
      const circleDivs = document.querySelectorAll(".circle");
      const positions = [];

      circleDivs.forEach((circle) => {
        const rect = circle.getBoundingClientRect();
        const endX = rect.left + window.pageXOffset;
        const endY = rect.top + window.pageYOffset + rect.height / 2;
        positions.push({ endX, endY });
      });

      return positions;
    }

    const beginPoints = selectParagraphs()
    const endPoints = selectNextNodes()

    // console.log([ beginPoints, endPoints ])
    // setArrows([ beginPoints, endPoints ])
    console.log(beginPoints)
    console.log(endPoints)

    if (list.length > 1) {
      for (let i = 0; i <= list.length-1; i++) {
        let arrow = {
          'beginX': beginPoints[i].beginX,
          'beginY': beginPoints[i].beginY,
          'endX': endPoints[i].endX,
          'endY': endPoints[i].endY
        }
        console.log(arrow)
      }
    }
  }
  


  const nodes = list.toArray().map((value, index) => (
    <Node key={index} value={value} handleRemove={handleRemove}/>
  ));

  

  if (nodes.length === 0) {
    return (
      <div className="nodes-container">
        <p>use form to add nodes</p>
      </div>
    )
  }

  return (
    <div className="nodes-container">

      {list.getNodesAsObjects().map((current, index) => (
        <Node
          key={index}
          value={current.value}
          index={index}
          head={current.head}
          tail={current.tail}
          next={current.next}
          handleRemove={handleRemove}
          createArrowBeginEnd={createArrowBeginEnd}
          />
      )) }
      {/* <Arrow beginX={710.10} beginY={245.43} endX={258.88} endY={145.43} /> */}
    </div>
  );
};

export default LinkedListVisualizer;