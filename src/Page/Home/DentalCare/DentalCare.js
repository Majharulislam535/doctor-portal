import React from 'react';
import img from '../../../images/treatment.png'
import './Dental.css';
import doctor from '../../../images/doctor.png';

const DentalCare = () => {


    return (
        <>
            <div className='lg:container lg:mt-[130px] mt-[60px] md:mt-[130px] md:container mx-auto w-10/12 '>
                <div className='lg:flex md:flex   items-center'>
                    <div className='lg:w-1/2 md:w-1/2 w-full pr-12'>
                        <img src={img} width="400px" className='rounded ml-auto' alt="" />
                    </div>
                    <div className='lg:w-1/2 md:w-1/2 w-full'>
                        <h2 className='text-4xl font-bold text-dark py-8 lg:pr-[15.5rem] md:lg:pr-[15.5rem]  pr-8'>Exceptional Dental
                            Care, on Your Terms</h2>
                        <p className='py-6 lg:pr-16 md:pr-16 pr-5 text-lightGray'>It is a long established fact that a reader will be distracted
                            by the readable content of a page when looking at its
                            layout. The point of using Lorem Ipsumis that it has
                            a more-or-less normal distribution of letters,as opposed
                            to using ‘Content here, content here’, making it look like
                            readable English. Many desktop publishing packages
                            and web page </p>

                        <button className='bg-primary hover:bg-danger px-4 py-2 text-white'>Learn more</button>
                    </div>
                </div>
            </div>
            <div className='appoint-bg'>
                <div className='lg:container md:container lg:mt-[250px] md:mt-[250px]  mt-[150px] mx-auto w-10/12'>
                    <div className='lg:flex md:flex justify-center items-center'>
                        <div className='lg:w-1/2 md:w-1/2 w-full lg:order-1 md:order-1 order-2'>
                            <img src={doctor} className=' lg:mt-[-196px] md:mt-[-196px]' width="600px" alt="" />
                        </div>
                        <div className='lg:w-1/2 md:w-1/2 w-full lg:order-2 md:order-2 order-1'>
                            <h2 className='text-2xl font-bold text-primary py-4'>APPOINTMENT</h2>
                            <h1 className='text-4xl text-white py-4'>Make an appointment
                                Today</h1>
                            <p className='text-white py-4'>It is a long established fact that a reader will be distractedby the readable
                                content of a page when looking at its
                            </p>
                            <button className='bg-primary hover:bg-danger  mb-6 px-4 py-2 text-white'>Learn more</button>
                        </div>
                    </div>
                </div>


            </div>



        </>
    );
};

export default DentalCare;