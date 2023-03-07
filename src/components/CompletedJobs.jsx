import React from "react";
import Job from "./Job";

const CompletedJobs = ({ jobs }) => {
  const completedJobs = jobs.filter((job) => job.type === "completed");

  return (
    <div className="board-wrapper">
      <h3 className="board-heading">Completed Jobs</h3>
      <div>
        {completedJobs.map((job) => {
          return <Job bg="green" {...job} key={job.id} />;
        })}
      </div>
    </div>
  );
};

export default CompletedJobs;
