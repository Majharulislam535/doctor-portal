import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from "../../../images/cavity.png";
import whitening from '../../../images/whitening.png'

const HomeService = () => {

    const service = [
        {
            name: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy  printing and typesetting indus  Ipsum has been the",

            img: fluoride
        },

        {
            name: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy  printing and typesetting indus  Ipsum has been the",
            img: cavity
        },

        {
            name: "Teath Whitening",
            description: "Lorem Ipsum is simply dummy  printing and typesetting indus  Ipsum has been the",
            img: whitening
        },

    ]
    return (
        <>
            <div className='lg:container md:container mt-10 w-10/12 mx-auto'>
                <div className='text-center'>
                    <h4 className='lg:text-3xl md:text-3xl text-xl text-primary font-bold'>Our service</h4>
                    <h1 className='lg:text-5xl font-bold md:text-4xl text-dark text-3xl md:mt-6 mt-4 lg:mt-6'>Services We Provide</h1>
                </div>

                <div className='grid lg:grid-cols-3 mt-6 md:grid-cols-3 grid-cols-1 gap-6'>
                    {
                        service.map(sr =>

                            <div key={sr.name} className='flex justify-center mt-6 flex-col items-center'>

                                <img src={sr.img} alt="" width='100px' className='p-4' />
                                <h1 className='text-2xl text-dark py-6'>{sr.name}</h1>
                                <p className='text-lightGray px-6 text-center'>{sr.description}</p>

                            </div>


                        )
                    }
                </div>

            </div>
        </>
    );
};

export default HomeService;