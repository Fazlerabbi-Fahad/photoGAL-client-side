import React, { useContext, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import AllReviews from './AllReviews';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { img, name, price, description, reviews } = service;




    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const review = form.review.value;
        const serviceName = form.servicename.value;
        const price = form.price.value;
        const email = form.email.value;
        const id = service._id;


        const reviews = {
            name: name,
            serviceName: serviceName,
            review: review,
            price: price,
            email: email,
            serviceId: id
        }

        fetch('http://localhost:5000/reviews/', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reviews)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Service added successfully')
                    event.target.reset();
                }
                else {
                    toast.error('Sorry,service not created')
                }
            })
            .catch(error => console.log(error))


    }
    return (
        <div>
            <div>
                <div className='my-10'>
                    <img src={img} alt="" />
                </div>
                <div className='text-center my-10'>
                    <h1 className='text-4xl font-bold text-red-400'>{name}</h1>
                    <p className='text-2xl font-bold'>Price: ${price}</p>
                </div>
                <div className='text-font-semibold mb-10 mx-20'>
                    <p>{description}</p>
                </div>
            </div>
            <div>
                <h1 className='text-4xl font-bold text-red-400 ml-5 mb-10' >Service Reviews</h1>
                <h3 className='text-2xl font-semibold ml-5 mb-10'>Total reviews: {reviews.length}</h3>
                <div>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>

                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Review</th>
                                    <th></th>
                                </tr>
                            </thead>
                            {
                                reviews.map(rev => <AllReviews key={rev.idx}
                                    rev={rev}
                                    price={price}
                                    name={name}></AllReviews>)
                            }
                        </table>
                    </div >

                </div>
                <div>
                    {
                        user?.email ?
                            <>
                                <form onSubmit={handleReview} className="card-body mb-0">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="email" value={user?.email} className="input input-bordered" readOnly />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Service name</span>
                                        </label>
                                        <input type="text" name='servicename' value={name} className="input input-bordered" readOnly />

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="price" name='price' value={price} className="input input-bordered" readOnly />

                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Review</span>

                                        </label>
                                        <textarea className="textarea textarea-secondary w-full" name='review' placeholder="Give a review"></textarea>

                                    </div>
                                    <div className="form-control mt-6">
                                        <button className='btn btn-primary' type="submit">Submit</button>

                                    </div>

                                </form></>
                            :
                            <><div className='text-center my-20'>
                                <Link to='/login'><button className="btn glass text-red-400">Want to add review?</button></Link>
                            </div></>

                    }

                </div>
            </div>
        </div >
    );
};

export default ServiceDetails;