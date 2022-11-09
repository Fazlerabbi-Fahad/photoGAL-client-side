import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';



const Signup = () => {

    const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext)

    const handleSignUpForm = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            alert('Password not matched')
        }

        else {
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    handleUserProfile(name)
                    form.reset();
                    toast.success('Successful created!');

                })
                .catch(error => { toast.error(error.message) })
        }

    }


    const handleUserProfile = name => {
        const profile = {
            displayName: name,
        }
        updateUserProfile(profile)
            .then(result => { })
            .catch(error => console.log(error))

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Join now!</h1>
                        <p className="py-6">
                            You can be part of this amazing website. Just join us <br />and add your services. You can also add reviews to others services.
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleSignUpForm} className="card-body">
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
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='confirmPassword' placeholder="confirm password" className="input input-bordered" required />

                            </div>

                        </form>
                        <div className="form-control mb-6">
                            <button className='btn btn-primary top-0 ml-8 mt-0' style={{ width: '320px' }} onClick={signInWithGoogle}><FaGoogle className='mx-2' />Login with google</button>
                            <p className='ml-10'>Already have an account? <Link className='text-red-400' to='/login'>Login now</Link></p>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Signup;