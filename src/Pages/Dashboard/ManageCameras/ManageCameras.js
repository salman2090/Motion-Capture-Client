import React, { useEffect } from 'react';
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
  

const ManageCameras = () => {
    const [cameras, setCameras] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch("https://morning-island-32552.herokuapp.com/cameras")
        .then(res => res.json())
        .then(data => setCameras(data))
    },[control]);
    const handleDelete = (id) => {
        const proceed=window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            fetch(`https://morning-island-32552.herokuapp.com/delete/${id}`,{
            method:"DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount) {
                    setControl(!control);
                }
            });
        }
    }
    

    return (
        <div>
            <div>
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
          {cameras?.map((pd, index) => (
            <StyledTableRow key={pd.name}>
              <StyledTableCell component="th" scope="row">
                {pd.name}
              </StyledTableCell>
              <StyledTableCell align="right">{index+1}</StyledTableCell>
              <StyledTableCell align="right">{pd.name}</StyledTableCell>
              <StyledTableCell align="right">{pd.description}</StyledTableCell>
              <StyledTableCell align="right">{pd.image1}</StyledTableCell>
              <StyledTableCell align="right">{pd.image2}</StyledTableCell>
              <StyledTableCell align="right">
                  <Button variant="contained" onClick = {() => handleDelete(pd._id)}>
                     Delete
                  </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
        </div>
    );
};

export default ManageCameras;