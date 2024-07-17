import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Dashboard.css';

const Dashboard = () => {
  const [toggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!toggled);
  };

  return (
    <div className={`d-flex ${toggled ? 'toggled' : ''}`} id="wrapper">
      <Sidebar />
      <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-5500CB border-bottom">
          <button className="btn btn-primary" id="menu-toggle" onClick={handleToggle}>
            Show Menu
          </button>
          <form className="form-inline my-2 my-lg-0 ml-3">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
      
        </nav>
        <div className="container-fluid ">
          <h1 className="mt-4">Monthly Report</h1>
          <div className="row">

            <div className="col-lg-3">
              <div className="card text-white bg-primary mb-3">
                <div className="card-body">
                  <h5 className="card-title">Total Students</h5>
                  <p className="card-text">2800</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card text-white bg-success mb-3">
                <div className="card-body">
                  <h5 className="card-title">Total Teachers</h5>
                  <p className="card-text">1200</p>
                </div>
              </div>
            </div>



            <div className="col-lg-3">
              <div className="card text-white bg-danger mb-3">
                <div className="card-body">
                  <h5 className="card-title">Total Classes</h5>
                  <p className="card-text">900</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card text-white bg-warning mb-3">
                <div className="card-body">
                  <h5 className="card-title">Total Subjects</h5>
                  <p className="card-text">11</p>
                </div>
              </div>
              
            </div>
            <div className="col-lg-3">
              <div className="card text-white bg-primary mb-3">
                <div className="card-body">
                  <h5 className="card-title">Total Events</h5>
                  <p className="card-text">60</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card text-white bg-success mb-3">
                <div className="card-body">
                  <h5 className="card-title">Total Parents</h5>
                  <p className="card-text">2780</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card text-white bg-danger mb-3">
                <div className="card-body">
                  <h5 className="card-title">Total Exams</h5>
                  <p className="card-text">22</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card text-white bg-warning mb-3">
                <div className="card-body">
                  <h5 className="card-title">Total Fee</h5>
                  <p className="card-text">$15</p>
                </div>
              </div>
              
            </div>
            <div className="col-lg-3">
              <div className="card text-white bg-primary mb-3">
                <div className="card-body">
                  <h5 className="card-title">Total Salary</h5>
                  <p className="card-text">$600</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card text-white bg-success mb-3">
                <div className="card-body">
                  <h5 className="card-title">Total Results</h5>
                  <p className="card-text">2800</p>
                </div>
              </div>
            </div>
            
            
            
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;









 