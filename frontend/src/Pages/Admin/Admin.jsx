import React, { useContext } from 'react'
import CurrentTask from '../../Components/Main/Admin/CurrentTask'
import AdminMenu from '../../Components/Main/Admin/AdminMenu'
import { TaskData } from '../../Context/TaskContext'
import Adminloginerror from '../../Components/Main/Other/adminloginerror'

const Admin = () => {
  const {adminAuth} = useContext(TaskData)
  return (
    <div className='flex overflow-hidden'>
      {
        (adminAuth.email == "admin@me.com") ?
         <>
        <AdminMenu />
        <CurrentTask />
        </>
        :
        <Adminloginerror />
      }
    </div>
  )
}

export default Admin