import * as React from "react";
import { TextField } from "@material-ui/core";

export interface ILoginProps {}

export interface ILoginState {
    name: string,
    password: string
}

const classes = {
    textField: 'input'
}

class Login extends React.Component<ILoginProps, ILoginState> {

  handleChange =  ( e: React.FormEvent, type: string) => {
      let change  = { [type] : e.target.value}
  }
  render() {
    return (
      <form>
        <TextField
          id="name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={(e) => this.handleChange(e, "name") }
          margin="normal"
        />

        <TextField
          id="password"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          onChange={(e) => this.handleChange(e, "password") }
          margin="normal"
        />
      </form>
    );
  }
}

export default Login;
