import React from "react";
import Job from "./Job";
import { useDrop } from "react-dnd";

const InProgressJobs = ({ jobs, setJobs }) => {
  const inProgressJobs = jobs.filter((job) => job.type === "in progress");

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "job",
    drop: (item) => addToProgress(item),
  }));

  const addToProgress = (item) => {
    /**
     * Find Job And Change Its Type To "in progress"
     */
    const findJob = jobs.find((job) => job.id === item.id);
    findJob.type = "in progress";

    /**
     * Remove This Job From Array
     */
    const otherJobs = jobs.filter((job) => job.id !== item.id);

    /**
     * Set Job Again With Updated Status
     */
    setJobs([...otherJobs, findJob]);
  };

  return (
    <div className="board-wrapper" ref={drop}>
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
