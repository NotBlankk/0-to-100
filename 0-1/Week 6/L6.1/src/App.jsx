import "./App.css";
import { Header } from "../components/Header";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("Title 1");
  function changeTitle() {
    setTitle("Ttile " + Math.random());
  }
  return (
    <>
      <button onClick={changeTitle}>Press</button>
      <Headers title={title} />
      <Headers title="Second Title" />
    </>
  );
}
function Headers({ title }) {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
}

export default App;
