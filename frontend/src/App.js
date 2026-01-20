import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './UserInfoView/LogIn';
import SignUp from './UserInfoView/SignUp';
import ProgressTrackerPage from './TrackerView/ProgressTrackerPage';
import Home from './Home';
import TaskPage from './TaskView/Pages/TaskPage';
import PrivateRoutes from './PrivateRoutes';

export default function App() {
  return (
   <Router>
        <Routes>
            <Route element={<PrivateRoutes/>}>
              <Route path='/home' element={<Home />}/>  
              <Route path='/progresstracker' element={<ProgressTrackerPage />}/>
              <Route path='/TaskPage' element={<TaskPage />}/>
            </Route>
            <Route path='/' element={<LoginPage />}/>
            <Route path='/signup' element={<SignUp />}/>
        </Routes>
   </Router>
  );
}
