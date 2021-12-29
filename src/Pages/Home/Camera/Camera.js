import {Card, CardContent, CardMedia, Fab, Typography } from '@mui/material';
import './Camera.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Camera = ({camera}) => {
    const {_id, name, img1, img2, price, description} = camera;
    return (
        <div>
            <div>
                <Card sx={{ maxWidth: 400, px:2, width: 'auto' }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="350"
                        image={img1}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{fontSize:25, fontWeight:'bold'}}>
                        {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{textAlign: 'left'}}>{description}</Typography>
                        <Typography sx={{fontSize:20, fontWeight:'medium'}}>Price: {price}</Typography>
                    </CardContent>
                    <Link className='btn-order' to={`/purchase/${_id}`}><Fab variant="extended" size="medium" color="primary" sx={{ mb:3}}>             
                     Order Now
                    </Fab></Link>
                    
                    
                </Card>
            </div>       
        </div>
    );
};

export default Camera;