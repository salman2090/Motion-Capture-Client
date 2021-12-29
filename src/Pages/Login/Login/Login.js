import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Button } from '@mui/material';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <h2 sx={{my:5}}>Please Login!</h2>
            <h5>Click on the beneath button for Google Sign In</h5>
            <Button sx={{mt:3, mb:5}} onClick={signInUsingGoogle} variant="contained">Google Sign In</Button>
        </div>
    );
};

export default Login;