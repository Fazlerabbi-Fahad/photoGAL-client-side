import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';


const Login = () => {
    const { logIn, signInWithGoogle, setLoading } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/home';

    const handleLoginForm = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                navigate(from, { replaced: true })
                toast.success('Log in Successful!');

            })
            .catch(error => { toast.error(error.message) })
            .finally(setLoading(false))
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        You can be part of this amazing website. Just login <br />and add your services. You can also add reviews to others services.
                    </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleLoginForm} className="card-body mb-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <button className='btn btn-primary' type="submit">Login</button>

                        </div>

                    </form>
                    <div className="form-control mb-6">
                        <button className='btn btn-primary top-0 ml-8 mt-0' style={{ width: '320px' }} onClick={signInWithGoogle}><FaGoogle className='mx-2' />Login with google</button>
                        <p className='ml-10'>New here? <Link className='text-red-400' to='/signup'>Join us</Link></p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;