import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios'
import React, { Component } from "react";
import Edit from'./Edit';
import { Chip,Card, CardContent, Paper,Typography,Button,ButtonGroup, Grid, FormControl, TextField } from '@material-ui/core';
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'
const classes={
  minWidth: 650
}

    const data=JSON.parse(localStorage.getItem("data"))
const dataStart= [{ 
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
},

{id:6,
  title:"Two Towers",
  author:" J. R. R. Tolkien",
  isbn:"		0-585-0167822-5",
  lang:"	English",
  genre:"	Fantasy",
  price:1000,
  photoUrl:"https://upload.wikimedia.org/wikipedia/en/a/a1/The_Two_Towers_cover.gif"
},
{id:6,
  title:"The return of the kings",
  author:" J. R. R. Tolkien",
  isbn:"		0-545-01022-5",
  lang:"	English",
  genre:"	Fantasy",
  price:1500,
  photoUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/1/11/The_Return_of_the_King_cover.gif/220px-The_Return_of_the_King_cover.gif"
},
{id:6,
  title:"The Fellowship of Ring",
  author:" J. R. R. Tolkien",
  isbn:"		0-545-01722-5",
  lang:"	English",
  genre:"	Fantasy",
  price:1500,
  photoUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/The_Fellowship_of_the_Ring_cover.gif/220px-The_Fellowship_of_the_Ring_cover.gif"
},
{id:6,
  title:"To Kill a Mockingbird",
  author:"Harper Lee",
  isbn:"		0-545-01022-5",
  lang:"	English",
  genre:"	Fantasy",
  price:3100,
  photoUrl:"https://cdn.britannica.com/s:800x1000/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg"
}
]

const columns = [{ 
  Header: 'Title', 
  accessor: 'title' 
},{ 
  Header: 'Author', 
  accessor: 'author' 
},{ 
  Header: 'ISBN ', 
  accessor: 'isbn' 
},
{ 
  Header: 'Price', 
  accessor: 'price' 
},
{ 
  Header: 'Language', 
  accessor: 'lang' 
},{ 
  Header: 'Genre', 
  accessor: 'genre' 
},
{ 
  Header: 'Actions', 
  accessor: 'lang' 
}] 

class BookList extends Component {
constructor(props){
super(props);
}



state={
  s:true,
 search:"",
 data:data,
 data1:[],
 delete:"",
 editComponent:false,
 editBook:"",
 start:0,
 end:2,
 page:1,
 searchState:false

}
goToFirstPage=()=>{
  this.setState({
  start:0,
  end:2
  })
}

goToLastPage=()=>{
  this.setState({
  start:this.state.data.length-2,
  end :this.state.data.length
  })
}

componentDidMount(){
  this.setState({
    data:data
  })
   axios.get("http://localhost:8080/books/page?pageNo=0&pageSize=5&sortBy=id")
                .then(response=>{
                 console.log(response.data)
               this.setState({
               data1:response.data})
          
                })
  
 
}
changeSearch=(ele)=>{
this.setState({
  search:ele.target.value,
  searchState:true
})
console.log(data.filter((item)=>item.title.toLowerCase().indexOf(this.state.search)>-1))
const searched=data.filter((item)=>item.title.toLowerCase().indexOf(this.state.search)>-1)
console.log(searched)
this.setState({
  data:searched
})
}
sortAsc=()=>{
  const sortedData=data.sort(function(a, b){return b.price - a.price})
  console.log(sortedData)
this.setState({
  data:sortedData
})
console.log(this.state.data)
}

sortDsc=()=>{
  console.log(data.sort(function(a, b){return a.price - b.price}))
  const desSorted=data.sort(function(a, b){return a.price - b.price})
this.setState({
  data:desSorted
})
}
delete=(ele)=>{

  const tempData=JSON.parse(localStorage.getItem("data"));
  console.log(tempData);
  const newArr=tempData.filter((item)=>item.title.toLowerCase().indexOf(ele.target.name.toLowerCase())==-1)
  localStorage.data=JSON.stringify(newArr);
console.log(localStorage.data)
window.location.reload()
alert("Book suscessfully deleted")
}
callEditComponent=(ele)=>{

  const edit=this.state.data.filter((item)=>item.title.toLowerCase().indexOf(ele.target.name.toLowerCase())!=-1)
  this.setState({
    editComponent:true,
    editBook:edit
  })
 console.log(ele.target.value)


}

prev=()=>{
  this.setState({
  start:this.state.start-2,
  end:this.state.end-2,

  })
}
next=()=>{
  this.setState({
  start:this.state.start+2,
  end:this.state.end+2,

  })
}
changePage=(ele)=>{

this.setState({
  page:ele.target.name,
  
})


this.setState({

  end:(this.state.page)*2
})

this.setState({
  start:(this.state.end)-2,
})
console.log(ele.target.name)
console.log(this.state.page)
console.log(this.state.start)
console.log(this.state.page*2)


}

clearSearch=()=>{
  this.setState({
    search:"",
  
  })

}
// componentDidMount(){
//   localStorage.setItem("data",JSON.stringify(dataStart))
// }
   render() {
   const[data1]=this.state.data1
    // localStorage.setItem("data",JSON.stringify(dataStart))
    // localStorage.removeItem("data")
    // console.log(JSON.parse(localStorage.data))
     const img={
       height:"100px",
       width:"80px"
     }

    const showData=data.slice(this.state.start,this.state.end)
  if(this.state.editComponent){
return(
  <Edit book={this.state.editBook} data={data}/>
)
  }
else{
  
  return (
    <div >
    
    <form>
         <FormControl>
    <div>
           <TextField onChange={this.changeSearch}type="text"id="search" name="searchField" label="Search For books" variant="filled"value={this.state.search} >

           </TextField>
           
       
           <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">

<Button onClick={this.clearSearch}>clear search</Button>
 <Button onClick={this.sortAsc}>Sort by decreasing price  </Button>
 <Button onClick={this.sortDsc}>Sort by increasing price</Button>

</ButtonGroup>
</div>
         </FormControl>
       </form>
    
     <TableContainer  className="app"component={Paper}>
<Table className={classes} aria-label="simple table">

 <TableHead>

   <TableRow>
     <TableCell>Book Title</TableCell>
     <TableCell align="right">Author</TableCell>
     <TableCell align="right">Price</TableCell>
     <TableCell align="right">ISBN Number</TableCell>
     <TableCell align="right">Fantasy</TableCell>
     <TableCell align="right">Language</TableCell>
     <TableCell align="right"></TableCell>
   </TableRow>
 </TableHead>
 <TableBody className="booklist">
   { this.state.searchState?(this.state.data.slice(this.state.start,this.state.end).map((row) => (
     <TableRow key={row.id}>
       <TableCell component="th" scope="row">
        <div> {row.title}</div><br/><img style={img}src={row.photoUrl}></img>
       </TableCell>
       
       <TableCell align="right">{row.author}</TableCell>
       <TableCell align="right">{row.price}</TableCell>
       <TableCell align="right">{row.isbn}</TableCell>
       <TableCell align="right">{row.genre}</TableCell>
       <TableCell align="right">{row.lang}</TableCell>
       <TableCell align="right"><div>
                
<ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">

<Button onClick={this.delete} name={row.title}>delete</Button>


<Button name={row.title} onClick={this.callEditComponent}>
edit</Button>
</ButtonGroup> 

         </div></TableCell>
     </TableRow>
   ))):
   (data1.length?(this.state.data1.map((row) => (
    <TableRow key={row.id}>
      <TableCell component="th" scope="row">
       <div> {row.title}</div><br/><img style={img}src={row.photoUrl}></img>
      </TableCell>
      
      <TableCell align="right">{row.author}</TableCell>
      <TableCell align="right">{row.price}</TableCell>
      <TableCell align="right">{row.isbnNo}</TableCell>
      <TableCell align="right">{row.genre}</TableCell>
      <TableCell align="right">{row.language}</TableCell>
      <TableCell align="right">



        
<ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">

        <Button onClick={this.delete} name={row.title}>delete</Button>
       
       
        <Button name={row.title} onClick={this.callEditComponent}>
        edit</Button>
        </ButtonGroup> 

        </TableCell>
    </TableRow>
  ))):null)
   }
 </TableBody>
 <div>

<ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">

{ this.state.start!=0?(<Button onClick={this.prev}>previous</Button>):null}<Button onClick={this.next}>next</Button>
<Button onClick={this.goToFirstPage} align="right">first page</Button><Button align="right" onClick={this.goToLastPage}>last page</Button></ButtonGroup>


       
     </div>
</Table>
</TableContainer>



</div>

)
}
      
   }
}
export default BookList


