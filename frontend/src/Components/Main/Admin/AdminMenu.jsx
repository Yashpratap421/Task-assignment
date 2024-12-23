import React  from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
  return (
    <div className="w-[20%] h-[90vh] px-4 py-2 bg-gray-100">
    {/* <div className="w-full h-[15%] border-b-2 border-green-600 shadow-md shadow-slate-500">
      <h2 className="text-[24px] font-bold text-green-600 text-center">Aman Kumar</h2>
      <p className="text-[16px] px-3 font-medium text-center text-gray-700">aman@gmail.com</p>
    </div> */}
    <div className=" h-[85%] flex flex-col gap-4 items-center pt-4">
      <NavLink
        to="/admin/dashboard"
        className={({ isActive }) =>
          `px-4 py-2 text-[16px]  font-bold w-full text-center rounded ${
            isActive ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'
          }`
        }
      >
        Available Tasks
      </NavLink>
      <NavLink
        to="/admin/createtask"
        className={({ isActive }) =>
          `px-4 py-2 text-[16px] font-bold w-full text-center rounded ${
            isActive ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'
          }`
        }
      >
        Create Task
      </NavLink>
      <NavLink
        to="/admin/activetask"
        className={({ isActive }) =>
          `px-4 py-2 text-[16px] font-bold w-full text-center rounded ${
            isActive ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'
          }`
        }
      >
        Active Tasks
      </NavLink>
      <NavLink
        to="/admin/employeesdetails"
        className={({ isActive }) =>
          `px-4 py-2 text-[16px] font-bold w-full text-center rounded ${
            isActive ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'
          }`
        }
      >
        Employees
      </NavLink>
    </div>
  </div>
  )
}

export default AdminMenu