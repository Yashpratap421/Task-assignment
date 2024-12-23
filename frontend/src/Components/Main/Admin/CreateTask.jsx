import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateTask = () => {
  const [formData, setFormData] = useState({
    taskName: '',
    description: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      await fetch('http://localhost:8000/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error('Error creating task:', error);
      alert('An error occurred while creating the task.');
    }
     navigate('/admin/dashboard');
  };

  return (
    <div className="flex items-center justify-center bg-gray-200 w-[80%] h-[90vh] p-2">
      <form
        className="bg-white p-6 rounded shadow-lg w-full h-[100%]"
        onSubmit={handleCreateTask}
      >
        <h1 className="text-lg font-bold mb-4 text-green-600">Create Task</h1>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Task Name</label>
          <input
            type="text"
            name="taskName"
            placeholder="Enter task name"
            value={formData.taskName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded bg-gray-200 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            name="description"
            placeholder="Enter task description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded bg-gray-200 focus:outline-none"
            required
          ></textarea>
        </div>
        <div className="flex justify-end gap-8">
          <button
            type="button"
            onClick={() => navigate('/admin/dashboard')}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
