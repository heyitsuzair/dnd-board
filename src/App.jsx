import { useState } from "react";
import "./App.css";
import CompletedJobs from "./components/CompletedJobs";
import FailedJobs from "./components/FailedJobs";
import InProgressJobs from "./components/InProgressJobs";

function App() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "completed app",
      type: "completed",
    },
    {
      id: 2,
      title: "progress app",
      type: "in progress",
    },
    {
      id: 1,
      title: "failed app",
      type: "failed",
    },
  ]);

  return (
    <div className="App">
      <CompletedJobs jobs={jobs} />
      <FailedJobs jobs={jobs} />
      <InProgressJobs jobs={jobs} />
    </div>
  );
}

export default App;
