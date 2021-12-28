import { Button } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <h2 sx={{my:5}}>Please Login!</h2>
            <h5>Click on the beneath button for Google Sign In</h5>
            <Button sx={{mt:3, mb:5}} onClick={signInUsingGoogle}>Google Sign In</Button>
            <button onClick={signInUsingGoogle} className="btn btn-warning login-form mt-3 mb-5">Google Sign In</button>
        </div>
    );
};

export default Login;