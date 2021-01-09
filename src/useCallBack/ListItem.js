import React, { memo } from "react";

let ListItem = ({ item, onRemove }) => {
  return (
    <li>
      {item.name}
      <button type="button" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </li>
  );
};

ListItem = memo(ListItem);

export default ListItem;
