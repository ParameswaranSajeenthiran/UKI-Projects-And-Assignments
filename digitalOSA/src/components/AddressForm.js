import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default class AddressForm extends Component {
  constructor(props){
    super(props);
this.state={name:"",
description:"",
comId:"",
numMembers:""


}

    }
 
    changeName=(ele)=>{
      this.setState({
          name:ele.target.value
      })
     
  }
  changeDescription=(ele)=>{
    this.setState({
      description:ele.target.value
    })
  }
 changeId=(ele)=>{
   this.setState({
     comId:ele.target.value
   })
 }
 changeSubCommunities=(ele)=>{
   this.setState({
     subCom:ele.target.value
   })
 }
  numMembers=(ele)=>{
   this.setState({
     numMembers:ele.target.value
   })
 }

 componentWillUnmount(){
   localStorage.setItem("name",this.state.name)
   localStorage.setItem("bankAcc",this.state.description)
   localStorage.setItem("motto",this.state.comId)
  localStorage.setItem("numMembers",this.state.numMembers)
   
 }
getName(){
  return this.name
}
  
  render(){
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personel Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        
          <TextField onChange={this.changeName}
            required
            id="firstName"
            name="firstName"
            label=" Community name"
            fullWidth
            autoComplete="given-name"
          /><div>{this.state.comId}</div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField      onChange={this.numMembers}
       required
            id="lastName"
            name="lastName"
            label="number of members"
            fullWidth
            autoComplete="family-name"
          /><div>{this.state.name}</div>
        </Grid>
        <Grid item xs={12}>
          <TextField
        onChange={this.changeDescription }
            required
            id="address1"
            name="address1"
            label="bank Account"
            fullWidth
            autoComplete="shipping address-line1"
          /><div>{this.state.description}</div>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="bank"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField onChange={this.changeId}
            required
            id="city"
            name="city"
            label="motto"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )

  }
  
}
