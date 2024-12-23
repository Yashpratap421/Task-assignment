import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import menu from '../../assets/images/menu.png';
import { TaskData } from '../../Context/TaskContext';

const Header = () => {

  const {adminControl} = useContext(TaskData)
  const navigate = useNavigate(); 

  return (
    <div className='flex items-center px-6 py-3 justify-between bg-white h-[10vh]'>
      <h1 className='text-[28px] font-bold text-gray-700'>Task<span className='text-green-600'>Board</span></h1>
      <div className="h-full flex items-center gap-16">
        {
         adminControl && <button
         className='px-4 py-2 text-[16px] font-bold text-white bg-green-600 rounded-[4px]'
         onClick={() => navigate('/admin/createtask')}
      >
         Create Task
       </ button>  
        }
        <img src={menu} alt="Menu" />
      </div>
    </div>
  );
};

export default Header;
