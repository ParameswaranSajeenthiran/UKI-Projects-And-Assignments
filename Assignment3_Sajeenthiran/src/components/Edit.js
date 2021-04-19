import React, { Component } from "react";

import { Card, CardContent, Paper,Typography, Grid, FormControl, TextField } from '@material-ui/core';
import { Face } from '@material-ui/icons';


import Container from "./Container";
import BookList from "./BookList";

const style = {
    root: {
      minWidth: 275,
      backgroundColor:'white',
      marginTop: 20,
      color: 'black'
    }
  }
export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title:"",
          author:"",
          isbn:"",
          lang:"",
          genre:"",
          price:"",
          photoUrl:"",
          added:false
          
    
        };
     }
     handleBook=()=>{
       alert("Saved successfully")
       this.setState({
         added:true
       })
     }
     render() {
const b=this.props.book.map(detail=>detail)
 console.log(this.props.book)
  console.log(b[0].title)
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
                      Edit Book
                      </Typography>
                    
                      <form className={style.root} onSubmit={this.handleBook}>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <label htmlFor="title">Book Title</label>
                                <TextField   margin="normal" type="text" name="title" value={b[0].title}
                                  onChange={this. onChangeTitle}/>
                              </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <label htmlFor="author">Author Name</label>
                                <TextField   margin="normal" type="text" name="author" value={b[0].author}
                                  onChange={this. onChangeAuthor}/>
                              </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <label htmlFor="coverPhotoUrl">Cover Photo URL</label>
                                <TextField  type="text" name="coverPhotoUrl" value={b[0].photoUrl}
                                  onChange={this. onChangeUrl}/>
                              </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <label htmlFor="isbn">ISBN Number</label>
                                <TextField type="text" name="isbn" value={b[0].isbn}
                                  onChange={this. onChangeIsbn}/>
                              </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <label htmlFor="username">Price</label>
                                <TextField type="text" name="username" value={b[0].price}
                                  onChange={this. onChangePrice}/>
                              </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <label htmlFor="username">Language</label>
                                <TextField type="text" name="username" value={b[0].lang}
                                  onChange={this. onChangeLang}/>
                              </FormControl>
                        </Grid>
                           <Grid item xs={6}>
                            <FormControl fullWidth>
                                <label htmlFor="username">Genre</label>
                                <TextField type="text" name="username" value={b[0].genre}
                                  onChange={this.onChangeGenre}/>
                              </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                              <FormControl>
                                <button  type="submit">
                                  <span>Save</span>
                                </button>
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