import React from "react";
import { Route } from "react-router-dom";

import Grid from "@material-ui/core/Grid";

import Login from "../login/Login";
import NoteList from "../notes/Notelist";

import "./App.scss";
import { LocaleContext } from "../../entities/Context";
import { User } from "../../entities/User";
import NoteForm from "../form/Form";
import { NotesService, IService } from "../../entities/Notes";
import { blankNotesService, blankUser, blankContext } from "../../static/state";
import Nav from "../nav/Nav";
import { Paths } from '../../static/routes';

const classes = {
  root: "container"
};

export interface IAppProps {}

export interface IAppState {
  user: User;
  context: LocaleContext;
  notesSvc: IService;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      user: blankUser,
      context: blankContext,
      notesSvc: blankNotesService
    };
  }

  initSession = (userName: string, context: LocaleContext) => {
    let user = context.Users.filter(user => user.userName === userName)[0];
    let svc = NotesService(user, context)
    console.log(svc)
    this.setState({
      user: user,
      context: context,
      notesSvc: svc
    } );
    
  };

  render() {
    const { notesSvc, user, ...rest } = { ...this.state };

    return (
      <Grid container spacing={2} max-width="sm" className={classes.root}>
        <Grid item xs={12}>
          <Nav></Nav>
        </Grid>
        <Grid item xs={12}>
          <Route
            exact
            path= {Paths.ROOT}
            component={() => <Login init={this.initSession} />}
          />
          <Route
            exact
            path={Paths.NOTES}
            component={() => <NoteList user={user} service={notesSvc} />}
          />
          <Route
            exact
            path={Paths.NOTE}
            component={() => <NoteForm service={notesSvc} />}
          />
          <Route
            exact
            path={`${Paths.NOTE}/:id`}
            component={() => <NoteForm service={notesSvc} />}
          />
        </Grid>
      </Grid>
    );
  }
}

export default App;
