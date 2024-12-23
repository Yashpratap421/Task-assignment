import React from 'react'
import { useNavigate } from 'react-router-dom'

const Userloginerror = () => { 
      const navigate = useNavigate();

      const handlelogin = ()=>{
        navigate("/userlogin")
      }
  return (
    <div className='w-full h-[90vh] flex items-center justify-center gap-1'>
        <h2 className='text-red-500 font-bold text-[20px] '>You are not be user.</h2>
        <h3  className='text-gray-600 font-bold text-[18px] '>For Login click the below..</h3>
        <button className='px-3 py-2 bg-blue-700 text-white' onClick={handlelogin}>Admin Login</button>


    </div>
  )
}

export default Userloginerror