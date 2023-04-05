import React, { useState, useEffect } from "react";

import './Queue.css'
import QueueDisplayExplainer from "./QueueDisplayExplainer";


const QueueDisplay = ({ queue }) => {

  const [array, setArray] = useState([])

  useEffect(() => {
    const queueAsArray = queue.getAsReverseArray()
    setArray(queueAsArray)
  }, [queue])


  return (
    <div id="queue-display-container-inner">
      <QueueDisplayExplainer array={array} />
      <div id="queue-items-container">
        {array && array.map(item => {
          return (
            <div className="queue-diaplay-item-wrapper">
              <p>{item}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default QueueDisplay;