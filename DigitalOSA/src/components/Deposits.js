import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import axios from 'axios'
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
  const [id,setId]=React.useState(localStorage.getItem("id"));
  const [subCom,setSubCom]=React.useState(0);
  React.useEffect(()=>{
          axios.get(`http://localhost:8080/com/SubCom/${id}`,{
            headers: {
                'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
            }
        })
                .then(response=>{
                 console.log(response.data)
                 setSubCom(response.data.length)
          
                })
        },[])
  return (
    <React.Fragment>
      <Title>Recent Participants</Title>
      <Typography component="p" variant="h4">
        {subCom}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
