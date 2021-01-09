import React, { useRef, useState, useEffect, memo } from "react";

let Count = () => {
  const [count, setCount] = useState(1);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <p>Count : {count}</p>
      <p>Rendered : {renderCount.current}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

Count = memo(Count);

export default Count;
