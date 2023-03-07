import React from "react";
import Job from "./Job";
import { useDrop } from "react-dnd";

const CompletedJobs = ({ jobs, setJobs }) => {
  const completedJobs = jobs.filter((job) => job.type === "completed");

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "job",
    drop: (item) => addToCompleted(item),
  }));

  const addToCompleted = (item) => {
    /**
     * Find Job And Change Its Type To "completed"
     */
    const findJob = jobs.find((job) => job.id === item.id);
    findJob.type = "completed";

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
