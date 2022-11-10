import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/Images/img1.jpg';
import { AuthContext } from '../../../Context/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/addservices'>Add Services</Link></li>
        <li><Link to='/myreviews'>My Reviews</Link></li>

        {user?.email ?
            <>
                <li><Link onClick={logOut} to='/'>Log Out</Link></li>
                {
                    user.photoURL ?
                        <li><img alt='' src={user?.photoURL} roundedCircle style={{ width: '20px' }} /></li>
                        :
                        <li><FaUser roundedCircle className="h-20 rounded"></FaUser></li>
                }
            </>
            :
            <li><Link to='./login'>Login</Link></li>
        }

    </>

    return (
        <div className="navbar bg-base-100 py-5">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl" to='/'>
                    <img className='w-5 rounded' src={img1} alt="" />
                    <h1 className='text-3xl font-bold'>Photo<span className='text-red-400'>GAL</span></h1></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 text-red-400 font-bold">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;