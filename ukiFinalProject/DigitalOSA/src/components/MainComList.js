import React, { useState ,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import SubComList from './SubComList';
import Dashboard from './Dashboard';
import axios from 'axios'
import { Alert, AlertTitle } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CloseIcon from '@material-ui/icons/Close';
import { TextField,FormControl } from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';
// import Dashboard from "./Dashboard";
// import Alert from '@material-ui/lab/Alert';

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

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  noMatch:{
  align:"center"},
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
   root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const cards = [
 {      key:1,
        name:"royal college"
   },
   {      key:2,
    name:"D.S.Senanayake college"
},
{      key:3,
    name:"Hindu college, Jaffna"
},
{      key:4,
    name:"Moratuwa University"
}
];





export default function MainComList() {
const [userName, setUserName] = React.useState(localStorage.getItem("username"));
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);
  const [search, setSearch] = React.useState("");

 const [page,setPage]=React.useState(1);
const [subCom,setSubCom]=useState([]);
const [joinedSubCom,setJoinedSubCom]=useState([]);
const [id,setId]=useState(222);

const [mainCom,setMainCom]=useState([]);

const handleSearch=(ele)=>{
axios.get('http://localhost:8080/com?pageNo=1&pageSize=100&sortBy=id',{
    headers: {
        'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
    }
})
        .then(response=>{
        console.log(response.data)
         setMainCom(response.data.data)
        
        }
        )
setSearch(ele.target.value)
if(search==""){

  axios.get('http://localhost:8080/com?pageNo=1&pageSize=100&sortBy=id',{
    headers: {
        'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
    }
})
        .then(response=>{
        console.log(response.data)
         setMainCom(response.data.data)
        
        }
        )

console.log(search)

}else{
//console.log(data.filter((item)=>item.title.toLowerCase().indexOf(this.state.search)>-1))
const  searched=mainCom.filter((item)=>item.name.toLowerCase().includes(search))
console.log(searched)
setMainCom(searched)
}
}
 useEffect(()=>{
          axios.get(`http://localhost:8080/com?pageNo=${page-1}&pageSize=6&sortBy=id`,{
            headers: {
                'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
            }
        })
                .then(response=>{
                 console.log(response.data)
                 setMainCom(response.data.data)
          
                })
        },[page])
 
        
  const handleChange = (event, value) => {
    setPage(value);
  };
      
       
const handleClick=(ele)=>{
localStorage.removeItem("id")
localStorage.setItem("id",ele)
console.log(ele)
}


 useEffect(()=>{
         localStorage.removeItem("MainId")
          localStorage.removeItem("MainName")
             localStorage.removeItem("MainMotto")
                localStorage.removeItem("MainNumMembers") ;
                 	localStorage.removeItem("MainImage")  ;              
        },[])
           useEffect(()=>{  ;
          axios.get(`http://localhost:8080/com/userMainCom/${userName}`,{
            headers: {
                'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
            }
        })
                .then(response=>{
             
                 console.log(response.data)
                 setJoinedSubCom(response.data)
          
                })
        },[])

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        {/* <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar> */}
      </AppBar>
      <main>
        {/* Hero unit */}
         
        <div id="joinSubcommunity">
     
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          
          
           <Grid container spacing={4}>
            {joinedSubCom.length?(joinedSubCom.map((card) => (
              <Grid item key={card.key} xs={12} sm={6} md={4}>
        
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                    {/* {card.Des} */}
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    
                    <Button href="/mainCom"onClick={()=>{localStorage.setItem("MainId",card.id)
                    localStorage.setItem("MainName",card.name)
                    localStorage.setItem("MainMotto",card.motto)
                    localStorage.setItem("MainImage",card.coverPhoto[0])
                    localStorage.setItem("MainNumMembers",card.numMembers) }} size="small" color="primary">
                      Join
                      {/* <Alert variant="filled" severity="success">
                            Join successfully
                        </Alert> */}
                    </Button>
               
                    <Button size="small" color="primary">
                     View
                    </Button>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))):null}
            <br/>  <br/>  <br/>  <br/>  <br/>
          </Grid>
          
            </Container>
            <Container id="exploreCom" className={classes.cardGrid} maxWidth="md">
          <div class="row">
          <div class="col-md-12">
            <h3 class="section-title">Explore Communities</h3>
            
     
            <div class="section-title-divider"></div>
           
            <p class="section-description"><br/><br/> <TextField fullWidth  onChange={handleSearch} label ="search" variant="filled"placeholder=""></TextField> </p>
          </div>
         
        </div>  <Pagination count={10} page={page} color="primary" onChange={handleChange} />
          <Grid container spacing={4}>
           
            {mainCom.length!=0?(mainCom.map((card) => (
              <Grid item key={card.key} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.coverPhoto=!null?(card.coverPhoto):("https://source.unsplash.com/random")}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                    {/* {card.Des} */}
   Motto:{card.motto}
                    </Typography>
                         <Typography>
                    {/* {card.Des} */}
                   Address:{card.bankAcc}
                    </Typography>
                    
                         <Typography>
                    {/* {card.Des} */}
                  Telephone No:{card.numMem}
                    </Typography>
                    
                    
                  </CardContent>
                  <CardActions>
                    
                 { userName==null?(<div><Button  variant="contained"  color="primary" onClick={()=>{alert("try clicking VIEW, you have to signUp or Login to join a community")}}size="small" color="primary">join</Button></div>):(<div><Button href="/mainCom"  variant="contained"  onClick={()=>{localStorage.setItem("MainId",card.id)
                    localStorage.setItem("MainName",card.name)
                    localStorage.setItem("MainMotto",card.motto)
                    localStorage.setItem("MainNumMembers",card.numMembers)
                     localStorage.setItem("MainImage",card.coverPhoto[0]) }}  size="small" color="primary">    Join
                      {/* <Alert variant="filled" severity="success">
                            Join successfully
                        </Alert> */}
                    </Button></div>)}
               
                    <Button href="/subCom" onClick={()=>{localStorage.setItem("MainId",card.id)
                    localStorage.setItem("MainName",card.name)
                    localStorage.setItem("MainMotto",card.motto)
                    localStorage.setItem("MainNumMembers",card.numMembers)
                     localStorage.setItem("MainImage",card.coverPhoto[0])}}size="small" color="primary">
                     View
                    </Button>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))):<div className={classes.noMatch}>  <h1>No Match found</h1>  </div>}
          </Grid>
        </Container>
        </div>
 
      </main>
      {/* Footer */}
     
      {/* End footer */}
    </React.Fragment>
  );
}
