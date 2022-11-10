import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import img2 from '../../assets/Banner/img2.jpg';
import img3 from '../../assets/Images/img3.jpg';
import Login from '../Login/Login';
import Service from '../Services/Service';
const Home = () => {
    const services = useLoaderData();
    const servicesLimited = services.limitedServices;
    return (
        <div>
            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${img2})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">This is Fazle Rabbi Fahad. I am a natural photographer,photo editor and photography consultant.Welcome to my website.I hope you will what desire. </p>
                            <Link className="btn btn-primary" to='/services'>Get Started</Link>
                        </div>
                    </div>
                </div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img alt='' src={img3} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-4xl font-bold">My name is Fazle Rabbi Fahad,<br />
                                <span className='text-red-400'>I'm a photographer.</span></h1>
                            <p className="py-6"><span>The world without photography will be meaningless to us if there is no light and color, which opens up our minds and expresses passion.</span><br /><br />
                                <span> My style is a combination between photojournalism and fine-art photography with a touch of fashion and creative lighting. My photos are inspired by light, color, techniques from black & white processing, vintage photos, creative perspective, and of course, most importantly, the personalities of the people I photograph!</span> </p>
                        </div>
                    </div>
                </div>
                <div className='my-10'>
                    <div>

                        <div className='text-center mt-10 text-red-500'>
                            <h1 className="text-5xl font-bold">Services</h1>
                            <p className="mb-5">Welcome to the services page. Buy any service you want.</p>
                        </div>

                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            servicesLimited.map(service => <Service
                                key={service._id}
                                service={service}
                            ></Service>)
                        }
                    </div>

                    <div className='text-center mb-20'>
                        <Link to='/services'><button className="btn glass text-red-400">Visit All</button></Link>
                    </div>

                </div>
                <div>
                    <Login></Login>
                </div>
            </div>
        </div>
    );
};

export default Home;