
import React, { useState ,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Grid,TextField,Button} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
//import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
// import Main from './Main';
import Sidebar from './Sidebar';
import axios from 'axios'
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import ActivityPost from './ActivityPosts';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
//import { makeStyles } from '@material-ui/core/styles';
//import TextField from '@material-ui/core/TextField';





const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Scout', url: '#' },
  { title: 'Intract club', url: '#' },
  { title: 'Chess club', url: '#' },
  { title: 'Student Union', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'Events Make strong Bonding among Members',
  description:
    "Share your lovrly moments ",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: '..',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
// }));

// export default function DateAndTimePickers() {
//   const classes = useStyles();

//   return (
//     <form className={classes.container} noValidate>
//       <TextField
//         id="datetime-local"
//         label="Next appointment"
//         type="datetime-local"
//         defaultValue="2017-05-24T10:30"
//         className={classes.textField}
//         InputLabelProps={{
//           shrink: true,
//         }}
//       />
//     </form>
//   );
// }
const styles={
image:{width:"300px",
height:"150px"}}


export default function Activities() {
const [image,setImage]=React.useState([]);
const [subCom,setSubCom]=useState(localStorage.getItem("subId"));
const [mainCom,setMainCom]=useState(localStorage.getItem("MainId"));
const [title,setTitle]=useState("");
const [description,setDescription]=useState("");
const [events,setEvents]=React.useState([]);
 const onFileChangeHandler = (e) => {
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
    setImage(elements)
    }
   console.log(elements)
  }}
const [selectedImage,setSelectedImage]=React.useState([]);
const handleImage =(e)=>{
console.log(e.target.files)

if(e.target.files){

const filesArray=Array.from(e.target.files).map((file)=>URL.createObjectURL(file))
console.log(e.target.files)

setSelectedImage((prevImages)=>prevImages.concat(prevImages))
Array.from(e.target.files).map((file)=>URL.revokeObjectURL(file))


}}

 const onChange = e => {
    const files = Array.from(e.target.files)
    console.log(e.target.files)

    const formData = new FormData()

    files.forEach((file, i) => {
      formData.append(i, file)
    })
    console.log(formData)
}
const renderPhotos=(source)=>{
return source.map((photo)=>{
return<img  src={photo}key={photo}/>})}
const renderImages=(image)=>{
return image.map((img)=>{
return<img  src={img}key={img}/>})}
  const classes = useStyles();

const submit=()=>{
  axios.post("http://localhost:8080/com/events",{
	"title":title,
	"description":description,
	"subCom":subCom,
	"mainCom":mainCom,
	image:image
},{
            headers: {
                'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
            }
        })
         .then(response=>{
                 console.log(response.data)
                
          
                });
                  window.location.reload();
                
    
}
 useEffect(()=>{
          axios.get(`http://localhost:8080/com/events${subCom}`,{
            headers: {
                'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
            }
        })
                .then(response=>{
                 console.log(response.data)
                 setEvents(response.data)
          
                })
        },[])
 


const changeTitle=(e)=>{
setTitle(e.target.value)
}

const changeDescription=(e)=>{
setDescription(e.target.value)
}
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* <Header title="Blog" sections={sections} />   */}
      {image.length?image.map((image)=>(<div class="gallery">
  <a target="_blank" href="img_5terre.jpg">
    <img src={image} alt="Cinque Terre" width="600" height="400"/>
  </a>
  <div class="desc">Add a description of the image here</div>
</div>)):null}
    
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
       
          <Grid container spacing={4}>
             <div> {image.length?image.map((image)=><img style={styles.image} src={image}/>):null}
{renderPhotos(selectedImage)}
</div>
          <TextField  onChange={changeTitle}   fullWidth  label="Event Name " variant="filled"></TextField>
          <TextField onChange={changeDescription}      fullWidth  label="Event Description" variant="filled"></TextField>

<input type="file"  id="photo" multiple onChange={onFileChangeHandler }/>
 <Button variant="contained" color="primary"> <label className="photo" htmlFor="photo"><AddAPhotoIcon fontSize="large"/></label>        </Button>

      
                  <Button variant="contained" onClick={submit} color="primary">
                    Upload Event
                  </Button>
            {events.length?(events.reverse().map((post) => (
              <ActivityPost key={post.title} post={post} />
            ))):null}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Grid item>
            {/* <Main title="From the firehose" posts={posts} /> */}
            
            {/* <p># Sample blog post

#### April 1, 2020 by [Olivier](/)

This blog post shows a few different types of content that are supported and styled with
Material styles. Basic typography, images, and code are all supported.
You can extend these by modifying `Markdown.js`.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.

Curabitur blandit tempus porttitor. **Nullam quis risus eget urna mollis** ornare vel eu leo.
Nullam id dolor id nibh ultricies vehicula ut id elit.

Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.
Aenean lacinia bibendum nulla sed consectetur.

## Heading

Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

### Sub-heading

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

### Sub-heading

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.
Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
sit amet risus.

- Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
- Donec id elit non mi porta gravida at eget metus.
- Nulla vitae elit libero, a pharetra augue.

Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.

1.  Vestibulum id ligula porta felis euismod semper.
2.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
3.  Maecenas sed diam eget risus varius blandit sit amet non magna.

Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p> */}
</Grid>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
       {image.length?image.map((image)=>(<div class="gallery">
  <a target="_blank" href="img_5terre.jpg">
    <img src={image} alt="Cinque Terre" width="600" height="400"/>
  </a>
  <div class="desc">Add a description of the image here</div>
</div>)):null}
      {/* <Footer title="Footer" description="Something here to give the footer a purpose!" /> */}
    </React.Fragment>
  );
}
