import React from "react";
import Job from "./Job";
import { useDrop } from "react-dnd";

const FailedJobs = ({ jobs, setJobs, deleteJob }) => {
  const failedJobs = jobs.filter((job) => job.type === "failed");

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "job",
    drop: (item) => addToFailed(item),
  }));

  const addToFailed = (item) => {
    /**
     * Find Job And Change Its Type To "failed"
     */
    const findJob = jobs.find((job) => job.id === item.id);
    findJob.type = "failed";

    /**
     * Remove This Job From Array
     */
    const otherJobs = jobs.filter((job) => job.id !== item.id);

    /**
     * Set Job Again With Updated Status
     */
    setJobs([...otherJobs, findJob]);
    localStorage.setItem(
      "dnd-board-items",
      JSON.stringify([...otherJobs, findJob])
    );
  };
  return (
    <div className="board-wrapper" ref={drop}>
      <h3 className="board-heading">Failed Jobs</h3>
      <div>
        {failedJobs.map((job) => {
          return <Job deleteJob={deleteJob} bg="red" {...job} key={job.id} />;
        })}
      </div>
    </div>
  );
};

export default FailedJobs;
