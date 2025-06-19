import React, { useMemo } from "react";

const UseMemo = ({ task }) => {
  const taskList = useMemo(() =>
    task.map((todo, idx) => <li key={idx}>{todo}</li>),
  [task]);

  return (
    <div style={{ marginTop: 10 }}>
      <ul>{taskList}</ul>
    </div>
  );
};

export default UseMemo;
