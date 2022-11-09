import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/Images/img1.jpg';


const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-xl" to='/'>
                        <img className='w-5 rounded' src={img1} alt="" />
                        <h1 className='text-3xl font-bold'>Photo<span className='text-red-300'>GAL</span></h1></Link>
                </div>
                <p className='ml-4'>The world without photography will be<br /> meaningless to us if there is no light and color,<br /> which opens up our minds and expresses passion.</p>
            </div>
            <div>
                <span className="footer-title">Contact</span>
                <div className='my-1'>
                    <p><span className='font-bold'>Phone:</span> +880 1729992254</p>
                    <p><span className='font-bold'>Email:</span> fazlerabbifahad.54@gmail.com</p>
                </div>
                <div className='my-5'>
                    <p>@<i class="fa fa-copyright" aria-hidden="true"></i>Copyright © 2021 Promo Theme. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;