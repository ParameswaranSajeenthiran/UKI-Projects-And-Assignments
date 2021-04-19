import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


toast.configure();

function Stripe() {
 const [subCom,setSubCom]=React.useState(localStorage.getItem("subId"));
const [mainCom,setMainCom]=React.useState(localStorage.getItem("MainId"));

  async function handleToken(token, addresses) {
  console.log(token,addresses)
  console.log(token.id);
  console.log(token.email)
  const response = await axios.post(
      "http://localhost:8080/api/auth/payment",
      { token:token.id,
      stripeEmail:token.email,
       description: "donation",
      amount:1000000},{  headers: {
          'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
      }}
    );
     const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    };
     axios.post("http://localhost:8080/com/events",{
	"title":token.email,
	"description":"donation",
	"subCom":subCom,
	"mainCom":mainCom,
	image:[]
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
    <div >
      
      <StripeCheckout
        stripeKey="pk_test_51IhpT4IBqkG6qdaTShgZOOhkSmHpFdH351SbDC4fOAqHIUAWPpC8Bzm7WzjxDfl1sof6vFWqQZkRlaytX790yP5u00g3lKobMN"
        token={handleToken}
        amount={100}
        name="Tesla Roadster"
        billingAddress
        shippingAddress
      />
    </div>
  );
}
export default Stripe
  
