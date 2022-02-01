import React, { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
    const [isMobile, setMobile] = useState(false);
    return (
        <>
            <div className='lg:container md:container w-11/12  mx-auto'>
                <div className='flex justify-between items-center py-4'>
                    <div>
                        <h1 className='lg:text-2xl md:text-2xl text-xl font-bold'>Doctor <span className='text-primary'>Portal</span></h1>
                    </div>
                    <div className={isMobile ? 'nav-link-mobile' : 'nav-link'} onClick={() => setMobile(false)}>
                        <a href="#" className='mx-4 text-lg'>Home</a>
                        <a href="#" className='mx-4 text-lg'>About us</a>
                        <a href="#" className='mx-4 text-lg'>Doctor Dashboard</a>
                        <a href="#" className='mx-4 text-lg'>Blog</a>
                        <a href="#" className='mx-4 text-lg'>Contact Us</a>
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