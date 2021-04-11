import React, { Component } from "react";


import { Button ,Card, CardContent, Grid, FormControl, Typography, TextField, Paper } from '@material-ui/core';
import { Face } from '@material-ui/icons';
import Checkout from "./Checkout";
const style={
    root:{
        margin:"50px",
        padding:"10px"
    }
}
class CreateSubCommunity extends Component{
    constructor(props){
        super(props);
this.state={
    name:"",
    age:"",

street:"",
state:"",
country:"",

    Ocupation:"",
    communityName:"",
    yearCommunityStarted:"",
    yearjoinedCommunity:"",
    addMembers:"",
    skills:""
}

}

changeName=(ele)=>{
    this.setState({
        name:ele.target.value
    })
}
changeAge=(ele)=>{
    this.setState({
        age:ele.target.value
    })
}
changeOccupation=(ele)=>{
    this.setState({
        occupation:ele.target.value
    })
}
changeStreet=(ele)=>{
    this.setState({
        street:ele.target.value
    })
}
changeState=(ele)=>{
    this.setState({
        state:ele.target.value
    })
}
changeyearstarted=(ele)=>{
    this.setState({
        yearstarted :ele.target.value
    })
}
changeCountry=(ele)=>{
    this.setState({
        country:ele.target.value
    })
}
changeyearCommunityStarted=(ele)=>{
    this.setState({
        yearCommunityStarted:ele.target.value
    })
}
changeYearjoinedCommunity=(ele)=>{
    this.setState({
        yearjoinedCommunity:ele.target.value
    })
}
changeSkills=(ele)=>{
    this.setState({
        skills:ele.target.value
    })
}
changeCommunityName=(ele)=>{
    this.setState({
        communityName:ele.target.value
    })
}




render(){
    return (
        <div>

            <Checkout/>
<FormControl><Grid container>
<Grid item xs={3}/>
    <Grid item xs={8}>
  
        <Paper>
        <br></br><br></br>
    <TextField variant="outlined" id="name" label="name"onChange={this.changeName}>

</TextField>
<br></br>
<br></br>

<TextField variant="outlined" id="age" label="age" onChange={this.changeAge}>

</TextField>
<br></br>
<br></br>
<TextField variant="outlined" id="occupation" label="Occupation">

</TextField>

<br></br><br></br>
<TextField variant="outlined" id="skills" label="your personel skills" onChange={this.changeSkills}>

</TextField>
<br></br><br></br>
<label htmlFor="adress">adress</label>
<div id="adress">

<br></br>

<TextField variant="outlined" id="street" label="Street" onChange={this.changeStreet}>

</TextField>

<TextField variant="outlined"  id="state" label="state"onChange={this.changeState}>

</TextField>
<TextField variant="outlined" id="country" label="country">

</TextField>

</div>
<br></br><br></br>
<TextField variant="outlined"id="subCommunity" label="sub Community Name" onChange={this.changeCommunityName}>

</TextField>
<br></br><br></br>
<TextField variant="outlined" id="yearStarted" label="year community started" onChange={this.changeyearstarted}>

</TextField>
<br></br><br></br>
<TextField variant="outlined"id="yearjoined" label="year you joined the community"onChange={this.changeYearjoinedCommunity}>

</TextField>

</Paper>

    </Grid>
    <Grid item xs={1}/>
</Grid>
   
    
</FormControl>

        </div>
    )
}
}export default CreateSubCommunity