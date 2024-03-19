import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

const MainLayout = () => {
  return (
    <div className="main_outer_container">
      <Navbar />
      <div className="main_container">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
