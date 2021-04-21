import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios'
import SignInSide from "./SignUp";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import AuthService from "../services/auth.service";
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { makeStyles } from '@material-ui/core/styles';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const image={
  width:"100%",
  height:"600px"
}
const form={
  margin:"10px"
  
}
const classes={
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
   backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: "20px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: "100px 50px ",
    backgroundColor:"",
  },
  form: {
    width: '75%', // Fix IE 11 issue.
    
    margin:"10px 10px 10px 10px "
  },
  submit: {
    margin:"10px",
  },
}


// const classes = useStyles();



export default class CreateMainCom extends Component {
  constructor(props){
    super(props);
this.state={name:"",
numMembers:"",
motto:"",
bankAcc:"",
subCom:[],
coverPhoto:[],
image:[],
 loading: false,
      message: ""

  }
  }


  
  changeName=(ele)=>{
    this.setState({
        name:ele.target.value
    })
   
}
changeDescription=(ele)=>{
  this.setState({
    numMembers:ele.target.value
  })
}
changeId=(ele)=>{
 this.setState({
   motto:ele.target.value
 })
}

numMembers=(ele)=>{
 this.setState({
   bankAcc:ele.target.value
 })
}

com1=(ele)=>{
    this.setState({
      subName :ele.target.value
    })
   
  }
  
  
  changeId=(ele)=>{
    this.setState({
      subId:ele.target.value
    })
   
  }
  com2=(ele)=>{
    this.setState({
        subMotto:ele.target.value
    })
   
  }
  com3=(ele)=>{
    this.setState({
        subBankAcc:ele.target.value
    })
   
  }
    com4=(ele)=>{
    this.setState({
        subNumMem:ele.target.value
    })
   
  }
nextPage=()=>{
  this.setState((prevState) => ({
    page: prevState.page + 1
}), () => {
    console.log('Callback value = ', this.state.page)
  }
 )

}
prevPage=()=>{
  this.setState((prevState) => ({
    page: prevState.page - 1
}), () => {
    console.log('Callback value = ', this.state.page)
  }
 )
}

 handleSubmit1=()=>{
   
      axios.post("http://localhost:8080/com",{
       "name":this.state.name,
"numMembers":this.state.numMem,
"motto":this.state.motto,
"bankAcc":this.state.bankAcc,
"subCom":[]
 
     },{  headers: {
          'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
      }}).then((res)=>{console.log(res)})
            localStorage.setItem("MainName",this.state.name)
      localStorage.setItem("MainName",this.state.name)
                    localStorage.setItem("MainMotto",this.state.motto)
                    localStorage.setItem("MainNumMembers",this.state.numMembers) 
    }



  handleClick=()=>{
  console.log(this.state)
        axios.post("http://localhost:8080/com",this.state,{  headers: {
          'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
      }})
      
         }

  handleLogin = (e) => {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    AuthService.createMain(this.state.name,this.state.motto,this.state.bankAcc)
      .then((response) => {
        this.props.history.push("/createSubCom");
        window.location.reload();
        console.log(response.data)
         localStorage.setItem("MainId",response.data.id);
              localStorage.setItem("MainName",this.state.name);
                    localStorage.setItem("MainMotto",this.state.motto);
                    localStorage.setItem("MainNumMembers",this.state.numMembers) ;
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
   
    
    componentDidMount(){
      localStorage.removeItem("MainId")
          localStorage.removeItem("MainName")
             localStorage.removeItem("MainMotto")
                localStorage.removeItem("MainNumMembers")
    }
    
    
  onFileChangeHandler = (e) => {
    e.preventDefault();
    var elements=[];
    console.log(e.target.files.length)
    let files = e.target.files
    console.log(files)
    for(let i = 0; i<e.target.files.length; i++){
    let reader = new FileReader()
    reader.readAsDataURL(files[i])
    reader.onload = (e) => {
      console.log(" Imagedata",e.target.result)
      elements.push(e.target.result)
    this.setState({coverPhoto:this.state.coverPhoto.push(elements)})
    }
   console.log(this.state.coverPhoto)
  }
  localStorage.setItem("image",JSON.stringify(this.state.coverPhoto[0]))
  this.setState({image:[...this.state.image,JSON.parse(localStorage.getItem("image"))]})
  console.log(this.state.image)
  }

render(){

    return (
        <React.Fragment>
<Grid container component="main" className={classes.root}>
      <CssBaseline />
      {/* <Grid item xs={6} className={classes.image} /> */}
     <Grid item xs={5}  className={classes.image} >      <img style={image} src="https://source.unsplash.com/random"></img></Grid>
      <Grid item xs={7} component={Paper} elevation={6} square>
        <div className={classes.paper}>

          <form style={form} noValidate>
  
        <div>
        <Typography variant="h6" gutterBottom>
          Create Main Communty
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
          
            <TextField onChange={this.changeName}
           variant="outlined"
              required
              id="firstName"
              name="firstName"
              label=" Community name"
              fullWidth
              autoComplete="given-name"
            /><div>{this.state.comId}</div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField      onChange={this.motto}
         required
        variant="outlined"
              id="lastName"
              name="motto"
              label="motto"
              fullWidth
              autoComplete="family-name"
            /><div>{this.state.name}</div>
          </Grid>
          <Grid item xs={12}>
            <TextField
           variant="outlined"
          onChange={this.changeDescription }
              required
              id="address1"
              name="address1"
              label="address line1"
              fullWidth
              autoComplete="shipping address-line1"
            /><div>{this.state.description}</div>
          </Grid>
          
          <Grid item xs={12}>
            <TextField
     variant="outlined"
              id="address2"
              name="address2"
              label="adress line 2"
              fullWidth
              autoComplete="shipping address-line2"
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField onChange={this.changeId}
          variant="outlined"
              required
              id="city"
              name="city"
              label="city "
              fullWidth
              autoComplete="shipping address-level2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField variant="outlined" id="state" name="state" label="Bank Name" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
        variant="outlined"
              required
              id="zip"
              name="zip"
              label="Bank Name"
              fullWidth
              autoComplete="shipping postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            variant="outlined"
              required
              id="country"
              name="country"
              label="Telephone No"
              fullWidth
              autoComplete="shipping country"
            /><input type="file" multiple onChange={this.onFileChangeHandler }/>
          </Grid>
          <Grid item xs={12}>
          
          </Grid>
        </Grid></div>
  {
        this.state.page==1?(
<div>
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
          /><button onClick={this.handleSubmit}>submit this button</button>
        </Grid>
      </Grid>
</div>
        ):null
      } {this.state.page==2?(
        
          <div>
            <Grid item xs={12}>
              <Paper><Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Summary
              </Typography>
              <Typography variant="h6" gutterBottom>
                Main Community Name
                </Typography>
                <Typography variant="h6" gutterBottom>
                Main Community Motto
                </Typography>
                <Typography variant="h6" gutterBottom>
                Main Community Bank Account No
                </Typography>
                <Typography variant="h6" gutterBottom>
                Main Community Number Of Members
                </Typography>
                <Typography variant="h6" gutterBottom>
                Sub Community Name
                </Typography>
                <Typography variant="h6" gutterBottom>
                sub Community Motto
                </Typography>
                <Typography variant="h6" gutterBottom>
                Sub Community number of Members
                </Typography>
                <Typography variant="h6" gutterBottom>
                Sub Community bank Account
                </Typography>

              </Grid>
              <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Summary
              </Typography>
              <Typography variant="h6" gutterBottom>
                {this.state.name}
                </Typography>
                <Typography variant="h6" gutterBottom>
                {this.state.motto}
                </Typography>
                <Typography variant="h6" gutterBottom>
                {this.state.name}
                </Typography>
                <Typography variant="h6" gutterBottom>
                {this.state.bankAcc}
                </Typography>
                <Typography variant="h6" gutterBottom>
                {this.state.numMem}
                </Typography>
                <Typography variant="h6" gutterBottom>
                {this.state.subName}
                </Typography>
                <Typography variant="h6" gutterBottom>
                {this.state.motto}
                </Typography>
                <Typography variant="h6" gutterBottom>
                {this.state.subnNumMem}
                </Typography>
                <Typography variant="h6" gutterBottom>
                {this.state.subBankAcc}
                </Typography>
              </Grid>
           
              </Paper>
            </Grid>
          </div>
        
      ):null}
           
         
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              
              onClick={this.handleLogin}>
                       Create Main Community
            </Button>
            <Grid container>
             
           
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
      
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
        </Grid><button onClick={this.handleSubmit}>submit button</button>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          /><button onClick={this.handleSubmit}>submit this button</button>
        </Grid>
      </Grid><div>
     
     
      </div>
      </React.Fragment>
    
    )
  
    }
    
  }
