import React, { useState } from 'react';

const TaskModal = ({ addTask, closeModal }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description, status: 'To Do' });
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-6 rounded-lg shadow-lg max-w-md w-full text-white">
        <h2 className="text-xl font-bold mb-4">Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-white rounded-lg bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-white rounded-lg bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-pink-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
          >
            Add Task
          </button>
          <button
            type="button"
            onClick={closeModal}
            className="w-full mt-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
