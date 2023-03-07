import React, { useState } from "react";

const Modal = () => {
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");

  return (
    <div id="modal">
      <input
        type="text"
        value={title}
        placeholder="Enter Title...."
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        type="text"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="in progress">In Progress</option>
        <option value="completed">Completed</option>
        <option value="failed">Failed</option>
      </select>
    </div>
  );
};

export default Modal;
