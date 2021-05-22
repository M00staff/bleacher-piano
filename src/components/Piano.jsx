import React, { Fragment, useState, useRef } from "react"

export const Piano = () => {
  const [keys, setKeys] = useState([])
  const keyRef = useRef()
  const addKeys = (letter) => {
    setKeys([...keys, letter]);
  };
  const pianoKeys = ["C", "D", "E", "F", "G", "A", "B"]

  return (
    <Fragment>
      <div className="keyWrapper">
        {pianoKeys.map(x => <button ref={keyRef} onClick={() => addKeys(x)}>{x}</button>)}
      </div>
      <div className="controlsWrapper">
        <div className="notes" onClick={() => keyRef.current.focus()}>Play</div>
        <div className="notes">{keys}</div>
        <div className="notes" onClick={() => setKeys([])}>Clear</div>
      </div>
    </Fragment>
  )
}
