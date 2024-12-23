import React, { useContext } from 'react'
import EmployeesData from '../../Components/Main/Admin/EmployeesData'
import AdminMenu from '../../Components/Main/Admin/AdminMenu'
import Adminloginerror from '../../Components/Main/Other/adminloginerror'
import { TaskData } from '../../Context/TaskContext'

const EmployeesDatas = () => {
  const {adminAuth} = useContext(TaskData)
  return (
    <div className='flex overflow-hidden'>
        {
            (adminAuth.email == "admin@me.com") ?
         <>
        <AdminMenu />
        <EmployeesData />
        </>
        :
        <Adminloginerror />
}
    </div>
  )
}

export default EmployeesDatas