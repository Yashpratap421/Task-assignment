import React, { useContext } from 'react'
import EmployeesInterface from '../../Components/Main/Employees/EmployeesInterface'
import EmployeeMenu from '../../Components/Main/Employees/EmployeeMenu'
import { TaskData } from '../../Context/TaskContext'
import Userloginerror from '../../Components/Main/Other/Userloginerror'

const EmployeesDashboard = () => {
  const {userAuth} = useContext(TaskData)
  return (
    <div className='flex'>
      {
        userAuth ? <>
         <EmployeesInterface />
         <EmployeeMenu />
        </>
        :
        <Userloginerror />
      }
    
    </div>
  )
}

export default EmployeesDashboard