import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { Grid, TextField, Button } from "@material-ui/core";
import "./Form.scss";
import { IService, Note } from "../../entities/Notes";
import { blankNote } from "../../static/state";
import { Paths } from '../../static/routes';

export interface MatchParams {
  id: string;
}

export interface INoteProps extends RouteComponentProps<MatchParams> {
  service: IService;
}

export interface INoteState {
  //should enforce immutability
  note: Note;
}

const classes = {
  button: "button",
  root: "note-form",
  textField: "text",
  buttonGroup: "button-group"
};

class NoteForm extends React.Component<INoteProps, INoteState> {
  constructor(props: INoteProps) {
    super(props);
    let note = blankNote;
    if (this.props.match && this.props.match.params.id) {
      note = this.props.service.read(this.props.match.params.id);
    }

    this.state = { note: { ...note } };
  }

  componentDidMount() {
    let item =  this.props.service.read(0)

    if (typeof item === "boolean" && item === false) {
      this.props.history.push(Paths.ROOT);
    }
  }

  _handleDelete = () => {
    this.setState({ note: blankNote });
    this.props.history.push(Paths.NOTES);
  };

  _onSubmit = () => {
    const { title, description } = { ...this.state.note };

    const note = new Note(title, description);
    const service = this.props.service;
    if (this.props.match && this.props.match.params.id) {
      service.update(this.props.match.params.id, note);
    } else {
      service.create(note);
    }

    this.props.history.push(Paths.NOTES);
  };

  _handleChange = (event: React.ChangeEvent) => {
    let element = event.target as HTMLInputElement;
    let note = this.state.note;
    //advanced typings required for using [key]: value. Don't have time !
    if (element.id === "title") {
      note.title = element.value;
    } else {
      note.description = element.value;
    }
    this.setState({ note: note });
  };

  render() {
    return (
      <Grid
        container
        spacing={1}
        className={classes.root}
        alignItems="center"
        justify="center"
      >
        <Grid item xs={10}>
          <TextField
            id="title"
            label="Title"
            className={classes.textField}
            value={this.state.note.title}
            onChange={this._handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={10}>
          <TextField
            id="description"
            label="Description"
            className={classes.textField}
            multiline
            rows={1}
            rowsMax={7}
            onChange={this._handleChange}
            value={this.state.note.description}
            fullWidth
          />
        </Grid>

        <Grid
          container
          spacing={2}
          className={classes.buttonGroup}
          alignItems="center"
          justify="center"
        >
          <Grid item xs={5} md={4}>
            <Button
              variant="contained"
              className={classes.button}
              color="primary"
              fullWidth
              onClick={this._onSubmit}
            >
              Save
            </Button>
          </Grid>
          <Grid item xs={5} md={4}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              className={classes.button}
              onClick={this._handleDelete}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(NoteForm);
