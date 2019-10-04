import * as React from "react";
import { User } from "../../entities/User";
import {
  Grid,
  GridList,
  GridListTile,
  GridListTileBar
} from "@material-ui/core";
import Note from "../note/Note";

import "./Notelist.scss";

import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import { withRouter, RouteComponentProps } from "react-router";
import { IService } from '../../entities/Notes';
import { Paths } from '../../static/routes';

const classes = {
  addButton: "add",
  root: "notes-list",
  gridList: "notes",
  header: "header"
};

export interface INoteListProps extends RouteComponentProps<any> {
  user: User;
  service: IService
}

export interface INoteListState {}

class NoteList extends React.Component<INoteListProps, INoteListState> {
  constructor(props: INoteListProps) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    if (this.props.user.displayName === '') {
      this.props.history.push(Paths.ROOT)
    }
  }

  _new = () => {
    this.props.history.push(Paths.NOTE);
  };


  render() {
    return (
      <Grid
        container
        spacing={1}
        alignItems="center"
        justify="center"
        className={classes.root}
      >
        <Grid item xs={10}>
          <GridList cellHeight="auto" className={classes.gridList} cols={2}>
            <GridListTile key="Subheader" cols={2} style={{ height: "3em" }}>
              <GridListTileBar
                className={classes.header}
                title={`${this.props.user.displayName}'s Notes`}
                actionIcon={
                  <AddCircleOutlinedIcon
                    className={classes.addButton}
                    onClick={this._new}
                  />
                }
                actionPosition="right"
              />
            </GridListTile>
            {this.props.user.notes.map((note, index) => {
              return <Note key={index} service={this.props.service} id={index} {...note}></Note>;
            })}
          </GridList>
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(NoteList);
