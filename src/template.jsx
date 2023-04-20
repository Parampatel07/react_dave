import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
class Template extends Component {
  render() {
    return (
     <div className="wrapper">
        <nav id="sidebar" className="sidebar" style={{height:"500px"}} >
          <a className="sidebar-brand" href=" /">
            Home managment
          </a>
          <div className="sidebar-content" >
            <div className="sidebar-user">
              <h3 className="fw-bold">Param Patel</h3>
              <span>Admin panel</span>
            </div>
            <ul className="sidebar-nav" >
              <li className="sidebar-header">Main</li>
              <li className="sidebar-item">
                <a href="dashboard_admin.php" className="sidebar-link ">
                  <i className="align-middle "></i>
                  <span className="align-middle">Dashboards</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  href="category_management.php"
                  className="sidebar-link collapsed"
                >
                  <i className="align-middle "></i>{" "}
                  <span className="align-middle">Category management </span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="feedback.php" className="sidebar-link collapsed">
                  <i className="align-middle "></i>{" "}
                  <span className="align-middle">Feedback management </span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  href="customer_management.php"
                  className="sidebar-link collapsed"
                >
                  <i className="align-middle "></i>{" "}
                  <span className="align-middle">Customer management </span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  href="service_provider_show.php"
                  className="sidebar-link collapsed"
                >
                  <i className="align-middle "></i>{" "}
                  <span className="align-middle">Service's Management</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <Outlet />
          
      </div>
    );
  }
}
export default Template;
