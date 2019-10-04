import * as React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

const classes = {
  nav: "navigation",
  link: "link",
  icon: "icon"
};

const Nav = () => {
  return (
    <div className={classes.nav}>
      <NavLink className={classes.link} to="/">
        Home
      </NavLink>
    </div>
  );
};

export default Nav;
