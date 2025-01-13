import React from "react";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Hospital Dashboard</h2>
      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Patients</h5>
            <p className="card-text">Manage patient details and diet charts.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Pantry</h5>
            <p className="card-text">Oversee food preparation and delivery.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Delivery</h5>
            <p className="card-text">Track delivery statuses in real time.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
