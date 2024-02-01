import React from "react";
import { Outlet } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <Outlet />
    </div>
  );
}

export default Sidebar;
