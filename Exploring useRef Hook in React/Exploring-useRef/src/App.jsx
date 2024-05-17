import "./App.css";
import { useState, useRef, useEffect } from "react";

function App() {
  let inputRef = useRef(null);
  let inputRef1 = useRef(null);
  let displayRef = useRef(null);
  let colorRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleChange() {
    displayRef.current.innerText = inputRef1.current.value;
  }

  function handleColor() {
    colorRef.current.style.backgroundColor = randomColor();
  }

  function randomColor() {
    let character = "ABCDEF0123456789";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += character[Math.floor(Math.random() * character.length)];
    }

    return color;
  }

  return (
    <div>
      <div>
        <h1>Creating a Focusable Input Field</h1>
        <input
          ref={inputRef}
          type="text"
          id="InputField"
          placeholder="Enter Text"
        />
        <hr />
      </div>

      <div>
        <h1>Managing Uncontrolled Components</h1>
        <input type="text" ref={inputRef1} onInput={handleChange} />

        <div ref={displayRef}></div>

        <hr />
      </div>

      <div>
        <h1>Interacting with DOM Elements</h1>

        <div id="spanStyle" onClick={handleColor} ref={colorRef}>
          <p>Click Me To Change Color</p>
        </div>

        <hr />
      </div>
    </div>
  );
}

export default App;
