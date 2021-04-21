import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Title from './Title';
import axios from 'axios';
import Input from '@material-ui/core/Input';
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function preventDefault(event) {
  event.preventDefault();
}


const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});



export default function Deposits() {
  const classes = useStyles();
  const [subCom,setSubCom]=React.useState(localStorage.getItem("subId"));
const [mainCom,setMainCom]=React.useState(localStorage.getItem("MainId"));

  
  const date=new Date();
  
   console.log(date)
   const [value, setValue] = React.useState(500);
   const [nameOfDonator, setNameOfDonator] = React.useState("30");
  const [id,setId]=React.useState(localStorage.getItem("subId"));
  const [subComMem,setSubComMem]=React.useState(0);
  
    const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };
  
  React.useEffect(()=>{
          axios.get(`http://localhost:8080/com/activities/${id}`,{
            headers: {
                'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
            }
        })
                .then(response=>{
                 console.log(response.data)
               setSubComMem(response.data.length)
          
                })
        },)
        
        async function handleToken(token, addresses) {
        
  console.log(token,addresses)
  console.log(token.id);
  console.log(token.email)
  console.log(token.card.name)
  const response = await axios.post(
      "http://localhost:8080/api/auth/payment",
      { token:token.id,
      date:new Date(),
      stripeEmail:token.email,
       description: "donation",
      amount:value},{  headers: {
          'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
      }}
    );
     const { status } = response.data;
    console.log("Response:", response.data);
    setNameOfDonator(addresses.billing_name)
      toast("Success! Check email for details", { type: "success" });
   
     axios.post("http://localhost:8080/com/events",{
	"title":"title",
	"description":"donation",
	"subCom":subCom,
	"mainCom":mainCom,
	"amount":value,
	
	image:[token.email,date.toLocaleString("en-US"),token.card.name]
},{
            headers: {
                'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
            }
        })
         .then(response=>{
                 console.log(response.data)
                
          
                });
  
  
  }
  return (
    <React.Fragment>
      <Title>Recent Participants</Title>
      <Typography component="p" variant="h6">
        {subComMem}
      </Typography>
  
       <Title>Donate</Title>
           <Typography color="textSecondary" className={classes.depositContext}>
       Rs.{value}.00
      </Typography>
       <TextField
         onChange={handleInputChange}
           
          id="outlined-number"
          label="Rs.00"
          type="number"
         
          InputLabelProps={{
            shrink: true,
         
          }}
          variant="outlined"
        />
       
         <div >
      
      <StripeCheckout        stripeKey="pk_test_51IhpT4IBqkG6qdaTShgZOOhkSmHpFdH351SbDC4fOAqHIUAWPpC8Bzm7WzjxDfl1sof6vFWqQZkRlaytX790yP5u00g3lKobMN"
        token={handleToken}
        amount={value}
        name="Tesla Roadster"
        billingAddress
        shippingAddress
        panelLabel="Donate money"
       />
    </div><br/><br/>
     
    </React.Fragment>
  );
}
