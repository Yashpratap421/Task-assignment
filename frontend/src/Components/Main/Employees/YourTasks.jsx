import React, { useState } from 'react'

const YourTasks = () => {

  const[taskOption, setTaskOption] =useState(true)
  return (
    <div className='w-[80%] h-[90vh] '>
        <h3 className='flex'><span className='w-[50%] px-3 py-2 bg-blue-700 text-white font-semibold text-center'>Active Tasks</span> <span className='w-[50%] px-3 py-2 text-white bg-blue-400 font-semibold text-center'>Completed Tasks</span></h3>
      <div className="w-full h-[84vh] px-8 py-6 flex flex-col gap-8 bg-gray-200 overflow-y-scroll">
        <div className="w-[70%] min-h-40 bg-white rounded-lg px-6 py-4 shadow-lg hover:shadow-xl transition ">
          <h3 className="text-[20px] font-semibold text-gray-800">Design Here..</h3>
          <p className="text-[16px] font-normal text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur deserunt voluptatem at dolorem sed! Ipsam quas nemo temporibus placeat esse quos eius explicabo eligendi!
         </p>
        <div className="mt-4 flex items-center mb-2">
          <button className=" px-3 py-[5px] text-white bg-gray-600 font-bold rounded-sm hover:bg-green-700 transition duration-200">Completed</button>
        </div>
      </div>

    </div>
    </div>
    
  )
}

export default YourTasks