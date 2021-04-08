import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

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
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Place</TableCell>
            <TableCell>Community</TableCell>
            <TableCell align="right">Fund</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.Place}</TableCell>
              <TableCell>{row.Community}</TableCell>
              <TableCell align="right">{row.Fund}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more 
        </Link>
      </div>
    </React.Fragment>
  );
}
