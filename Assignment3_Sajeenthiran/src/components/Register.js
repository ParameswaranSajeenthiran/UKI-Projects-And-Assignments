import React, { Component } from "react";


import { Button ,Card, CardContent, Grid, FormControl, Typography, TextField } from '@material-ui/core';
import { Face } from '@material-ui/icons';


const style = {
  root: {
    minWidth: 275,
    backgroundColor:'darkred',
    marginTop: 20,
    color: '#e0f7fa'
  },
  pwd:{pwd:"red"}
}

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      message: "",
      successful: false.target,
      pwdValidation:"",
      emailValidation:""
    };
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    });

    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(e.target.value.match(mailformat))
{
  this.setState({
    emailValidation:"valid Email adress"
  })

}
else
{
  this.setState({
    emailValidation:" invalid email address!"
  })

}
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });

var passw=  /^[A-Za-z]\w{7,14}$/;
if(e.target.value.match(passw)) 
{ 

this.setState({
  pwdValidation:"valid password"
})
}
else
{ 
  this.setState({
    pwdValidation:" password must contain 7 to 16 characters which contain only characters, numeric digits, underscore and first character must be a letter"
  })

}
}
  

  handleRegister = (e) => {
    e.preventDefault();

    if (this.state.username && this.state.email && this.state.password) {
      console.log(this.state.username + " " + this.state.password + " " + this.state.email)
      this.setState({
        successful: true,
        message: "Registered successfully"
      })
      localStorage.setItem("username",this.state.username)
      localStorage.setItem("email",this.state.email)


    } else {
      this.setState({
        successful: false,
        message: "username/password/email is empty"
      })
    }
  }

  render() {
    localStorage.setItem('roles',"ROLE_ADMIN")
    return (
      <Grid container>
        <Grid item xs={4}/>
        
        <Grid item xs={3}>
          <Card style={style.root}>
              <CardContent>
                <form onSubmit={this.handleRegister}>
                  {!this.state.successful && (
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
                          <label htmlFor="email">Email</label>
                          <TextField type="text" name="email" value={this.state.email}
                            onChange={this.onChangeEmail}/><br/><h5 style={style.pwd}>{this.state.emailValidation}</h5>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <label htmlFor="password">Password </label>
                          <TextField type="password" name="password" value={this.state.password}
                            onChange={this.onChangePassword}/><br/><h5 style={style.pwd}>{this.state.pwdValidation}</h5>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl>
                          <Button color="primary">Sign Up</Button>
                        </FormControl>
                      </Grid>
                  </Grid>
                  )}
                  {
                    this.state.message && (
                    <div>
                      <Typography color={this.state.successful ? 'primary' : 'error'} variant="overline" display="block" gutterBottom>
                          <strong>{this.state.message}</strong>
                      </Typography>
                    </div>
                  )
                  }
                </form>
              </CardContent>
        </Card>
        </Grid>
        <Grid item xs={4}/>
      </Grid>
    );
  }
}

