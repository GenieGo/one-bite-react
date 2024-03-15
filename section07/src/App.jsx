import { useState, useEffect, useRef } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // // vue의 watch, computed와 비슷하게 작동
  // useEffect(() => {
  //   console.log("count", count);
  // }, [count, input]);
  // // 의존성 배열, dependency array, deps

  const isMount = useRef(false);
  // Mount
  useEffect(() => {
    console.log("Mount");
  }, []);
  // Update
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("Update");
  });
  // UnMount
  useEffect(() => {});

  const onClickButton = (value) => {
    setCount(count + value);
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
