import React from 'react';
import pepole1 from '../../../images/people-1.png';
import pepole2 from '../../../images/people-2.png';
import pepole3 from '../../../images/people-3.png';
import doctor from '../../../images/doctor-small.png';

const HomePati = () => {
    const people = [
        {
            name: "Winson Herry",
            description: "It is a long established fact that by the readable content of a lot layout.The point of using Lorem  a more- or - less normal distribute to using ‘Content here, content",
            img: pepole1
        },
        {
            name: "Winson Herry",
            description: "It is a long established fact that by the readable content of a lot layout.The point of using Lorem  a more- or - less normal distribute to using ‘Content here, content",
            img: pepole3
        },
        {
            name: "Winson Herry",
            description: "It is a long established fact that by the readable content of a lot layout.The point of using Lorem  a more- or - less normal distribute to using ‘Content here, content",
            img: pepole2
        }
    ]
    return (
        <>
            <div className='lg:container md:container mt-16 mx-auto w-10/12'>
                <div className='lg:flex md:flex  justify-between items-center'>
                    <div>
                        <h3 className='text-2xl font-bold text-primary py-4'>TESTIMONIAL</h3>
                        <h4 className='text-5xl text-dark'>What's Our Patients Says</h4>
                    </div>
                    <div className='p-4 lg:block md:block hidden '>
                        <i className="fas fa-quote-left text-[#D6F6F6] text-[200px]"></i>
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 mb-10 md:grid-cols-3 grid-cols-1 gap-8 mt-10'>

                    {
                        people.map(pe =>
                            <div className='p-6 hover:shadow-lg cursor-pointer'>
                                <p className='p-4 text-lightGray'>{pe.description}</p>
                                <div className='flex items-center mt-5 justify-around '>
                                    <img src={pe.img} width="80px" alt="" />
                                    <div>
                                        <h1 className='text-lg font-bold text-primary'>{pe.name}</h1>
                                        <p className='text-lg text-lightGray'>California</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

                <div className='my-12'>
                    <h1 className='text-center text-3xl lg:mb-20 md:mb-20 mb-10 font-bold text-primary'>Our Doctors</h1>
                    <div className='grid lg:grid-cols-3 md:grid-cols-3 gap-6 grid-cols-1'>
                        <div className='text-center'>
                            <img src={doctor} alt="" />
                            <h2 className='text-2xl font-bold py-2'>Dr. Caudi</h2>
                            <p className='text-lg'><i class="fas fa-phone-alt text-primary"></i> <span className='text-lightGray '>+123 5689 0</span></p>
                        </div>
                        <div className='text-center'>
                            <img src={doctor} alt="" />
                            <h2 className='text-2xl font-bold py-2'>Dr. Caudi</h2>
                            <p className='text-lg'><i class="fas fa-phone-alt text-primary"></i> <span className='text-lightGray '>+123 5689 0</span></p>
                        </div>
                        <div className='text-center'>
                            <img src={doctor} alt="" />
                            <h2 className='text-2xl font-bold py-2'>Dr. Caudi</h2>
                            <p className='text-lg'><i class="fas fa-phone-alt text-primary"></i> <span className='text-lightGray '>+123 5689 0</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePati;