import React, {useState, useEffect} from "react";
import './Queue.css'


const QueueDisplayExplainer = ({array}) => {

  const [spacers, setSpacers] = useState([0])
  const [numSpacers, setNumSpacers] = useState(1)
  const [enqueueAction, setEnqueueAction] = useState('enqueue-dequeue-off')
  const [dequeueAction, setDequeueAction] = useState('enqueue-dequeue-off')

  useEffect(() => {
    if (array.length<1) {
      setSpacers([0])
    } else {
      setSpacers(array)
    }
    detectAddOrSubtract(array)
  }, [array])

  const detectAddOrSubtract = () => {
    if (array.length>numSpacers) {
      setEnqueueAction('enqueue-dequeue-flash')
      setNumSpacers(array.length)
      setTimeout(resetAdd, 1000);
    } else if (array.length<numSpacers) {
      setDequeueAction('enqueue-dequeue-flash')
      setNumSpacers(array.length)
      setTimeout(resetSubtract, 1000);
    }
  }

  const resetAdd = () => {
    setEnqueueAction('enqueue-dequeue-off')
  }

  const resetSubtract = () => {
    setDequeueAction('enqueue-dequeue-off')
  }


  return (
    <div id="queue-explainer">
      <div id="back-of-queue-explainer">
        <p>Click 'Enqueue' to add items to the back of the queue</p>
        <div id="back-arrow"></div>
        <p id={enqueueAction}>Add</p>
      </div>

      {spacers.map(item => {
        return (
          <div className="queue-explainer-spacer">
            <p></p>
          </div>
        )
      })}

      <div id="front-of-queue-explainer">
        <p>Click 'Dequeue' to remove items from the front of the queue</p>
        <div id="front-arrow"></div>
        <p id={dequeueAction}>Subtract</p>
      </div>
    </div>
  )
}

export default QueueDisplayExplainer;