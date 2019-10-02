import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Grid, TextField, Button } from "@material-ui/core";
import { LocaleContext } from "../../entities/Context";
import { User } from "../../entities/User";

import "./form.scss";

export interface MatchParams {
  id: string;
}

export interface INoteProps extends RouteComponentProps<MatchParams> {}

export interface INoteState {
  title: string;
  description: string;
  context: LocaleContext;
  user: User;
}

const classes = {
  button: "button",
  root: "note-form",
  textField: "text",
  buttonGroup: 'button-group',

};

class Note extends React.Component<INoteProps, INoteState> {
  constructor(props: INoteProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
      context: new LocaleContext(""),
      user: new User("", "", "")
    };
  }

  _handleDelete = () => {
    this.setState({ title: "", description: "" });
    this.props.history.push('/notes')
  };

  _onSubmit = () => {}

  _handleChange = (event: React.ChangeEvent) => {
    let element = event.target as HTMLInputElement;

    //advanced typings required for using [key]: value. Don't have time !

    if (element.id === "title") {
      this.setState({ title: element.value });
    } else {
      this.setState({ description: element.value });
    }
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
        <Grid item xs={10} md={4}>
          <TextField
            id="title"
            label="Title"
            className={classes.textField}
            value={this.state.title}
            onChange={this._handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={10} md={4}>
          <TextField
            id="description"
            label="Description"
            className={classes.textField}
            rows={4}
            rowsMax={7}
            onChange={this._handleChange}
            value={this.state.description}
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
              Submit
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

export default Note;
