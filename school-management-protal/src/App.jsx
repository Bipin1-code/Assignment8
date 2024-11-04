
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Dashboard from './pages/Dashboard.jsx';
import StudentList from './pages/StudentList.jsx';
import ProgramList from './pages/ProgramList.jsx';
import PublishEvent from './pages/PublishEvent.jsx';
import RegisterNewStudent from './pages/RegisterNewStudent.jsx';


function App() {

  return (
    <Router>
      <Navbar />
      <div className="container content">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/StudentList' element={<StudentList />} />
          <Route path = "/RegisterStudent" element = {<RegisterNewStudent/>} />
          <Route path='/ProgramList' element={<ProgramList />} />
          <Route path='/PublishEvent' element={<PublishEvent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
