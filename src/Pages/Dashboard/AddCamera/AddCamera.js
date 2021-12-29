import React from 'react';
import { useForm } from 'react-hook-form';

const AddCamera = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("https://morning-island-32552.herokuapp.com/addCamera", {
            method: "POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
    };
    return (
        <div>
            <h1 className="text-center mt-5 mb-3">Please Add a Camera</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input {...register("name")} placeholder="Name" className="p-2 m-2 w-25"/>
                <br />

                <input {...register("description")} placeholder="Description" className="p-2 m-2 w-25"/>
                <br />

                <input {...register("image1", { required: true})} placeholder="Front Image Link" className="p-2 m-2 w-25"/>
                <br />
                
                <input {...register("image2", { required: true})} placeholder="Back Image Link" className="p-2 m-2 w-25"/>
                <br />

                <input {...register("price", { required: true})} placeholder="Price"  className="p-2 m-2 w-25"/>
                <br />
                
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input type="submit" value="Add" className="btn btn-success mb-5"/>
            </form>
        </div>
    );
};

export default AddCamera;