import React, { useState ,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';

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
import axios from 'axios'
import Dashboard from './Dashboard';
import MainFeaturedPost from './MainFeaturedPost';
import Popover from '@material-ui/core/Popover';
import { TextField,Button,FormControl } from "@material-ui/core";
import CancelIcon from '@material-ui/icons/Cancel';
import AuthService from "../services/auth.service";
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
 typography: {
    padding: theme.spacing(2),
  },
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
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
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

export default function CreatedMainCom() {
  const [anchorEl, setAnchorEl] = React.useState(null);
    const [userName, setUserName] = React.useState(JSON.parse(localStorage.getItem("user")).username);

  const user1=JSON.parse(localStorage.getItem("user")).username
 
const [joined,setJoined]=useState(true);
const [subCom,setSubCom]=useState([]);
const [joinedSubCom,setJoinedSubCom]=useState([]);
const [id,setId]=useState(localStorage.getItem("MainId"));
const [name,setName]=useState(localStorage.getItem("MainName"));
const [motto,setMotto]=useState(localStorage.getItem("MainId"));
const [numMembers,setNumMembers]=useState(localStorage.getItem("MainNumMembers"));
console.log(userName)
console.log(id)

         

        
      

useEffect(()=>{
         localStorage.removeItem("subId")
          localStorage.removeItem("subName")
             localStorage.removeItem("subMotto")
                localStorage.removeItem("subNumMembers")
                  localStorage.removeItem("joinedSubId")
          localStorage.removeItem("joinedSubName")
             localStorage.removeItem("joinedSubMotto")
                localStorage.removeItem("joinedSubNumMembers")
                 
        },[])

const mainFeaturedPost = {
  title: name,
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};
 const handleClose = () => {
    setAnchorEl(null);
  };
 const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
    const open = Boolean(anchorEl);
  const id1 = open ? 'simple-popover' : undefined;

  const classes = useStyles();

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
        <MainFeaturedPost post={mainFeaturedPost} />
     
       
           
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
              
                <Grid item>
                  <a href="/createSubCom">
                  <Button variant="outlined" color="primary">
                    Create SubCommunity
                  </Button>
                  </a>
                </Grid>
              </Grid>
            </div>
       
   
        <div id="joinSubcommunity">
        { user1!=null?(   <div class="row">
          <div class="col-md-12">
            <h3 class="section-title">Communities You joined</h3>
            <div class="section-title-divider"></div>
           
            <p class="section-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium<br/> <TextField label ="search" variant="filled"placeholder=""></TextField><CancelIcon/></p>
          </div>
        </div> ):null}
         <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {joinedSubCom?(joinedSubCom.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
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
            
                   <Button aria-describedby={id1} variant="contained" color="primary" >
        join
      </Button>
      <Popover
        id1={id1}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>joined succefully</Typography>
      </Popover>
                   
                   <Button onClick={()=>{if(user1!=null){axios.post("http://localhost:8080/com/joinSub",
                   {"subCom":card.id,
                   "memberJoined":"sajeenthiran",
                   "isMember":true },{
                    
            headers: {
                'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
            }
        }).then((res)=>{console.log(res)});
        localStorage.setItem("joinedSubId",card.id)
                    localStorage.setItem("joinedSubName",card.name)
                    localStorage.setItem("joinedSubMotto",card.motto)
                    localStorage.setItem("joinedSubNumMembers",card.numMembers) }} } size="small" color="primary">    Join
                      {/* <Alert variant="filled" severity="success">
                            Join successfully
                        </Alert> */}
                    </Button>
                   
                   <Button  href="/subCom"onClick={()=>{localStorage.setItem("subId",card.id)
                    localStorage.setItem("subName",card.name)
                    localStorage.setItem("subMotto",card.motto)
                    localStorage.setItem("subNumMembers",card.numMembers)} }  size="small" color="primary">
                     View
                    </Button>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))):null}
          </Grid>
        </Container>
        
        
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {subCom.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
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
            
                   <Button aria-describedby={id1} variant="contained" color="primary" >
        join
      </Button>
      <Popover
        id1={id1}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>joined succefully</Typography>
      </Popover>
                   
                   <Button  onClick={()=>{axios.post("http://localhost:8080/com/joinSub",
                   {"subCom":card.id,
                   "memberJoined":localStorage.getItem("username"),
                   "isMember":true,
                   "mainCom":localStorage.getItem("MainId") },{
                    
            headers: {
                'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
            }
        }).then((res)=>{console.log(res)});
        localStorage.setItem("joinedSubId",card.id)
                    localStorage.setItem("joinedSubName",card.name)
                    localStorage.setItem("joinedSubMotto",card.motto)
                    localStorage.setItem("joinedSubNumMembers",card.numMembers)
                    localStorage.setItem("subId",card.id)
                    localStorage.setItem("subName",card.name)
                    localStorage.setItem("subMotto",card.motto)
                    localStorage.setItem("subNumMembers",card.numMembers) }}  size="small" color="primary">    Join
                      {/* <Alert variant="filled" severity="success">
                            Join successfully
                        </Alert> */}
                    </Button>
                   
                   <Button  href="/subCom"onClick={()=>{localStorage.setItem("subId",card.id)
                    localStorage.setItem("subName",card.name)
                    localStorage.setItem("subMotto",card.motto)
                    localStorage.setItem("subNumMembers",card.numMembers)} }  size="small" color="primary">
                     View
                    </Button>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
