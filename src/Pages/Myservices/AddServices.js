import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const AddServices = () => {


    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const description = form.description.value;
        const service = {
            name: name,
            photo: photo,
            price: price,
            description: description
        }

        fetch('http://localhost:5000/services/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Service added successfully')
                    form.reset()
                }
                else {
                    toast.error('Sorry,service not created')
                }
            })
            .catch(error => console.error(error))

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">ADD SERVICES!</h1>
                        <p className="py-6">
                            You can be part of this amazing website. Just login <br />and add your services.
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleAddService} className="card-body mb-0">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name of the service</span>
                                </label>
                                <input type="name" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price of the service</span>
                                </label>
                                <input type="price" name='price' placeholder="price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo of the service</span>
                                </label>
                                <input type="photo" name='photo' placeholder="photo" className="input input-bordered" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Description</span>

                                </label>
                                <textarea className="textarea textarea-secondary w-full" name='description' placeholder="Description"></textarea>

                            </div>

                            <div className="form-control mt-6">
                                <button className='btn btn-primary' type="submit">Add Service</button>

                            </div>

                        </form>

                    </div>
                </div>
            </div >
        </div >
    );
};

export default AddServices;