import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <div className="contact-bg py-8">
                <div className='lg:container md:container mt-10 mx-auto w-10/12'>
                    <div className='text-center mt-10'>
                        <h1 className='text-primary text-2xl py-4 font-bold'>Contact us</h1>
                        <h1 className='lg:text-5xl md:text-5xl text-3xl font-bold text-white mb-8'>Always Connect with us </h1>
                    </div>
                    <div className='text-center'>
                        <input type="email" placeholder='E-mail Address' className='w-2/3 px-4 py-2 mb-6  focus:outline-none focus:border-primary focus:ring-1 focus:ring-sky-500' />
                        <br />
                        <input type="text" placeholder='Subject' className='w-2/3 px-4 py-2 mb-6 focus:outline-none focus:border-primary focus:ring-1 focus:ring-sky-500' />
                        <br />
                        <textarea name="" id="" cols="40" className='w-2/3 px-4 py-2 mb-6 focus:outline-none focus:border-primary focus:ring-1 focus:ring-sky-500' rows="5"></textarea>
                        <br />
                        <button className='bg-primary text-white px-8 py-2'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;