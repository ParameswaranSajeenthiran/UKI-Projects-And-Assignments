import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MenuIcon from '@material-ui/icons/Menu';
import { Paper, Typography, AppBar, Toolbar, Button, IconButton } from "@material-ui/core";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import { AccountCircle } from "@material-ui/icons";


const style = {
  paper: {
    flexGrow: 1,
    backgroundColor: 'darkred',
    color: '#c5cae9'
  },
  menuButton: {
    spacing: 2,
  },
  link: {
    underline: 'none'
  },
  appBar: {
    backgroundColor: "darkred"
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    let user;
    if (localStorage.getItem('username')) {
      user = {
        username: localStorage.getItem('username'),
        id: localStorage.getItem('id'),
        email: localStorage.getItem('email'),
        roles: localStorage.getItem('roles'),
      };
    }

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN")
      });
    }
  }

  logOut () {
    localStorage.clear()
  }

  render() {
    
    const { currentUser, showAdminBoard } = this.state;

    return (
      <Router>
        <div className="app">
          <AppBar position="static" style={style.appBar}>
            <Toolbar>
              <Paper style={style.paper} elevation={0}>
                {/* <IconButton edge="start" style={style.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton> */}
                <Button href="/" color='inherit'>
                  <Typography><strong>Books shop</strong></Typography>
                </Button>
                <Button href="/home" color='inherit'>
                  <strong>Home</strong>
                </Button>
                    <Button href="/admin" color='inherit'>
                    <strong>Add Book</strong>
                  </Button>
                     <Button href="/list" color='inherit'>
                    <strong>Booklist</strong>
                  </Button>
                
                {showAdminBoard && (
                  <Button href="/admin" color='inherit'>
                    <strong>Add Book</strong>
                  </Button>
                )}
                {currentUser && (
                  <Button href="/list" color='inherit'>
                    <strong>Booklist</strong>
                  </Button>
                )}
              </Paper>
              
              {currentUser ? (
                <Paper style={style.appBar} elevation={0}>
                  <Button href="/profile" color='inherit'>
                    <AccountCircle style={{ fontSize: 40 }}/>
                    <strong>{currentUser.username}</strong>
                  </Button>
                  <Button href="/login" color='inherit' onClick={this.logOut}>
                    <strong>LogOut</strong>
                  </Button>
                </Paper>
              ) : (
                <Paper style={style.appBar}elevation={0}>
                  <Button href="/login" color='inherit'>
                    <strong>Login</strong>
                  </Button>
                  <Button href="/register" color='inherit'>
                    <strong>Sign Up</strong>
                  </Button>
                </Paper>
              )}
            </Toolbar>
          </AppBar>

          <div>
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/list" component={BookList} />
              <Route path="/admin" component={AddBook} />
            </Switch>
          </div>
        
        </div>
      </Router>
    );
  }
}

export default App;
