import { useState, useEffect } from "react";
import worker_script from "./worker";

const ExpensiveCal = () => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["hey", "this", "is", "cool"];
  const word = words[wordIndex];
  const [len, setLen] = useState(0);

  // worker
  useEffect(() => {
    var myWorker = new Worker(worker_script);
    myWorker.postMessage(word);

    myWorker.onmessage = (e) => {
      setLen(e.data);
    };
    console.log(myWorker);
  }, [word]);

  return (
    <div style={{ padding: "15px" }}>
      <h2>Word Length -SLOW</h2>
      <p>
        "{word}" has {len} letters
      </p>
      <button
        onClick={() => {
          const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
          setWordIndex(next);
        }}
      >
        Next word
      </button>

      <h2>Increment a counter -FAST</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ExpensiveCal;
