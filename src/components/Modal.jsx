import React, { useRef } from "react";

const Modal = ({ closeModal, addJob }) => {
  const titleRef = useRef();
  const typeRef = useRef();

  const onAddJob = () => {
    addJob(titleRef.current.value, typeRef.current.value);
  };

  return (
    <div id="modal">
      <input type="text" placeholder="Enter Title...." ref={titleRef} />
      <select type="text" ref={typeRef}>
        <option value="in progress">In Progress</option>
        <option value="completed">Completed</option>
        <option value="failed">Failed</option>
      </select>
      <button onClick={onAddJob}>Add</button>
      <button onClick={closeModal}>Cancel</button>
    </div>
  );
};

export default Modal;
