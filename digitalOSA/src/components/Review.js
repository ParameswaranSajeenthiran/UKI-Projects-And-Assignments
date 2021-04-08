
import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import axios from 'axios'
const products = [
  { name: 'Commuinity name', desc: 'school', price: 'D.s.senanayake college' }];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'sajeenthiran', detail: 'visa' }
  
];

const classes={
  listItem: {
    padding:"20px"},
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: "10px",
  }
}

export default class Review extends Component {
  constructor(props){
    super(props);
    this.state={
     
     /* name:localStorage.getItem("name"),
      numMembers:localStorage.numMem,
       motto:localStorage.getItem("motto"),
      bankAcc:localStorage.getItem("bankAcc"),
           subCom:[
    {id:localStorage.getItem("id"),
     name:localStorage.getItem("name"),
     numMem:localStorage.numMem,
     bankAcc:localStorage.getItem("bankAcc"),
     motto:localStorage.getItem("motto")
     
     }]*/
     
     
      name:"ROYAL",
      numMembers:"tewrnty",
       motto:"liuve giver grow",
      bankAcc:"ewerw",
           subCom:[
    {id:"hhhh",
     name:"ROYAL",
     numMem:"ROYAL",
     bankAcc:"ROYAL",
     motto:"ROYAL"
     
     }]
    }
  }

  handleSubmit=()=>{
  console.log(this.state)
    axios.post("http://localhost:8080/com",this.state,{  headers: {
        'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
    }})


    localStorage.removeItem("name")
    localStorage.removeItem("numMem")
    localStorage.removeItem("motto")
    localStorage.removeItem("bankAcc")
    localStorage.removeItem("id")
    

  }
render(){

  // const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
         summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {/* {JSON.stringify(this.state)} */}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Creator Detials
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid><button onClick={this.handleSubmit}>submit button</button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
            }
}
