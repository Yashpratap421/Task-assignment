import React from 'react'
import { useNavigate } from 'react-router-dom'

const Adminloginerror = () => { 
      const navigate = useNavigate();

      const handlelogin = ()=>{
        navigate("/adminlogin")
      }
  return (
    <div className='w-full h-[90vh] flex flex-col items-center justify-center gap-1'>
        <h2 className='text-red-500 font-bold text-[20px] '>You are not be admin.</h2>
        <h3  className='text-gray-600 font-bold text-[18px] '>For Login click the below..</h3>
        <button className='px-3 py-2 bg-blue-700 text-white' onClick={handlelogin}>Admin Login</button>
        <p className='flex gap-2'>use it. <span>email- admin@me.com</span><span>password- 123</span></p>


    </div>
  )
}

export default Adminloginerror