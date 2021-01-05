import React, { memo } from "react";

function CountButton({ count, onClick }) {
  return <button onClick={onClick}>{count}</button>;
}

CountButton = memo(CountButton);

export default CountButton;
