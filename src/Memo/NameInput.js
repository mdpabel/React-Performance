import React, { memo } from "react";

function NameInput({ name, onNameChange }) {
  return (
    <label>
      Name:{" "}
      <input value={name} onChange={(e) => onNameChange(e.target.value)} />
    </label>
  );
}

NameInput = memo(NameInput);

export default NameInput;
