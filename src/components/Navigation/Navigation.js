import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Firebase/useFirebase';
import './Navigation.css';

const Navigation = () => {
    const [isMobile, setMobile] = useState(false);
    const { user, logOut } = useFirebase();
    return (
        <>
            <div className='lg:container md:container w-11/12 z-[200]  mx-auto'>
                <div className='flex justify-between items-center py-4'>
                    <div>
                        <h1 className='lg:text-2xl md:text-2xl text-xl font-bold'>Doctor <span className='text-primary'>Portal</span></h1>
                    </div>
                    <div style={{ zIndex: 200 }} className={isMobile ? 'nav-link-mobile' : 'nav-link'} onClick={() => setMobile(false)}>
                        <Link to="/" className='mx-4 text-lg'>Home</Link>
                        <a href="#" className='mx-4 text-lg'>About us</a>
                        <Link to="appointment" className='mx-4 text-lg'>Dental Service</Link>
                        <a href="#" className='mx-4 text-lg'>Blog</a>
                        <a href="#" className='mx-4 text-lg'>Contact Us</a>
                        <a href="#" className='mx-4'>{user?.displayName}</a>
                        {
                            user?.email ? <button className='bg-primary text-white px-4 py-1' onClick={logOut}>Log Out</button> :
                                <Link to="login" className='mx-4 text-lg'>Login</Link>
                        }

                    </div>
                    <button className="hamburger"
                        onClick={() => setMobile(!isMobile)}
                    >
                        {
                            isMobile ? <i className="fas fa-times font-bold text-2xl mx-4"></i> : <i className="fas fa-bars font-bold text-2xl mx-4"></i>
                        }
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navigation;