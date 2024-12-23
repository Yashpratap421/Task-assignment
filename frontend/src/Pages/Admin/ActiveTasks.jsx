import React, { useContext } from 'react'
import AcceptedTask from '../../Components/Main/Admin/AcceptedTask'
import AdminMenu from '../../Components/Main/Admin/AdminMenu'
import { TaskData } from '../../Context/TaskContext'
import { useNavigate } from 'react-router-dom'
import Adminloginerror from '../../Components/Main/Other/adminloginerror'

const ActiveTasks = () => {

  const {adminAuth} = useContext(TaskData)
  const move = ()=>{
    navigate('/adminlogin')
  }

  return (
    <div className='flex'>
      {
        (adminAuth.email == "admin@me.com") ?
        <>
         <AdminMenu />
         <AcceptedTask />
        </>
        :
       <Adminloginerror />
      }
    </div>
  )
}

export default ActiveTasks