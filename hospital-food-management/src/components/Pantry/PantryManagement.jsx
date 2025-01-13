import React from "react";
import "./pantryManagement.css";

function PantryManagement() {
  return (
    <div className="pantry-management">
      <h2>Manage Pantry</h2>
      <button className="btn btn-success">Add Pantry Staff</button>
      <div className="pantry-tasks mt-3">
        <p>Details of pantry tasks will be displayed here.</p>
      </div>
    </div>
  );
}

export default PantryManagement;
