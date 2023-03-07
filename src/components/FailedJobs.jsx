import React from "react";
import Job from "./Job";

const FailedJobs = ({ jobs }) => {
  const failedJobs = jobs.filter((job) => job.type === "failed");

  return (
    <div className="board-wrapper">
      <h3 className="board-heading">Failed Jobs</h3>
      <div>
        {failedJobs.map((job) => {
          return <Job bg="red" {...job} key={job.id} />;
        })}
      </div>
    </div>
  );
};

export default FailedJobs;
