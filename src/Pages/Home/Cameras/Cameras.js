import React, { useEffect, useState } from 'react';
import './Cameras.css';
import Camera from '../Camera/Camera';
import { Typography } from '@mui/material';

const Cameras = () => {
    const [cameras, setCameras] = useState([]);
    
    // load data
    useEffect(() => {
        fetch('./cameras.json')
        .then(res => res.json())
        .then(data => setCameras(data))
    },[])
    
    return (
        <div id="cameras">
            <Typography sx={{fontSize:38, fontWeight:'bold',mb:3, mt:5}}>Cameras</Typography>
            <div className="cameras-container">
                {
                    cameras.map(camera => <Camera
                        key={camera._id}
                        camera={camera}
                    ></Camera>)
                }
            </div>   
        </div>
    );
};

export default Cameras;