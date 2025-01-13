import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard/Dashboard";
import PatientManagement from "./components/Patient/PatientManagement";
import PantryManagement from "./components/Pantry/PantryManagement";
import DeliveryManagement from "./components/Delivery/DeliveryManagement";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="">
        {/* Navbar Component */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patients" element={<PatientManagement />} />
          <Route path="/pantry" element={<PantryManagement />} />
          <Route path="/delivery" element={<DeliveryManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
