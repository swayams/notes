import * as React from "react";
import { User } from "../../entities/User";
import { Grid, Paper } from "@material-ui/core";
import Note from "../note/Note";

import './notes.scss';

import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import { withRouter, RouteComponentProps } from "react-router";


const classes = {
    addButton: 'add',
    root: 'notes-list'
}

export interface INoteListProps extends RouteComponentProps<any> {
  user: User;
}

export interface INoteListState {}

class NoteList extends React.Component<INoteListProps, INoteListState> {
  constructor(props: INoteListProps) {
    super(props);
    this.state = {};
  }

  _new = () => {

    this.props.history.push('/note')

  }
  render() {
    return (
      <Grid container
      spacing={1}
      alignItems="center"
      justify="center"
      className={classes.root}>
        <Grid item xs={10}>
           <Paper elevation={1}> <AddCircleOutlinedIcon className={classes.addButton} onClick={this._new}/> </Paper>
        </Grid>

        <Grid item xs={10}>
          {this.props.user.notes.map((note, index) => {
              return ( <Note key={index} {...note}></Note>)
          })}
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(NoteList);
