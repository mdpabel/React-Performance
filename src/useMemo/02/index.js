/**
 * Note: Don't mistake React's useMemo Hook with React's memo API. While useMemo is used to memoize values, React memo is used to wrap React components to prevent re-renderings.
 * Note: Don't mistake React's useMemo Hook with React's useCallback Hook. While useMemo is used to memoize values, useCallback is used to memoize functions.
 */

import React, { useMemo } from "react";

const users = [
  { id: "a", name: "Robin" },
  { id: "b", name: "Dennis" },
];

const UseMemo2 = () => {
  const [text, setText] = React.useState("");
  const [search, setSearch] = React.useState("");

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleSearch = () => {
    setSearch(text);
  };

  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        console.log("test");
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search]
  );

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleSearch}>
        Search
      </button>

      <List list={filteredUsers} />
    </div>
  );
};

const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const ListItem = ({ item }) => {
  return <li>{item.name}</li>;
};

export default UseMemo2;
