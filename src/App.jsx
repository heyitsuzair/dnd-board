import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import CompletedJobs from "./components/CompletedJobs";
import FailedJobs from "./components/FailedJobs";
import InProgressJobs from "./components/InProgressJobs";
import Modal from "./components/Modal";

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
      id: 3,
      title: "failed app",
      type: "failed",
    },
  ]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Modal />
        <CompletedJobs jobs={jobs} setJobs={setJobs} />
        <FailedJobs jobs={jobs} setJobs={setJobs} />
        <InProgressJobs jobs={jobs} setJobs={setJobs} />
      </div>
    </DndProvider>
  );
}

export default App;
