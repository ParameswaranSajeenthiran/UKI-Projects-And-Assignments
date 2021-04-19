import React, { Component } from "react";

import { Card, CardContent, Typography, Grid, FormControl, TextField } from '@material-ui/core';
import { Face } from '@material-ui/icons';


const style = {
  root: {
    minWidth: 275,
    backgroundColor:'darkred',
    marginTop: 20,
    color: '#e0f7fa'
  }
}

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      message: "",
      email:""
    };
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin = (e) => {
    e.preventDefault();

    if (this.state.username && this.state.password) {
          console.log("username = " + this.state.username)
          console.log("password = " + this.state.password)
          localStorage.setItem('id', '1');
          localStorage.setItem('username', this.state.username);
          localStorage.setItem('email', this.state.email);
          localStorage.setItem('roles', 'ROLE_ADMIN');
          this.props.history.push("/profile");
          window.location.reload();
    } else {
      this.setState({
        message: "Empty username or password"
      })
    }
  }

  render() {


    
    return (
      <Grid container>
        <Grid item xs={4}/>
        <Grid item xs={2}>
          <Card style={style.root}>
              <CardContent>
                <form onSubmit={this.handleLogin}>
                  <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Face style={{ fontSize: 80 }}/>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <label htmlFor="username">Username</label>
                          <TextField type="text" name="username" value={this.state.username}
                            onChange={this.onChangeUsername}/>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <label htmlFor="password">Password</label>
                          <TextField type="password" name="password" value={this.state.password}
                            onChange={this.onChangePassword}/>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl>
                          <button>
                            <span>Login</span>
                          </button>
                        </FormControl>
                      </Grid>
                  </Grid>
                  {this.state.message && (
                    <div>
                      <Typography color='error' variant="overline" display="block" gutterBottom>
                          <strong>{this.state.message}</strong>
                      </Typography>
                    </div>
                  )}
                </form>
              </CardContent>
        </Card>
        </Grid>
        <Grid item xs={5}/>
      </Grid>
    );
  }
}
