import React, { useContext } from 'react'
import YourTasks from '../../Components/Main/Employees/YourTasks'
import EmployeeMenu from '../../Components/Main/Employees/EmployeeMenu'
import { TaskData } from '../../Context/TaskContext'
import Userloginerror from '../../Components/Main/Other/Userloginerror'

const YourTask = () => {
  const {userAuth} = useContext(TaskData)
  return (
    <div className='flex'>
      {
        userAuth ?
        <>
         <YourTasks />
         <EmployeeMenu />
        </> 
        :
        <Userloginerror />
      }
    </div>
  )
}

export default YourTask