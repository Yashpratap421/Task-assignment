import React, { useContext } from 'react';
import { TaskData } from '../../../Context/TaskContext';

const AcceptedTask = () => {
  const {taskList} = useContext(TaskData)
  return (
    <div className="w-[80%] h-[90vh] flex flex-col gap-6 bg-neutral-light px-8 py-6 overflow-y-auto">
      {
        taskList.filter((task) => task.status === "Active") // Correct filter condition
        .map((task) =>(
          <div className="w-[70%] min-h-40 bg-white rounded-lg px-6 py-4 shadow-lg hover:shadow-xl transition relative">
        <h3 className="text-[22px] font-semibold text-gray-800">{task.title}</h3>
        <p className="text-[16px] font-normal text-gray-600 mt-2">
          {task.description}
        </p>
        <div className="mt-6 flex items-center gap-6 text-gray-700">
          <h3 className="text-green-600 font-semibold text-lg">{task.status}</h3>
          <p>
            BY: <span className="font-medium text-gray-800">Employee</span>
          </p>
        </div>
        <button className="absolute top-4 right-4 px-4 py-2 bg-primary  text-[14px] font-medium rounded-md shadow-sm hover:bg-primary-dark transition">
          Track Progress <i class="ri-arrow-right-fill"></i>
        </button>
      </div>
        ))
      }
    </div>
  );
};

export default AcceptedTask;
