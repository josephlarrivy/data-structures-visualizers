import React, { useState, useEffect} from "react";
import QueueForm from "./QueueForm";
import QueueDisplay from "./QueueDisplay";
import Queue from './QueueClass'

import './Queue.css'

const QueueComponent = () => {

  const [queue, setQueue] = useState(new Queue());

  const callEnqueue = (item) => {
    const newQueue = new Queue();
    const queueAsArray = queue.getAsArray()
    for (let val of queueAsArray) {
      newQueue.enqueue(val)
    }
    newQueue.enqueue(item);
    setQueue(newQueue);
  }

  const callDequeue = () => {
    const newQueue = new Queue();
    const queueAsArray = queue.getAsArray()
    for (let val of queueAsArray) {
      newQueue.enqueue(val)
    }
    newQueue.dequeue();
    setQueue(newQueue);
  }

  return (
    <div id="queue-container">
      <h1>Queue</h1>
      <div id="queue-display-container-outer">
        <QueueDisplay queue={queue}/>
      </div>
      <div id="queue-form-container-main">
        <QueueForm callEnqueue={callEnqueue} callDequeue={callDequeue}/>
      </div>
    </div>
  )
}

export default QueueComponent;