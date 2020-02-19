import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    cont:{
        maxWidth: 650,
        margin: "auto"
    },
    table: {
    minWidth: 150,
  },
});
// const removeRow = (index: number): void => {
//     const newRows = rows;
//     rows.splice(index, 1)
//     setRows(rows)
//   };

interface Props{
    rows: Array<{
        id: string,
        firstName: string,
        lastName: string,
    }>;
    onClick: (values: Props) => void;
}

interface RemoveInterface {
    handleTodoRemove: (id: string) => void;
    row: Props;
  }


export function MyTable( {rows}: Props  ) {
  const classes = useStyles();
  


  return (
    <TableContainer className={classes.cont} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell >Last Name</TableCell>
            <TableCell align="right">Delete</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
            <TableCell >{row.id}</TableCell>
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell align="right">
                <button >x</button>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}