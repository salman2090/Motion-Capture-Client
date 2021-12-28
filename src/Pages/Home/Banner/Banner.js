import React from 'react';
import './Banner.css';
import { Fab, Grid, Typography } from '@mui/material';
const Banner = () => {
    return (
        <div className="banner">
    <Grid container spacing={2}>
        <Grid item xs={4}>
      <Typography variant='h4' sx={{color:'white', fontWeight:'bold', mb:3, mt:5}}>Motion Capture</Typography>
      <Fab variant="extended" sx={{height:'40px'}}>
  
  Shop Now
</Fab>
  </Grid>

</Grid>
        </div>
    );
};

export default Banner;