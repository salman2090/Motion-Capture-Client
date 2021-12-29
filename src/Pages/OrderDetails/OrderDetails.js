import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const OrderDetails = () => {
    const {user} = useAuth();
    const {cameraId} = useParams();
    const [camera, setCamera] = useState({});

    const email = sessionStorage.getItem("email");

    useEffect(() => {
        fetch(`https://morning-island-32552.herokuapp.com/singleProduct/${cameraId}`)
            .then(res => res.json())
            .then(data => setCamera(data));
    }, [cameraId]);
    console.log(camera);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        data.email = email;
        data.status = "pending";

        fetch("https://morning-island-32552.herokuapp.com/addOrder", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result));

    }
    return (
        <div>
            <h1 className="text-center mt-5 mb-3">Please Book</h1>
            <div className="order-container mt-5 mb-5">
            <div>
                <img className="w-75 mb-3" src={camera?.image} alt="" />
                <h2>{camera?.name}</h2>
                <p>{camera?.description}</p>
                <h3>Cost: {camera?.price}</h3>
            </div>

            <div>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="text-center">Camera Details</h3>
                   
                    <input {...register("name", { required: true})} defaultValue={camera?.name} className="p-2 m-2 w-50"/>
                    <br />

                    <input {...register("description", { required: true})} defaultValue={camera?.description} className="p-2 m-2 w-50"/>
                    <br />

                    <input {...register("price", { required: true})} defaultValue={camera?.price}  className="p-2 m-2 w-50"/>

                    <input {...register("image2", { required: true})} defaultValue={camera?.image1}  className="p-2 m-2 w-50"/>
                    <br />

                    <input {...register("image1", { required: true})} defaultValue={camera?.image2}  className="p-2 m-2 w-50"/>
                    <br />

                    <h3>Client Details</h3>

                    <input {...register("clientName", { required: true})} defaultValue={user.displayName}  className="p-2 m-2 w-50"/>
                    <br />
                    <input {...register("email", { required: true})} defaultValue={user.email}  className="p-2 m-2 w-50"/>
                    <br />
                    <input {...register("address", { required: true})}  placeholder="Enter Your Address" className="p-2 m-2 w-50"/>
                    <br />
                    <input {...register("phone", { required: true})} placeholder="Enter Phone Number"  className="p-2 m-2 w-50"/>
                    <br />
                    
                    {errors.exampleRequired && <span>This field is required</span>}
                    
                    <input type="submit" value="Order Now" className="btn btn-success mb-5"/>
                </form>
            </div>
        </div>
            
        </div>
    );
};

export default OrderDetails;