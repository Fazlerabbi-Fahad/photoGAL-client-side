import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service';
import img4 from "../../../assets/Banner/img4.jpg";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://photogal-server.vercel.app/services/')
            .then(res => res.json())
            .then(data => setServices(data.servicesReverse))
    }, [services])
    return (
        <div>
            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${img4})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Services</h1>
                            <p className="mb-5">Welcome to the services page. Buy any service you want.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='text-center my-20'>
                <Link to='/addservices'><button className="btn glass text-red-400">Add Your Own Services</button></Link>
            </div>
        </div>
    );
};

export default Services;