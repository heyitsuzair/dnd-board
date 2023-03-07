import React from "react";

const FloatingIcon = ({ openModal }) => {
  return (
    <button onClick={openModal} className="add_modal">
      +
    </button>
  );
};

export default FloatingIcon;
