import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const[status, setStatus] = useState("");

    const handleStatus = (e) => {
        setStatus(e.target.value);
    }
    console.log(status);

    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/updateStatus/${id}`, {
            method: "PUT",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({status})
        })
        console.log(id)
    }
    useEffect(() => {
        fetch("http://localhost:5000/delete/manageOrder")
            .then(res => res.json())
            .then(data => setOrders(data))
    } ,[]);
    return (
        <div>
          <h1>Total Orders: {orders.length}</h1>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Count</StyledTableCell>
            <StyledTableCell align="right">Product Title</StyledTableCell>
            <StyledTableCell align="right">Description&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Image Link1&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Image Link2&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Action&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.map((pd, index) => (
            <StyledTableRow key={pd.name}>
              <StyledTableCell component="th" scope="row">
                {pd.name}
              </StyledTableCell>
              <StyledTableCell align="right">{index+1}</StyledTableCell>
              <StyledTableCell align="right">{pd.name}</StyledTableCell>
              <StyledTableCell align="right">{pd.description}</StyledTableCell>
              <StyledTableCell align="right">
                  <input type="text" onChange={handleStatus} defaultValue={pd.status}/>
              </StyledTableCell>
              
              <StyledTableCell align="right">
                  <Button variant="contained" onClick = {() => handleUpdate(pd._id)}>
                        Update
                  </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default ManageOrders;