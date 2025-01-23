import React, { useState } from 'react';

const Auth = ({ authenticate }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticate(username, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-20 p-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Task Manager Login</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-white rounded-lg bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-white rounded-lg bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
      >
        Login
      </button>
    </form>
  );
};

export default Auth;
