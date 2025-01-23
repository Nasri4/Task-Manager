import React from 'react';

const ProgressBar = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.status === 'Done').length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="w-full bg-gray-300 rounded-full mt-6 h-6 shadow-md overflow-hidden">
      <div
        className={`h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center`}
        style={{ width: `${progress}%` }}
      >
        <span className="text-white text-sm font-bold">
          {progress.toFixed(0)}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
