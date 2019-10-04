import React from "react";
import { Route } from "react-router-dom";

import Grid from "@material-ui/core/Grid";

import Login from "../login/login";
import NoteList from "../notes/notelist";

import "./App.scss";
import { LocaleContext } from "../../entities/Context";
import { User } from "../../entities/User";
import NoteForm from "../form/form";
import { NotesService, IService } from "../../entities/Notes";

const classes = {
  paper: "content",
  root: "container"
};

export interface IAppProps {}

export interface IAppState {
  user: User;
  context: LocaleContext;
}

class App extends React.Component<IAppProps, IAppState> {
  notesSvc: IService;

  constructor(props: IAppProps) {
    super(props);
    this.state = { user: new User("", "", ""), context: new LocaleContext("") };

    this.notesSvc = {
      create: () => { return false },
      update: () => { return false },
      remove: () => { return false },
      read: () => {  return false }
    };
  }

  initSession = (userName: string, context: LocaleContext) => {
    let user = context.Users.filter(user => user.userName === userName)[0];
    this.setState({ user: user, context: context });
    this.notesSvc = NotesService(user, context);
  };

  render() {
    return (
      <Grid container spacing={2} max-width="sm" className={classes.root}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Route
            exact
            path="/"
            component={() => <Login init={this.initSession} />}
          />
          <Route
            exact
            path="/notes"
            component={() => (
              <NoteList user={this.state.user} service={this.notesSvc} />
            )}
          />
          <Route
            exact
            path="/note"
            component={() => <NoteForm svc={this.notesSvc} />}
          />
          <Route
            exact
            path="/note/:id"
            component={() => <NoteForm svc={this.notesSvc} />}
          />
        </Grid>
      </Grid>
    );
  }
}

export default App;
