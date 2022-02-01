import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <>
            <div className='mt-[50px]'>
                <div className='footer-bg'>
                    <div className='lg:container md:container  w-10/12 mx-auto'>
                        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6'>
                            <div className='py-8'>
                                <p className='text-lightGray py-2'>Emergency Dental Care</p>
                                <p className='text-lightGray py-2'>Check Up</p>
                                <p className='text-lightGray py-2'>Treatment of Personal Diseases</p>
                                <p className='text-lightGray py-2'>Tooth Extraction</p>
                                <p className='text-lightGray py-2'>Check Up</p>
                            </div>
                            <div>
                                <h1 className='pb-4 text-xl text-primary font-bold'>Services</h1>
                                <p className='text-lightGray py-2'>Emergency Dental Care</p>
                                <p className='text-lightGray py-2'>Check Up</p>
                                <p className='text-lightGray py-2'>Treatment of Personal Diseases</p>
                                <p className='text-lightGray py-2'>Tooth Extraction</p>
                                <p className='text-lightGray py-2'>Check Up</p>
                                <p className='text-lightGray py-2'>Check Up</p>
                                <p className='text-lightGray py-2'>Check Up</p>
                            </div>
                            <div>
                                <h1 className='pb-4 text-xl text-primary font-bold'>Oral Health</h1>
                                <p className='text-lightGray py-2'>Emergency Dental Care</p>
                                <p className='text-lightGray py-2'>Check Up</p>
                                <p className='text-lightGray py-2'>Treatment of Personal Diseases</p>
                                <p className='text-lightGray py-2'>Tooth Extraction</p>
                                <p className='text-lightGray py-2'>Check Up</p>
                                <p className='text-lightGray py-2'>Check Up</p>
                                <p className='text-lightGray py-2'>Check Up</p>
                            </div>
                            <div>
                                <h1 className='pb-4 text-xl text-primary font-bold'>Our Address</h1>
                                <p className='text-lightGray'>New York - 101010 Hudson</p>
                                <p className='text-lightGray'>Yards</p>
                                <div className='py-6'>
                                    <i className="fab fa-facebook-f border-primary  text-4xl border-2 px-4 py-2 rounded-full text-primary mr-4 hover:text-white hover:bg-primary cursor-pointer"></i>
                                    <i className="fab fa-google-plus-g border-primary  text-4xl border-2 px-4 py-2 rounded-full text-primary mr-4 hover:text-white hover:bg-primary cursor-pointer"></i>
                                    <i className="fab fa-twitter border-primary  text-4xl border-2 px-4 py-2 rounded-full text-primary mr-4 hover:text-white hover:bg-primary cursor-pointer"></i>
                                </div>
                                <p className='text-lightGray'>Call Now</p>
                                <button className='bg-primary text-white px-4 py-2'>+0123456789</button>
                            </div>

                        </div>
                        <div className='py-4 mt-6 text-center'>
                            <p className='text-lightGray'>Copyright 2022 All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;