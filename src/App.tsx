import React from "react";
import { Switch, Route } from "react-router-dom";

import Grid from "@material-ui/core/Grid";

import Login from "./components/login";
import Note from "./components/note";
import NoteList from "./components/notelist";
import Nav from "./components/nav/nav";

import "./App.scss";

const classes = {
  paper: "content",
  root: "container"
};

const App: React.FC = () => {
  return (
    <Grid container spacing={2} max-width="sm" className={classes.root}>
      <Grid item xs={12}> <Nav /> </Grid>
      <Switch>
        <Grid item xs={12}>
          <Route exact path="/" component={Login} />
          <Route exact path="/notes" component={NoteList} />
          <Route exact path="/note" component={Note} />
          <Route exact path="/note/:id" component={Note} />
                  </Grid>
      </Switch>
    </Grid>
  );
};

export default App;