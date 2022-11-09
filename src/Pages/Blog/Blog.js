import React from 'react';
import img3 from "../../assets/Banner/img3.jpg";
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${img3})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Blogs</h1>
                        <p className="mb-5">Welcome to the blog page. If you are curious about learning new things, you can gether many knowledge from here.</p>
                    </div>
                </div>
            </div>
            <div>
                <ul className='p-10'>
                    <li className='my-5'>
                        <h3 className='text-2xl font-bold text-red-400 my-2'>1.Difference between SQL and NoSQL</h3>
                        <p className='flex'><FaArrowRight className='mr-3 mt-1 text-red-700' /> SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                    </li>
                    <li className='my-5'>
                        <h3 className='text-2xl font-bold text-red-400 my-2 '>2.What is JWT, and how does it work?</h3>
                        <p className='flex'><FaArrowRight className='mr-3 mt-1 text-red-700' /> JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
                    </li>
                    <li className='my-5'>
                        <h3 className='text-2xl font-bold text-red-400 my-2'>3.What is the difference between javascript and NodeJS?</h3>
                        <p className='flex'><FaArrowRight className='mr-3 mt-1 text-red-700' /> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                    </li>
                    <li className='my-5'>
                        <h3 className='text-2xl font-bold text-red-400 my-2'>4.How does NodeJS handle multiple requests at the same time?</h3>
                        <p className='flex'><FaArrowRight className='mr-3 mt-1 text-red-700' /> How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Blog;