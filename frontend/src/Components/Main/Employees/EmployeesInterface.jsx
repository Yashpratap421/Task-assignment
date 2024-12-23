import React, { useContext } from 'react';
import { TaskData } from '../../../Context/TaskContext';

const EmployeesInterface = () => {
  const {taskList} = useContext(TaskData)

  const handleaccepte = async (taskId) => {
    try {
      const response = await fetch('http://localhost:8000/accepte', {
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
    <div className="w-full h-[90vh] px-8 py-6 flex flex-col gap-8 overflow-y-auto bg-gray-200">
      {
        taskList .filter((task) => task.status === "accepted")
        .map((task)=>(
          <div key={task._id} className="w-[70%] min-h-40 bg-white rounded-lg px-6 py-4 shadow-lg hover:shadow-xl transition ">
           <h3 className="text-[20px] font-semibold text-gray-800">{task.title}</h3>
            <p className="text-[16px] font-normal text-gray-600 mt-2">
              {task.description}
            </p>
            <div className="mt-4 flex items-center mb-2">
              <button className=" px-3 py-[5px] text-white bg-green-600 font-bold rounded-sm hover:bg-green-700 transition  duration-200" onClick={()=>(handleaccepte(task._id))} >
                {task.status}
              </button>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default EmployeesInterface;
