import React from "react";
import CountButton from "./count";
import NameInput from "./NameInput";

function UnnecessaryRerenders() {
  const [name, setName] = React.useState("");
  const [count, setCount] = React.useState(0);

  const increment = () => setCount((c) => c + 1);

  return (
    <div>
      <div>
        <CountButton count={count} onClick={increment} />
      </div>
      <div>
        <NameInput name={name} onNameChange={setName} />
      </div>
      {name ? <div>{`${name}'s favorite number is ${count}`}</div> : null}
    </div>
  );
}

export default UnnecessaryRerenders;
