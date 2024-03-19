import React from "react";
import "./style.css";
import { Stack } from "react-bootstrap";
import { menuItems } from "./config";
import { Link } from "react-router-dom";
import { images } from "../../utils/images";

const Navbar = () => {
  return (
    <Stack direction="horizontal" className="navbar_container">
      <img src={images.logo} className="nav_logo" />
      <Stack direction="horizontal" className="menu_container">
        {menuItems?.map((el) => {
          return (
            <Link className="menu_item" to={el?.path}>
              {el?.title}
            </Link>
          );
        })}
      </Stack>
      <Stack direction="horizontal" className="info_container">
        <Link className="menu_item" to="/cart">
          Cart
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
