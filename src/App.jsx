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
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Add Job To State
   *
   * Update In Local Storage
   *
   * @param {string} title
   * @param {string} type
   */
  const addJob = (title, type) => {
    setIsLoading(true);
    const data = {
      id: Math.floor(Math.random() * 1000000000),
      title: title,
      type: type,
    };
    setIsModalOpen(false);
    setJobs([...jobs, data]);
    localStorage.setItem("dnd-board-items", JSON.stringify([...jobs, data]));
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  /**
   * Filters The Job And Removes It
   *
   * @param {number} id
   */

  const deleteJob = (id) => {
    setIsLoading(true);
    /**
     * Remove This Job From Array
     */
    const filteredJobs = jobs.filter((job) => job.id !== id);
    setJobs(filteredJobs);
    localStorage.setItem("dnd-board-items", JSON.stringify(filteredJobs));
    setIsLoading(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    setIsLoading(true);
    const storage = localStorage.getItem("dnd-board-items");
    if (!storage) {
      localStorage.setItem("dnd-board-items", JSON.stringify([]));
      setIsLoading(false);
    } else {
      setJobs(JSON.parse(storage));
      setIsLoading(false);
    }
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      {isLoading ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="App">
          {isModalOpen && <Modal addJob={addJob} closeModal={closeModal} />}
          <CompletedJobs deleteJob={deleteJob} jobs={jobs} setJobs={setJobs} />
          <FailedJobs deleteJob={deleteJob} jobs={jobs} setJobs={setJobs} />
          <InProgressJobs deleteJob={deleteJob} jobs={jobs} setJobs={setJobs} />
          <FloatingIcon openModal={openModal} />
        </div>
      )}
    </DndProvider>
  );
}

export default App;
