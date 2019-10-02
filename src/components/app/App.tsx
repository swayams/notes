import React from "react";
import { Switch, Route } from "react-router-dom";

import Grid from "@material-ui/core/Grid";

import Login from "../login/login";
import Note from "../form/form";
import NoteList from "../notes/notelist";


import "./App.scss";
import { LocaleContext } from '../../entities/Context';
import { User } from '../../entities/User';

const classes = {
  paper: "content",
  root: "container"
};


export interface IAppProps {
  
}
 
export interface IAppState {
  user: User
  context: LocaleContext
}
 
class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = { user: new User('', '', ''), context: new LocaleContext('')  };
  }

  initSession = ( userName: string, context: LocaleContext ) => {
    let user =   context.Users.filter( user => user.userName === userName)[0]
    this.setState({ user: user, context: context})
    
  }

  render() { 
    return (
      <Grid container spacing={2} max-width="sm" className={classes.root}>
        <Grid item xs={12}>
         
        </Grid>        
          <Grid item xs={12}>
            <Route exact path="/" component={() => <Login init={this.initSession} />} />
            <Route exact path="/notes" component={() => <NoteList user={this.state.user}/>} />
            <Route exact path="/note" component={Note} />
            <Route exact path="/note/:id" component={Note} />
          </Grid>
       
      </Grid>
    );
  }
}

export default App;
