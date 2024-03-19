import React from "react";
import { Stack } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "./style.css";

const AuthLayout = () => {
  return (
    <Stack className="main_container">
      <Stack className="form_container">
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default AuthLayout;
