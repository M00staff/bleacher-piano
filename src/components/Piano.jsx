import React, { Fragment, useState, useRef } from "react"

export const Piano = () => {
  const pianoKeys = ["C", "D", "E", "F", "G", "A", "B"]
  const [keys, setKeys] = useState([])
  const [inputKeys, setInputKeys] = useState("")
  const [errors, setErrors] = useState("")
  const keyRef = useRef([])

  const addKeys = (letter, event) => {
    event.target.classList.add("clickedButton")
    setKeys([...keys, letter]);
  };

  const clearKeys = () => {
    setKeys([])
    setInputKeys("")
    setErrors("")
  }

  const validateInput = () => {
    [...inputKeys.toUpperCase()].forEach((x, i) => {
      if (i % 2 === 0) {
        if (pianoKeys.includes(x)) {
          setTimeout(() => (
            keyRef.current[x].click()
          ), 1000 * i)
        } else {
          console.error("ERROR - key must exist in piano keys");
          setErrors("key must exist in piano keys")
        }
      }
      else {
        if (x !== ",") {
          console.error("ERROR - needs to be comma delimited");
          setErrors("needs to be comma delimited")
        }
      }
    });
  }

  return (
    <Fragment>
      <div className="keyWrapper">
        {pianoKeys.map(x =>
          <button
            className="keyButton"
            key={x}
            ref={(e) => keyRef.current[x] = e}
            onClick={(e) => addKeys(x, e)}
            onAnimationEnd={(e) => e.target.classList.remove("clickedButton")}
          >
            {x}
          </button>)}
      </div>
      <div className="controlsWrapper">
        <div className="notes">
          {keys.length ? keys.join() : null}
        </div>
        <div className="notes" onClick={() => clearKeys([])}>Clear</div>
      </div>
      <div className="controlsWrapper">
        <form>
          <input type="text" name="keys" value={inputKeys} onChange={(e) => setInputKeys(e.target.value)} />
          <input type="button" value="Play" onClick={() => validateInput()} />
        </form>
      </div>
      <div>
        {errors ?
          <div className="errorWrapper">
            <span className="error">{errors}</span>
            <button className="errorButton" onClick={() => setErrors("")}>  X  </button>
          </div> : null
        }
      </div>
    </Fragment>
  )
}
