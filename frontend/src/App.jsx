import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './Pages/Admin/Admin'
import Header from './Components/Header/Header';
import EmployeesDashboard from './Pages/Employees/EmployeesDashboard';
import CreateTasks from './Pages/Admin/CreateTasks';
import ActiveTasks from './Pages/Admin/ActiveTasks';
import EmployeesDatas from './Pages/Admin/EmployeesDatas';
import YourTask from './Pages/Employees/YourTask';
import Userauth from './Pages/Authentication/Userauth'
import UserLogin from './Pages/Authentication/Userlogin';
// import AdminAuth from './Pages/Authentication/Adminauth';
import Adminlogin from './Pages/Authentication/Adminlogin'

const App = () => {
  return (
    <>
     <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Userauth/> } />
        <Route path='/userlogin' element={<UserLogin />} />
        <Route path='/adminlogin' element={<Adminlogin />} />
        {/* <Route path='/adminregister' element={<AdminAuth />} /> */}
        <Route path="/admin/dashboard" element={<Admin />} /> 
        <Route path="/admin/createtask" element={<CreateTasks />} />
        <Route path="/admin/activetask" element={<ActiveTasks />} />
        <Route path="/admin/Employeesdetails" element={<EmployeesDatas />} />
        <Route path="/alltasks" element={<EmployeesDashboard /> } />
        <Route path="/yourtasks" element={<YourTask />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
 