// useCallback is used to memoize functions, useMemo is used to memoize values.
// useCallback is used to memoize functions, React memo is used to wrap React components to prevent re-renderings.
import React, { useCallback } from "react";
import List from "./List";

const UseCallBack = () => {
  console.log("UseCallBack");

  const [users, setUsers] = React.useState([]);

  const [text, setText] = React.useState("");

  const handleText = (event) => {
    setText(event.target.value);
  };
  // useCallback is used to memoize functions, useMemo is used to memoize values.
  const handleAddUser = () => {
    setUsers(users.concat({ id: Math.random(), name: text }));
  };

  const handleRemove = useCallback(
    (id) => {
      setUsers(users.filter((user) => user.id !== id));
    },
    [users]
  );

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleAddUser}>
        Add User
      </button>

      <List list={users} onRemove={handleRemove} />
    </div>
  );
};

export default UseCallBack;
