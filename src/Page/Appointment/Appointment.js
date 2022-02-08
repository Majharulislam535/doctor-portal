import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import img from '../../images/chair.png'
import Calender from './Calander/Calender';
import Modal from './Modal/Modal';

const Appointment = () => {
    const [value, setValue] = useState(new Date())
    const date = new Date(value);

    const service = [
        {
            name: "Teeth Orthodontics",
            time: '8:00 AM - 9:00 AM',
            space: 10,
        },
        {
            name: "Cosmetic Dentistry",
            time: '10:05 am – 11:30 am',
            space: 8,
        },
        {
            name: "Teeth Cleaning",
            time: '  5:00 pm – 6:30 pm',
            space: 5,
        },
        {
            name: "Cavity Protection",
            time: ' 7:00 am – 8:30 am',
            space: 7,
        },
        {
            name: "Teeth Orthodontics",
            time: '12:00 pm - 4:00pm',
            space: 10,
        },
        {
            name: "Dazzle Dentistry",
            time: '10:00 AM - 11:00 AM',
            space: 8,
        },
    ]

    return (
        <>
            <div className="lg:container md:container mx-auto w-11/12 bg-img">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
                    <div className='flex justify-center items-center'>
                        <div>
                            <h1 className='text-3xl mb-4 font-bold text-primary'>Appointment</h1>
                            <Calender value={value} setValue={setValue} />
                        </div>
                    </div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
            <div className="lg:container md:container mx-auto w-11/12">
                <h1 className='text-center p-4 mt-10 text-4xl font-bold text-primary'>Available Appointments on {date.toDateString().slice(3, 16)}</h1>
                <div className="grid my-20 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    {
                        service.map(service =>
                            <div key={service.name} className='shadow-lg text-center p-4 '>
                                <h1 className='text-primary text-[30px] py-2 font-bold'>{service.name}</h1>
                                <h3 className='font-bold pb-2 text-[24px]'>{service.time}</h3>
                                <h4 className='text-[16px] text-lightGray pb-2'>{service.space} SPACES AVAILABLE</h4>
                                <button class=" text-white mb-4  font-medium bg-primary text-sm px-4 py-2 " type="button" data-modal-toggle="defaultModal">
                                    Toggle modal
                                </button>
                                <Modal service={service.name} date={date.toDateString().slice(3, 16)} />
                            </div>
                        )
                    }
                </div>

            </div>
            <Footer />
        </>
    );
};

export default Appointment;