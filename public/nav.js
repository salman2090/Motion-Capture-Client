import React from 'react';
import './Navigation.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@emotion/react';
import { createTheme} from '@mui/material';
import logo from '../../../Images/Logo/logo.png';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';


const Navigation = () => {
  const {user, logOut} = useAuth();
  
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: '#1976d2',
          },
        },
      });

      const [value, setValue] = React.useState('one');

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };

  

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
             <Box sx={{ width: '100%' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              <Tab as={HashLink} value="one" to="/home#home" label="Home" />
              <Tab as={HashLink} value="two" to="/home#cameras" label="Cameras" />
              <Tab as={HashLink} value="three" to="/home#lenses" label="Lenses" />
              {
                user.email ?
                <Tab as={Link} value="four" to="/dashboard" label="Lenses" />
                :
                null
              }
              <a href="#login">{user?.displayName}</a>
              {
              user.email ?
              <Button onClick={logOut}>Logout</Button>
              :
              <Tab as={Link} value="five" to="/login" label="Login" />
            }
            <Tab as={Link} value="six" to="/dashboard" label="Lenses" />
            </Tabs>
            
          </Box>
            
           </Toolbar>
         </AppBar>
         </ThemeProvider>
       </Box>
    );
};

export default Navigation;