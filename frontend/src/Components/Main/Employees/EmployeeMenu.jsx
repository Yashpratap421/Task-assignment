import React from 'react';
import { NavLink } from 'react-router-dom';

const EmployeeMenu = () => {
  return (
    <div className="w-[20%] h-[90vh] px-4 py-2 bg-gray-100">
      {/* Header Section */}
      <div className="w-full h-[15%] border-b-2 border-green-600 shadow-md shadow-slate-500">
        <h2 className="text-[24px] font-bold text-green-600 text-center">Aman Kumar</h2>
        <p className="text-[16px] px-3 font-medium text-center text-gray-700">aman@gmail.com</p>
      </div>

      {/* Menu Section */}
      <div className="w-full h-[85%] flex flex-col gap-4 items-center pt-4">
        <NavLink
          to="/alltasks"
          className={({ isActive }) =>
            `px-4 py-2 text-[16px] font-bold w-full text-center rounded ${
              isActive ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'
            }`
          }
        >
          All Tasks
        </NavLink>
        <NavLink
          to="/yourtasks"
          className={({ isActive }) =>
            `px-4 py-2 text-[16px] font-bold w-full text-center rounded ${
              isActive ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'
            }`
          }
        >
          Your Tasks
        </NavLink>
        <div className="h-[70%] w-full bg-gray-200 ">
        <div className="h-[30%] w-full bg-white shadow-sm shadow-green-400 flex flex-col items-center justify-center gap-1 text-[20px] text-gray-600 font-bold  mt-2">SCORE <span className='text-[24px] text-blue-600'>20</span></div>
        <div className="h-[30%] w-full bg-white shadow-sm shadow-blue-400 flex flex-col items-center  justify-center gap-1 text-[20px] text-gray-600 font-bold mt-2">ACTIVE <span className='text-[24px] text-green-600'>4</span></div>
        <div className="h-[30%] w-full bg-white shadow-sm shadow-gray-400 flex flex-col items-center  justify-center gap-1 text-[20px] text-gray-600 font-bold mt-2">COMPLETED <span className='text-[24px] text-pink-700'>3</span></div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeMenu;
