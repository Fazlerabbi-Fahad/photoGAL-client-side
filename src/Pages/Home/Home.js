import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../../assets/Banner/img2.jpg';
import img3 from '../../assets/Images/img3.jpg';
import Login from '../Login/Login';

const Home = () => {
    return (
        <div>
            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${img2})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">This is Fazle Rabbi Fahad. I am a natural photographer,photo editor and photography consultant.Welcome to my website.I hope you will what desire. </p>
                            <Link className="btn btn-primary">Get Started</Link>
                        </div>
                    </div>
                </div>
                <div>services</div>
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
                <div>
                    <Login></Login>
                </div>
            </div>
        </div>
    );
};

export default Home;