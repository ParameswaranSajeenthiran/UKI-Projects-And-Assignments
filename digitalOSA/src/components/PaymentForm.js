import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import axios from 'axios'
export default class PaymentForm extends Component {
  constructor(props){
    super(props);
this.state={
  id:localStorage.getItem("id"),
  name:localStorage.getItem("name"),
  description:localStorage.getItem("description"),

 

 empId:"",
 name:"",
 age:"",
 salary:""
}
}
com1=(ele)=>{
  this.setState({
     name :ele.target.value
  })
 
}


changeId=(ele)=>{
  this.setState({
    empId:ele.target.value
  })
 
}
com2=(ele)=>{
  this.setState({
      age:ele.target.value
  })
 
}
com3=(ele)=>{
  this.setState({
      salary:ele.target.value
  })
 
}



  componentWillUnmount(){
  localStorage.setItem("id",this.state.empId)
  localStorage.setItem("name",this.state.name)
  localStorage.setItem("numMem",this.state.age)
  localStorage.setItem("bankAcc",this.state.salary)

  }

  handleSubmit=()=>{
    axios.post("http://localhost:8080/departments",this.state)
  }
  
render(){
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="SubComunity Name" fullWidth autoComplete="cc-name" onChange={this.changeId}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
          onChange={this.com1}
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="SubCommunity motto" fullWidth autoComplete="cc-exp" onChange={this.com2}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField onChange={this.com3}
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid><button onClick={this.handleSubmit}>submit button</button>
      </Grid>
    </React.Fragment>
  );
}
}
