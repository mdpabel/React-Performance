import React, { memo } from "react";

let Text = ({ text }) => {
  return <div>{text}</div>;
};

Text = memo(Text);

export default Text;
