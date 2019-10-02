import * as React from "react";
import { TextField, Grid, Button } from "@material-ui/core";

import "./login.scss";
import { UserService } from "../../entities/User";
import { LocaleContext } from "../../entities/Context";
import { withRouter, RouteComponentProps } from "react-router-dom";

export interface ILoginProps extends RouteComponentProps<any> {
  init: Function;
}

export interface ILoginState {
  name: string;
  password: string;
}

const classes = {
  root: "loginForm",
  textField: "input",
  button: "button",
  buttonGroup: "button-group"
};

class Login extends React.Component<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);

    this.state = { name: "", password: "" };
  }

  _handleDelete = () => {
    this.setState({ name: "", password: "" });
  };

  _onSubmit = () => {
    let ctx = new LocaleContext("users");
    let usrSvc = UserService(ctx);

    let isValid = usrSvc.validate(this.state.name, this.state.password);
    if (isValid) {
      alert(" Welcome !");
      this.props.init(this.state.name, ctx);
      this.props.history.push("/notes/");
    } else {
      alert("failure");
    }
  };

  _handleChange = (event: React.ChangeEvent) => {
    let element = event.target as HTMLInputElement;

    //advanced typings required for using [key]: value. Don't have time !

    if (element.id === "name") {
      this.setState({ name: element.value });
    } else {
      this.setState({ password: element.value });
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
            id="name"
            label="Username"
            className={classes.textField}
            value={this.state.name}
            onChange={this._handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={10} md={4}>
          <TextField
            id="password"
            label="Password"
            className={classes.textField}
            type="password"
            onChange={this._handleChange}
            value={this.state.password}
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
          <Grid item xs={8} md={4}>
            <Button
              variant="contained"
              className={classes.button}
              color="primary"
              fullWidth
              onClick={this._onSubmit}
            >
              Sumbit
            </Button>
          </Grid>
          <Grid item xs={8} md={4}>
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

export default withRouter(Login);
