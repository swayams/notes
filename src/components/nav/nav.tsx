import * as React from "react";
import "./nav.scss";
import { NavLink } from "react-router-dom";
import { Icon, makeStyles, Theme, createStyles } from "@material-ui/core";


export interface INavProps {}

export interface INavState {}

const useStyles =makeStyles( (theme: Theme) => {
    createStyles({
        
    })
})

const classes = {
  nav: "navigation",
  link: 'link',
  icon: 'icon'
};

class Nav extends React.Component<INavProps, INavState> {
  constructor(props: INavProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={classes.nav}>
        <NavLink className={classes.link} to="/">Home</NavLink>
        <NavLink className={classes.link} to="/notes"> Your Notes</NavLink>
        <NavLink className={classes.link} to="/note"> <Icon color="primary">add_circle</Icon> </NavLink>
      </div>
    );
  }
}

export default Nav;
