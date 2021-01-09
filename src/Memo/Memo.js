import React, { useState } from "react";
import Count from "./Count";
import Text from "./Text";

const Memo = () => {
  const [text, setText] = useState("");
  const [state, setState] = useState("");

  const handleClick = () => {
    setState(text);
  };

  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} type="text" id="" />
      <button onClick={handleClick}>Submit</button>
      <Text text={state} />
      <Count />
    </div>
  );
};

export default Memo;
