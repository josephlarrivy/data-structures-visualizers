import React, {useState, useEffect} from "react";
import './Queue.css'


const QueueDisplayExplainer = ({array}) => {

  const [spacers, setSpacers] = useState([0])
  const [numSpacers, setNumSpacers] = useState(1)

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
      console.log('added')
      setNumSpacers(array.length)
    } else if (array.length<numSpacers) {
      console.log('subtracted')
      setNumSpacers(array.length)
    }
  }

  return (
    <div id="queue-explainer">
      <div id="back-of-queue-explainer">
        <p>Click 'Enqueue' to add items to the back of the queue</p>
        <div id="back-arrow"></div>
        <p id="enqueue-action">test</p>
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
        <p id="dequque-action">test</p>
      </div>
    </div>
  )
}

export default QueueDisplayExplainer;