import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const email = sessionStorage.getItem("email");
    const [control, setControl] = useState(false);
    const {user} = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    },[control])

    const handleDelete = (id) => {
        const proceed=window.confirm('Are you sure, you want to delete?');
        if(proceed) {
            fetch(`http://localhost:5000/delete/${id}`,{
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

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`,{
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            .then(res => res.json())
            .then(data =>setOrders(data))
    }, [control]);

    return (
        <div>
            <div className='orders-container'>
                {
                    orders?.map((order) => (
                        <Card sx={{ maxWidth: 400, px:2, width: 'auto' }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="350"
                        image={order.image1}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{fontSize:25, fontWeight:'bold'}}>
                        {order.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{textAlign: 'left'}}>{order.description}</Typography>
                        <Typography sx={{fontSize:20, fontWeight:'medium'}}>Price: {order.price}</Typography>
                        <Button onClick={() => handleDelete(order._id)}>Cancel</Button>
                    </CardContent>
                     
                </Card>

                    ))
                }

            </div>
            
        </div>
    );
};

export default MyOrders;