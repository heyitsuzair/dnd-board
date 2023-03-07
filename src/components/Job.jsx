import React from "react";

const Job = ({ id, title, bg }) => {
  const style = {
    backgroundColor: bg,
    color: "white",
    textAlign: "center",
    borderRadius: "0.5rem",
    padding: "1rem",
    margin: "0 1rem",
  };

  return <div style={style}>{title}</div>;
};

export default Job;
