import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [inpValue, setInpValue] = useState(1);

  let count = useMemo(() => {
    let Finalcount = 0;
    for (let i = 1; i <= inpValue; i++) {
      Finalcount = Finalcount + i;
    }
    return Finalcount;
  }, [inpValue]);

  return (
    <div>
      <input
        onChange={(e) => {
          console.log(e.target.valueAsDate);
          setInpValue(e.target.value);
        }}
        placeholder="Lol"
      ></input>
      <br />
      Sum of 1 to {inpValue} is {count}
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter {counter}
      </button>
    </div>
  );
}

export default App;
