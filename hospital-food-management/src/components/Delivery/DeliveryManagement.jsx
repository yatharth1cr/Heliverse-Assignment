import React from "react";
import "./deliveryManagement.css";

function DeliveryManagement() {
  return (
    <div className="delivery-management">
      <h2>Delivery Status</h2>
      <button className="btn btn-info">Track Deliveries</button>
      <div className="delivery-list mt-3">
        <p>Delivery details will be displayed here.</p>
      </div>
    </div>
  );
}

export default DeliveryManagement;
