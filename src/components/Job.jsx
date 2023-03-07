import React from "react";
import { useDrag } from "react-dnd";

const Job = ({ id, title, type, bg }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "job",
    item: { id, type },
  }));

  const style = {
    backgroundColor: bg,
    color: "white",
    textAlign: "center",
    borderRadius: "0.5rem",
    padding: "1rem",
    margin: "1rem",
  };

  return (
    <div ref={drag} className="job" style={style}>
      {title}
      <span onClick={() => alert("hello")}>x</span>
    </div>
  );
};

export default Job;
