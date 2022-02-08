import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../components/Firebase/useFirebase';
import login from "../../images/login.png";

const Register = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();

    const { signUpEmail, loading, user, error } = useFirebase();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passRef.current.value;

        console.log(name, email, password)

        signUpEmail(email, password, name);
        e.target.reset();
    }
    return (
        <>
            <div className='lg:container md:container mx-auto w-11/12'>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
                    <div className='flex justify-center items-center'>
                        {
                            loading ? <svg role="status" className="inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg> :
                                <div className='w-11/12'>
                                    <h1 className='text-center py-8 font-bold text-3xl text-primary'>Registration</h1>
                                    <form onSubmit={handleSubmit}>
                                        <div className="relative z-0 mb-6 w-full group">
                                            <input ref={nameRef} type="text" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                                            <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                                        </div>
                                        <div className="relative z-0 mb-6 w-full group">
                                            <input ref={emailRef} type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                                            <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                        </div>
                                        <div className="relative z-0 mb-6 w-full group">
                                            <input ref={passRef} type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                                            <label htmlFor="floating_password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                        </div>
                                        <input type="submit" value="Submit" className='bg-primary cursor-pointer text-white mt-6 w-full py-2 text-lg font-bold' />
                                    </form>
                                    <Link to="/login">
                                        <h1 className='text-center py-4 text-primary text-lg'>Already registration</h1>
                                    </Link>
                                    <div className='flex justify-center'>
                                        {
                                            error ? '' : user.email && <div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white  rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                                                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                                </div>
                                                <div className="ml-3 text-sm font-normal"> Registration successfully.</div>
                                            </div>
                                        }
                                        {
                                            user.email ? " " : error && <div id="toast-danger" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                                                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                                </div>
                                                <div className="ml-3 text-sm font-normal">{error}</div>
                                            </div>
                                        }
                                    </div>
                                </div>
                        }

                    </div>
                    <div className='flex justify-end '>
                        <img className='lg:block md:block hidden lg:w-[80%] md:w-full w-full' src={login} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;