import React from 'react';

const Header = ({ logout }) => {
  return (
    <header className="bg-primary text-light p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Task Manager</h1>
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-500 text-light rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 text-white focus:ring-red-300"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
