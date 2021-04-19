import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {ButtonGroup, Card,Button, CardContent, Paper,Typography, Grid, FormControl, TextField } from '@material-ui/core';
import { Face, LaptopWindows } from '@material-ui/icons';

import BookList from "./BookList";

import Container from "./Container";
import axios from 'axios'

const data = [{ 
  id:1,
      title:"Harry Potter and the Philosopher's Stone",
      author:" J. K. Rowling",
      isbn:"	0-7475-3269-9",
      lang:"	English",
      genre:"	Fantasy",
      price:1395.00 ,
      photoUrl:"https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg"

},{ 
  id:2,
  title:"Harry Potter and the Chamber of Secrets",
  author:" J. K. Rowling",
  isbn:"	0-7475-3849-2",
  lang:"	English",
  genre:"	Fantasy",
  price:1495.00 ,
  
  photoUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Harry_Potter_and_the_Chamber_of_Secrets.jpg/220px-Harry_Potter_and_the_Chamber_of_Secrets.jpg"
},{ 
id:3,
  title:"Harry Potter and the Prisoner of Azkaban ",
  author:" J. K. Rowling",
  isbn:"0-7475-4215-5",
  lang:"	English",
  genre:"	Fantasy",
  price:1495.00 ,
  photoUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg/220px-Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg"
},{ 
  id:4,
  title:"Harry Potter and the Goblet of Fire",
  author:" J. K. Rowling",
  isbn:"	0-7475-4624-X",
  lang:"	English",
  genre:"	Fantasy",
  price:2095.00 ,
  photoUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Harry_Potter_and_the_Goblet_of_Fire_cover.png/220px-Harry_Potter_and_the_Goblet_of_Fire_cover.png"
},{ 
  id:4,
  title:"Harry Potter and the Order of the Phoenix ",
  author:" J. K. Rowling",
  isbn:"0-7475-5100-6",
  lang:"	English",
  genre:"	Fantasy",
  price:2450.00 ,
  photoUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Harry_Potter_and_the_Order_of_the_Phoenix.jpg/220px-Harry_Potter_and_the_Order_of_the_Phoenix.jpg"
},{ 
  id:5,
  title:"Harry Potter and the Half-Blood Prince",
  author:" J. K. Rowling",
  isbn:"	0-7475-8108-8",
  lang:"	English",
  genre:"	Fantasy",
  price:3000,
  photoUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Harry_Potter_and_the_Half-Blood_Prince_cover.png/220px-Harry_Potter_and_the_Half-Blood_Prince_cover.png"

},
{id:6,
  title:"Harry Potter and the Deathly Hallows",
  author:" J. K. Rowling",
  isbn:"		0-545-01022-5",
  lang:"	English",
  genre:"	Fantasy",
  price:3100,
  photoUrl:"https://upload.wikimedia.org/wikipedia/en/a/a9/Harry_Potter_and_the_Deathly_Hallows.jpg"
}]





const style = {
  root: {
    minWidth: 275,
    backgroundImage: "linear-gradient( 178.2deg,  rgba(118,8,23,1) 10.9%, rgba(158,12,33,1) 62.6% )",
    marginTop: 20,
    color: 'black'
  }
}
export default class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:"",
      author:"",
      isbn:"",
      lang:"",
      genre:"",
      price:"",
      }
}
  componentDidMount() {
    
        this.setState({
          content: "User Board content"
        });
  }
  onChangeTitle = (e) => {
    this.setState({
      title: e.target.value
    });
  }
  onChangeAuthor = (e) => {
    this.setState({
      author: e.target.value
    });
  }

  onChangeIsbn = (e) => {
    this.setState({
      isbn: e.target.value
    });
  }
  onChangePrice = (e) => {
    this.setState({
      price: e.target.value
    });
  }

  onChangeLang = (e) => {
    this.setState({
     lang: e.target.value
    });
  }
  
  onChangeGenre = (e) => {
    this.setState({
      genre: e.target.value
    });
  }


  handleBook = (e) => {
    e.preventDefault();
      axios.post("http://localhost:8080/books",this.state)
     .then((res)=>{
     console.log(res)})
      
    console.log(localStorage.data)
   
      const tempData=JSON.parse(localStorage.getItem("data"));
      console.log(tempData);
      tempData.push({title:this.state.title,author:this.state.author,isbn:this.state.isbn,
      lang:this.state.lang,genre:this.state.genre,price:this.state.price,photoUrl:this.state.photoUrl})
      localStorage.data=JSON.stringify(tempData);
    console.log(localStorage.data)

this.setState({
  added:true
})
window.location.reload()

  }
 reset=()=>{
   this.setState({
    title:"",
    author:"",
    isbnNo:"",
    lang:"",
    genre:"",
    price:"",

   })
 }

  render() {

 
   
    
    // localStorage.setItem("data",JSON.stringify(data))
// if(localStorage.getItem("data"=="")){
//   localStorage.setItem("data",JSON.stringify(data))
// }
     
   if(this.state.added){
      return(
<BookList />
      )
    }
    else{
      return (

        <React.Fragment>
        <Grid container>
          <Grid item xs={1}/>
          <Grid item xs={10}>
            <Paper>
              <Card style={style.root} variant="outlined">
                <CardContent>
                  <Typography variant="overline" display="block" style={style.title} gutterBottom>
                  Add New book
                  </Typography>
                
                  <form className={style.root} >
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <label htmlFor="title">Book Title</label>
                            <TextField   margin="normal" type="text" name="title" value={this.state.title}
                              onChange={this. onChangeTitle}/>
                          </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <label htmlFor="author">Author Name</label>
                            <TextField   margin="normal" type="text" name="author" value={this.state.author}
                              onChange={this. onChangeAuthor}/>
                          </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <label htmlFor="coverPhotoUrl">Cover Photo URL</label>
                            <TextField  type="text" name="coverPhotoUrl" value={this.state.photoUrl}
                              onChange={this. onChangeUrl}/>
                          </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <label htmlFor="isbn">ISBN Number</label>
                            <TextField type="text" name="isbn" value={this.state.isbn}
                              onChange={this. onChangeIsbn}/>
                          </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <label htmlFor="username">Price</label>
                            <TextField type="text" name="username" value={this.state.price}
                              onChange={this. onChangePrice}/>
                          </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <label htmlFor="username">Language</label>
                            <TextField type="text" name="username" value={this.state.lang}
                              onChange={this. onChangeLang}/>
                          </FormControl>
                    </Grid>
                       <Grid item xs={6}>
                        <FormControl fullWidth>
                            <label htmlFor="username">Genre</label>
                            <TextField type="text" name="username" value={this.state.genre}
                              onChange={this.onChangeGenre}/>
                          </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                          <FormControl>
                          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
  <Button onClick={this.handleBook} type="submit">Save</Button>
  <Button onClick={this.reset}>Reset</Button>
  <Button href="/list" color="primary">Booklist</Button>
  <Router>
    <Switch>
  <Route path="/list" component={BookList} />
  </Switch>
  

  </Router>
</ButtonGroup>
                          </FormControl>
                        </Grid>
                    
  
  
  
                  </form>
  
                </CardContent>
              </Card>
              <div><h1>{this.state.title}</h1></div>
              <div><h1>{this.state.author}</h1></div>
              <div><h1>{this.state.isbn}</h1></div>
              <div><h1>{this.state.price}</h1></div>
              <div>{this.state.lang}</div>
              <div>{this.state.photoUrl}</div>
  
            </Paper>
          </Grid>
          <Grid item xs={1}/>
        </Grid>
      </React.Fragment>
      );

    }
    
  }
}
