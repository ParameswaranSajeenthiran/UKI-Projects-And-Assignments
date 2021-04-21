
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import React, { useState ,useEffect} from 'react';
import Sidebar from './Sidebar';
import axios from 'axios'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import TablePagination from '@material-ui/core/TablePagination';
import Pagination from '@material-ui/lab/Pagination';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
// Generate Order Data
//function createData(id, date, name, Place, Community, Fund) {
  //return { id, date, name, Place, Community, Fund };
//}
function createData(id, date, name, Place, Community, Fund) {
  return { id, date, name, Place, Community, Fund };
}



const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', '1994Maths',200000.00),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', '1996Arts', 150000.00),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', '2002Bio', 50000.00),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', '2004Commerce', 250000.00),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'ScoutClub', 200000.00),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {

const [donations,setDonations]=React.useState([]);
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);
const [asc,setAsc]=React.useState("");
const [subCom,setSubCom]=useState(localStorage.getItem("subId"));

 const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 3));
    setPage(0);
  };
  const handleChange = (event, value) => {
    setPage(value);
  };

         useEffect(()=>{
          axios.get(`http://localhost:8080/com/donations${asc}${subCom}?pageNo=${page-1}&pageSize=8&sortBy=amount`,{
            headers: {
                'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
            }
        })
                .then(response=>{
                 console.log(response.data)
                 setDonations(response.data.data)
          
                })
        },[page,asc])
 
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Donations</Title>
        
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
         
            <TableCell align="right"> 
     <ArrowUpwardIcon color="primary"onClick={()=>{setAsc("/ascending")}}/> 
     
     <ArrowDownwardIcon color="primary"  onClick={()=>{setAsc("")}}/>
       Fund </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
     
          {donations.length?(donations.map((row) => (
            <TableRow key={row.id}>
                <TableCell>{row.image[1]}</TableCell>
                      <TableCell>{row.image[2]}</TableCell>
              <TableCell>{row.image[0]}</TableCell>
          
                <TableCell align="right">RS.{row.amount}.00</TableCell>
             
            
            </TableRow>
          ))):<div>No Donations Yet ...</div>}
        </TableBody>
      
      </Table>
        <Pagination count={10} page={page} color="primary" onChange={handleChange} />
        <TablePagination
      component="div"
      count={100}
      page={page}
      onChangePage={handleChangePage}
      rowsPerPage={rowsPerPage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          
        </Link>
      </div>
    </React.Fragment>
  );
}
