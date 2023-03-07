import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import CompletedJobs from "./components/CompletedJobs";
import FailedJobs from "./components/FailedJobs";
import FloatingIcon from "./components/FloatingIcon";
import InProgressJobs from "./components/InProgressJobs";
import Modal from "./components/Modal";

function App() {
  const [jobs, setJobs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  /**
   * Add Job To State
   *
   * Update In Local Storage
   *
   * @param {string} title
   * @param {string} type
   */
  const addJob = (title, type) => {
    const data = {
      id: jobs.length + 1,
      title: title,
      type: type,
    };
    setIsModalOpen(false);
    setJobs([...jobs, data]);
    localStorage.setItem("dnd-board-items", JSON.stringify([...jobs, data]));
    setIsLoaded(!isLoaded);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const storage = localStorage.getItem("dnd-board-items");
    if (!storage) {
      localStorage.setItem("dnd-board-items", JSON.stringify([]));
    } else {
      setJobs(JSON.parse(storage));
      setIsLoaded(true);
    }
  }, [isLoaded]);

  return (
    <DndProvider backend={HTML5Backend}>
      {isLoaded && (
        <div className="App">
          {isModalOpen && <Modal addJob={addJob} closeModal={closeModal} />}
          <CompletedJobs jobs={jobs} setJobs={setJobs} />
          <FailedJobs jobs={jobs} setJobs={setJobs} />
          <InProgressJobs jobs={jobs} setJobs={setJobs} />
          <FloatingIcon openModal={openModal} />
        </div>
      )}
    </DndProvider>
  );
}

export default App;
