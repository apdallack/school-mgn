import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// import './Assets/BTN.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './components/Dashboard';
import AddStudent from './components/AddStudent';
import AddTeacher from './components/AddTeacher';
import AddParents from './components/AddParents';
import AddClass from './components/AddClass';
import AddSubject from './components/AddSubject';
import AddExam from './components/AddExam';
import AddResult from './components/AddResult';
import AddEvent from './components/AddEvent';
import AddFee from './components/AddFee';
import AddSalary from './components/AddSalary';
import AddAttendance from './components/AddAttendance';
import PaySalary from './components/PaySalary';
import AddSchedule from './components/AddSchedule';
import ReportStudents from './components/ReportStudents';
import ReportTeachers from './components/ReportTeachers';
import ReportParents from './components/ReportParents';
import ReportClasses from './components/ReportClasses';
import ReportSubjects from './components/ReportSubjects';
import ReportExams from './components/ReportExams';
import ReportResults from './components/ReportResults';
import ReportFees from './components/ReportFees';
import ReportSalaries from './components/ReportSalaries';
import ReportEvents from './components/ReportEvents';
import ReportSchedules from './components/ReportSchedules';
 
import ReportAttendance from './components/ReportAttendance';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="add-student" element={<AddStudent />} />
          <Route path="add-teacher" element={<AddTeacher />} />
          <Route path="add-parents" element={<AddParents />} />
          <Route path="add-class" element={<AddClass />} />
          <Route path="add-subject" element={<AddSubject />} />
          <Route path="add-exam" element={<AddExam />} />
          <Route path="add-result" element={<AddResult />} />
          <Route path="add-event" element={<AddEvent />} />
          <Route path="add-fee" element={<AddFee />} />
          <Route path="Add-Salary" element={<AddSalary />} />
          <Route path="add-attendance" element={<AddAttendance />} />
          <Route path="pay-salary" element={<PaySalary />} />
          <Route path="add-schedule" element={<AddSchedule />} />
          <Route path="reports/students" element={<ReportStudents />} />
          <Route path="reports/teachers" element={<ReportTeachers />} />
          <Route path="reports/parents" element={<ReportParents />} />
          <Route path="reports/classes" element={<ReportClasses />} />
          <Route path="reports/subjects" element={<ReportSubjects />} />
          <Route path="reports/exams" element={<ReportExams />} />
          <Route path="reports/results" element={<ReportResults />} />
          <Route path="reports/events" element={<ReportEvents />} />
          <Route path="reports/fees" element={<ReportFees />} />
          <Route path="reports/salaries" element={<ReportSalaries />} />
          <Route path="reports/Attendance" element={<ReportAttendance />} />
          <Route path="reports/Schedule" element={<ReportSchedules />} />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
