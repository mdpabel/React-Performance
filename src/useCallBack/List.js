import React, { memo } from "react";
import ListItem from "./ListItem";

let List = ({ list, onRemove }) => {
  console.log("List");

  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </ul>
  );
};

List = memo(List);

export default List;
