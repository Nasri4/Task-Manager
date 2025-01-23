import React, { useState } from 'react';
import Auth from './components/Auth';
import Header from './components/Header';
import Footer from "./components/Footer";
import KanbanBoard from './components/KanbanBoard';
import TaskModal from './components/TaskModal';
import ProgressBar from './components/ProgressBar';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const authenticate = (username, password) => {
    if (username === 'admin' && password === 'task') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid username or password!');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const moveTask = (taskToMove) => {
    const updatedTasks = tasks.map((task) => {
      if (task.title === taskToMove.title) {
        const nextStatus =
          task.status === 'To Do'
            ? 'In Progress'
            : task.status === 'In Progress'
            ? 'Done'
            : 'To Do';
        return { ...task, status: nextStatus };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {!isAuthenticated ? (
        <Auth authenticate={authenticate} />
      ) : (
        <>
          <Header logout={logout} />
          <div className="flex-grow max-w-7xl mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800">My Tasks</h1>
              <button
                onClick={() => setShowModal(true)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Add Task
              </button>
            </div>
            <ProgressBar tasks={tasks} />
            <KanbanBoard tasks={tasks} moveTask={moveTask} />
          </div>
          {showModal && (
            <TaskModal
              addTask={addTask}
              closeModal={() => setShowModal(false)}
            />
          )}
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
