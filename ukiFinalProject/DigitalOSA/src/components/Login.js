import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Card, CardContent, Typography, CardActionArea, Grid, FormControl, CircularProgress } from '@material-ui/core';
import { Face } from '@material-ui/icons';
import SignInSide from "./SignIn";
import AuthService from "../services/auth.service";

const style = {
  root: {
    minWidth: 275,
    backgroundColor:'white',
    marginTop: 20,
    color: 'black'
  }
}


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
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

    this.setState({
      message: "",
      loading: true
    });

    AuthService.login(this.state.username, this.state.password)
      .then(() => {
     
      
        window.location.reload();
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          loading: false,
          message: resMessage
        });
      }
    );
  }

  render() {
    return (
    
  
      <Grid container spacing={3}>
      
                          <Form onSubmit={this.handleLogin}>
        
                    <TextField
                         onChange={this.onChangeUsername}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="userName"
              label="Username"
              name="UserName"
              autoComplete="email"
              autoFocus
            />
            <TextField
               onChange={this.onChangePassword}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
            
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
      
            >
              Log In
            </Button>
   
                  <Grid container spacing={1}>
                      <Grid item xs={12} alignItems='center'>
                        {/* <Face style={{ fontSize: 80 }}/> */}
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl>
                          <label htmlFor="username">Username</label>
                          <Input type="text" name="username" value={this.state.username}
                            onChange={this.onChangeUsername}/>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                      <FormControl>
                          <label htmlFor="password">Password</label>
                          <Input type="password" name="password" value={this.state.password}
                            onChange={this.onChangePassword}/>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl marginTop='20'>
                          <button disabled={this.state.loading}>
                            {this.state.loading && (
                              <CircularProgress size='10'/>
                            )}
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
                </Form>
           
  
      </Grid>
    );
  }
}
