import React from 'react';
import img from '../../../images/chair.png'
import './HeroSection.css';

const HeroSection = () => {

    return (
        <>
            <div className='lg:container md:container w-11/12 bg-img  mx-auto py-6'>
                <div className='lg:flex  md:flex items-center'>
                    <div className='lg:w-1/2 md:w-1/2 w-full p-4 wow slideInLeft'>
                        <h2 className='lg:text-[60px] md:text-[50px] text-[30px] font-bold leading-none mb-4'>Your New Smile
                            Starts Here</h2>
                        <p className='text-lightGray mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button className='bg-primary hover:bg-danger px-4 py-2 text-white'>GET APPOINTMENT</button>
                    </div>
                    <div className='lg:w-1/2 md:w-1/2 w-full wow slideInRight'>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 mt-10 md:grid-cols-3 lg:container md:container w-10/12  mx-auto grid-cols-1 gap-4'>
                <div className='flex items-center justify-around bg-primary p-4'>
                    <div className='lg:px-8 md:px-8 px-6'>
                        <i className="far fa-clock text-4xl text-white "></i>
                    </div>
                    <div className='lg:px-8 md:px-8 px-6'>
                        <h2 className='lg:text-2xl md:text-2xl text-xl text-white'>Opening Hours</h2>
                        <p className='text-white'>Lorem Ipsum is simply
                            dummy text of the pri</p>
                    </div>
                </div>
                <div className='flex items-center justify-around bg-dark p-4'>
                    <div className='lg:px-8 md:px-8 px-6'>
                        <i className="fas fa-map-marker-alt text-4xl text-white"></i>
                    </div>
                    <div className='lg:px-8 md:px-8 px-6'>
                        <h2 className='lg:text-2xl md:text-2xl text-xl text-white'>Opening Hours</h2>
                        <p className='text-white'>Lorem Ipsum is simply
                            dummy text of the pri</p>
                    </div>
                </div>
                <div className='flex items-center justify-around bg-primary p-4'>
                    <div className='lg:px-8 md:px-8 px-6'>
                        <i className="fas fa-phone-volume text-4xl text-white"></i>
                    </div>
                    <div className='lg:px-8 md:px-8 px-6'>
                        <h2 className='lg:text-2xl md:text-2xl text-xl text-white'>Opening Hours</h2>
                        <p className='text-white'>Lorem Ipsum is simply
                            dummy text of the pri</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;