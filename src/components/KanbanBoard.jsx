import React from 'react';

const KanbanBoard = ({ tasks, moveTask }) => {
  const categories = [
    { name: 'To Do', bgColor: 'bg-red-100', textColor: 'text-red-600' },
    { name: 'In Progress', bgColor: 'bg-yellow-100', textColor: 'text-yellow-600' },
    { name: 'Done', bgColor: 'bg-green-100', textColor: 'text-green-600' },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 mt-10">
      {categories.map((category) => (
        <div
          key={category.name}
          className={`p-4 ${category.bgColor} rounded-lg shadow-md`}
        >
          <h3 className={`text-xl font-bold mb-4 ${category.textColor}`}>
            {category.name}
          </h3>
          {tasks
            .filter((task) => task.status === category.name)
            .map((task) => (
              <div
                key={task.title}
                className="p-3 bg-white rounded-lg shadow-md mb-3 cursor-pointer hover:bg-gray-50"
                onClick={() => moveTask(task)}
              >
                <h4 className="font-semibold text-gray-800">{task.title}</h4>
                <p className="text-sm text-gray-600">{task.description}</p>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
