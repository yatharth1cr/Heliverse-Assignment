import React from "react";
import "./patientManagement.css";

function PatientManagement() {
  return (
    <div className="patient-management">
      <h2>Manage Patients</h2>
      <button className="btn btn-primary">Add New Patient</button>
      <div className="patient-list mt-3">
        <p>List of patients will be displayed here.</p>
      </div>
    </div>
  );
}

export default PatientManagement;
