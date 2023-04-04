import React, { useState, useEffect } from "react";
import Queue from './QueueClass'


const QueueDisplay = ({ queue }) => {

  const [array, setArray] = useState(null)

  useEffect(() => {
    const queueAsArray = queue.getAsArray()
    setArray(queueAsArray)
    console.log(queueAsArray)
  }, [queue])






  return (
    <div>
      <p>queue display</p>
      {array && array.map(item => {
        return (
          <p>{item}</p>
        )
      })}
    </div>
  )
}

export default QueueDisplay;