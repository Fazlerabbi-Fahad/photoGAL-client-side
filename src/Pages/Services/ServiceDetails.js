import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData()
    return (
        <div>
            <img src={service.img} alt="" />
        </div>
    );
};

export default ServiceDetails;