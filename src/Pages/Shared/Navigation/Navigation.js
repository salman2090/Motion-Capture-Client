import React from 'react';
import './Navigation.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import logo from '../../../Images/Logo/logo.png';

const Navigation = () => {
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: '#1976d2',
          },
        },
      });

    return (
        <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>
         <AppBar position="static">
           <Toolbar>
             <IconButton
               size="large"
               edge="start"
               color="inherit"
               aria-label="menu"
               sx={{ mr: 2 }}
             >
               <img src={logo} alt="" />
             </IconButton>
             <Typography  variant="h6" component="div">
               <p>Motion Capture</p>
             </Typography>
             <Button sx={{alignItems:'flex-end'}} className='login-btn' color="inherit">Login</Button>
           </Toolbar>
         </AppBar>
         </ThemeProvider>
       </Box>
    );
};

export default Navigation;