import React, { useContext } from 'react';
import { TaskData } from '../../../Context/TaskContext';

const EmployeesData = () => {
  const { users } = useContext(TaskData);

  return (
    <div className="h-[90vh] w-[80%]">
      {/* Table Header */}
      <h3 className="font-semibold w-full px-2 text-blue-500 bg-white py-2 flex items-center justify-between gap-1 text-center">
        <span className="w-1/6 px-2 py-1">Name</span>
        <span className="w-1/6 px-2 py-1">Email</span>
        <span className="w-1/6 px-2 py-1">Task Accepted</span>
        <span className="w-1/6 px-2 py-1">Active Task</span>
        <span className="w-1/6 px-2 py-1">Completed</span>
        <span className="w-1/6 px-2 py-1">Score</span>
      </h3>

      {/* Users Data */}
      <div className="w-full py-2 flex flex-col gap-1 items-center overflow-y-scroll h-[92%]">
        {users && users.length > 0 ? (
          users.map((user) => (
            <p
              key={user._id}
              className="w-full px-2 text-center bg-white py-1 flex items-center justify-between gap-1 text-[16px]"
            >
              <span className="w-1/6 px-2 py-1 font-medium">{user.name || 'N/A'}</span>
              <span className="w-1/6 px-2 py-1">{user.email || 'N/A'}</span>
              <span className="w-1/6 px-2 py-1">{user.taskAccepted || 0}</span>
              <span className="w-1/6 px-2 py-1">{user.activeTask || 0}</span>
              <span className="w-1/6 px-2 py-1">{user.completed || 0}</span>
              <span className="w-1/6 px-2 py-1">{user.score || 0}</span>
            </p>
          ))
        ) : (
          <p className="text-gray-500 text-center py-2">No users available</p>
        )}
      </div>
    </div>
  );
};

export default EmployeesData;
