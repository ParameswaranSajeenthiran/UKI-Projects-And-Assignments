import React, { Component } from "react";

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from "./Container";
import { TextField,Button,FormControl } from "@material-ui/core";
const style = {
  root: {
    minWidth: 275,
   backgroundImage:"https://img.wallpapersafari.com/desktop/1280/1024/15/74/142AZu.jpg",
    marginTop: 20,
    height: "200px",
    color: 'black'
  },
  title: {
    fontSize: 24,
    textAlign:'center'
  },
}
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }
  
  
  render() {
 

 
    return (
      <React.Fragment>
        <Grid container>
          <Grid item xs={2}/>
          <Grid item xs={8}>
            <Paper>
              <Card style={style.root} variant="outlined">
                <CardContent>
                  <Typography variant="overline" display="block" style={style.title} gutterBottom>
                   "Welcome"
                   
                  </Typography>
                 <FormControl>
                  <TextField id="subCommunity"label="enter sub community">
                    
                  </TextField>
                  <br/>
                  <br/>
                  <Button variant="contained" color="primary">
                   <strong>enter community</strong> 
                  </Button>
                 </FormControl>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={2}/>
        </Grid>
      </React.Fragment>
      
    );
  }
}
