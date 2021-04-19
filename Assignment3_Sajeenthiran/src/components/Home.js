import React, { Component } from "react";

import Container from "./Container";
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
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    localStorage.setItem("data",JSON.stringify(dataStart))
        this.setState({
          content: "Welcome to Bookshop "
        });
  }

  render() {
    // localStorage.setItem("data",JSON.stringify(dataStart))

 
    return (
      <Container content={this.state.content}/>
    );
  }
}
