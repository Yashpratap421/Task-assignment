import React, { useContext } from 'react'
import CreateTask from '../../Components/Main/Admin/CreateTask'
import AdminMenu from '../../Components/Main/Admin/AdminMenu'
import Adminloginerror from '../../Components/Main/Other/adminloginerror'
import { TaskData } from '../../Context/TaskContext'

const CreateTasks = () => {
  const {adminAuth} = useContext(TaskData)
  return (
    <div className='flex overflow-hidden'>
        {
             (adminAuth.email == "admin@me.com") ?
         <>
      <AdminMenu />
        <CreateTask />
        </>
        :
        <Adminloginerror />
}
    </div>
  )
}

export default CreateTasks