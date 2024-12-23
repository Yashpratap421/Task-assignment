import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import axios from 'axios';

export const TaskData = createContext();

const TaskContext = ({ children }) => {
  const [adminControl, setAdminControl] = useState(true);
  const [taskList, setTaskList] = useState([]);
  const [users, setUsers] = useState([]);
  const [adminAuth, setAdminAuth] = useState({
  })
  const [userAuth, setUserAuth] = useState({})

  useEffect(() => {
    const fetchTaskList = async () => {
      try {
        const response = await axios.get('http://localhost:8000/taskprovide');
        setTaskList(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTaskList();
  }, []); // Dependency array ensures this runs only once.

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []); 
  useEffect(() => {
    const fetchloginUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/user/login');
        if(response.data != null){
        setUserAuth(response.data);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchloginUsers();
  }, []);
  useEffect(() => {
    const fetchregisterUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/user/register');
        if(response.data != null){
        setUserAuth(response.data);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchregisterUsers();
  }, []);
  useEffect(() => {
    const fetchloginAdmin = async () => {
      try {
        const response = await axios.get('http://localhost:8000/user/login');
        if(response.data != null){
        setAdminAuth(response.data);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchloginAdmin();
  }, []);

  return (
    <TaskData.Provider value={{ adminControl, setAdminControl, taskList, users, adminAuth, setAdminAuth, userAuth, setUserAuth}}>
      {children}
    </TaskData.Provider>
  );
};

export default TaskContext;
