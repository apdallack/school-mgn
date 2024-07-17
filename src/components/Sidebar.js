import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
  return (
    <div className="bg-5500CB border-right" id="sidebar-wrapper">
      <div className="sidebar-heading text-light bg-success fs-2 "> <h1>SMS</h1> </div>
      <div className="list-group list-group-flush">
        <NavLink to="/dashboard" className="list-group-item list-group-item-action ">Dashboard</NavLink>
        
        <Dropdown  >
          <Dropdown.Toggle variant="secondary" id="registrationDropdown" className="list-group-item list-group-item-action ">
            Admission
          </Dropdown.Toggle >
          <Dropdown.Menu className="do">
            <NavLink to="/dashboard/add-student" className="dropdown-item do ">Add Student</NavLink>
            <NavLink to="/dashboard/add-teacher" className="dropdown-item">Add Teacher</NavLink>
            <NavLink to="/dashboard/add-parents" className="dropdown-item">Add Parents</NavLink>
            <NavLink to="/dashboard/add-class" className="dropdown-item">Add Class</NavLink>
            <NavLink to="/dashboard/add-subject" className="dropdown-item">Add Subject</NavLink>
            <NavLink to="/dashboard/add-exam" className="dropdown-item">Add Exam</NavLink>
            <NavLink to="/dashboard/add-result" className="dropdown-item">Add Result</NavLink>
            <NavLink to="/dashboard/add-event" className="dropdown-item">Add Event</NavLink>
            <NavLink to="/dashboard/Add-Salary" className="dropdown-item">Add Salary</NavLink>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="registrationDropdown" className="list-group-item list-group-item-action bg-light">
            Fianace
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <NavLink to="/dashboard/add-Fee" className="dropdown-item">Add Fee</NavLink>
              <NavLink to="/dashboard/add-Salary" className="dropdown-item">Add Salary</NavLink>
            </Dropdown.Menu>
          </Dropdown>











        <NavLink to="/dashboard/add-attendance" className="list-group-item list-group-item-action bg-light">Add Attendance</NavLink>
       
        <NavLink to="/dashboard/add-schedule" className="list-group-item list-group-item-action bg-light">Add Schedule</NavLink>
        
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="reportsDropdown" className="list-group-item list-group-item-action bg-light">
            Reports
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <NavLink to="/dashboard/reports/students" className="dropdown-item">Students</NavLink>
            <NavLink to="/dashboard/reports/teachers" className="dropdown-item">Teachers</NavLink>
            <NavLink to="/dashboard/reports/parents" className="dropdown-item">Parents</NavLink>
            <NavLink to="/dashboard/reports/classes" className="dropdown-item">Classes</NavLink>
            <NavLink to="/dashboard/reports/subjects" className="dropdown-item">Subjects</NavLink>
            <NavLink to="/dashboard/reports/exams" className="dropdown-item">Exams</NavLink>
            <NavLink to="/dashboard/reports/results" className="dropdown-item">Results</NavLink>
            <NavLink to="/dashboard/reports/events" className="dropdown-item">Events</NavLink>
            <NavLink to="/dashboard/reports/fees" className="dropdown-item">Fees</NavLink>
            <NavLink to="/dashboard/reports/salaries" className="dropdown-item">Salaries</NavLink>
            <NavLink to="/dashboard/reports/Attendance" className="dropdown-item">Attendance</NavLink>
            <NavLink to="/dashboard/reports/Schedule" className="dropdown-item">Schedule</NavLink>
          </Dropdown.Menu>
        </Dropdown>

        <NavLink to="/login" className="list-group-item list-group-item-action bg-light">Logout</NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
