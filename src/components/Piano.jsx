import React, { Fragment, useState, useRef } from "react"

export const Piano = () => {
  const pianoKeys = ["C", "D", "E", "F", "G", "A", "B"]
  const [keys, setKeys] = useState([])
  const keyRef = useRef([])

  const addKeys = (letter) => {
    setKeys([...keys, letter]);
  };

  const fireKeys = () => {
    keys.map((x, i) => (
      setTimeout(() => (
        keyRef.current[x].focus()
      ), 1000 * i)))
  }

  return (
    <Fragment>
      <div className="keyWrapper">
        {pianoKeys.map(x => <button key={x} ref={(e) => keyRef.current[x] = e} onClick={() => addKeys(x)}>{x}</button>)}
      </div>
      <div className="controlsWrapper">
        <div className="notes" onClick={() => fireKeys()}>Play</div>
        <div className="notes">{keys}</div>
        <div className="notes" onClick={() => setKeys([])}>Clear</div>
      </div>
    </Fragment>
  )
}
