import React, { useContext } from 'react';
import { TaskData } from '../../../Context/TaskContext';
import { useNavigate } from 'react-router-dom';

const CurrentTask = () => {
  const { taskList } = useContext(TaskData);
  const navigate = useNavigate();  // Define the navigate function

  const handleRemove = async (taskId) => {
    try {
      const response = await fetch('http://localhost:8000/remove', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ taskId }),  // Send taskId as an object
      });
      // console.log(response)
    } catch (error) {
      console.error('Error removing task:', error);
      alert('An error occurred while removing the task.');
    }
  };

  return (
    <div className="w-[80%] h-[90vh] px-6 py-4 flex flex-col gap-6 overflow-y-auto bg-gray-100 rounded-lg shadow-md">
      {taskList.map((task) => (
        <div
          key={task._id}
          className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4 hover:shadow-xl transition-shadow duration-300"
        >
          <h3 className="text-[22px] font-semibold text-gray-800">{task.title}</h3>
          <p className="text-[16px] text-gray-600 leading-relaxed">{task.description}</p>
          <div className="flex justify-end items-center gap-4 mt-4">
            <button className="w-28 px-4 py-2 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 transition duration-300">
              Edit
            </button>
            <button
              className="w-28 px-4 py-2 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition duration-300"
              onClick={() => handleRemove(task._id)}  // Trigger remove handler
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurrentTask;
