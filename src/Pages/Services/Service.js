import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, price, description, img } = service;

    return (
        <div className="card bg-base-100 shadow-xl my-10" style={{ height: '500px' }}>
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                {
                    description.length > 100 ?
                        <p>{description.slice(0, 100) + '...'}</p>
                        :
                        <p>{description}</p>
                }
                <div className="card-actions justify-end">
                    <Link to={`/service/${_id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;