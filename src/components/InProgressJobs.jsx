import React from "react";
import Job from "./Job";

const InProgressJobs = ({ jobs }) => {
  const inProgressJobs = jobs.filter((job) => job.type === "in progress");

  return (
    <div className="board-wrapper">
      <h3 className="board-heading">In Progress Jobs</h3>
      <div>
        {inProgressJobs.map((job) => {
          return <Job bg="blue" {...job} key={job.id} />;
        })}
      </div>
    </div>
  );
};

export default InProgressJobs;
