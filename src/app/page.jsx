'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Field, Form, Formik } from 'formik';
import Lottie from 'react-lottie-player';
import signUpFile from "./SignUp.json";
import closeWindowFile from "./CloseWindow.json";
import * as Yup from 'yup';

import { Merriweather } from "next/font/google";
const merriweather = Merriweather({
    subsets: ['latin'],
    display: "swap",
    weight: ['400', '700'],
    style: ['normal'],
    variable: '--font-merriweather',
})

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required('Email is required')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email must be a valid format with @ and .com')
        .email('Invalid email format'),

    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be 8 characters long')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol'),
});

export default function SignIn() {
    const [playAnimation, setPlayAnimation] = useState(false);
    const [playAnimationCloseWindow , setPlayAnimationCloseWindow] = useState(false)
    const [changePass, setChangePass] = useState(false)


    useEffect(() => {
        setPlayAnimation(true);
    }, []);

    useEffect(() => {
        setPlayAnimationCloseWindow(true);
    }, [changePass]);

    const handleAnimationComplete = () => {
        setPlayAnimation(false);
    };
    const handleAnimationCompleteCloseWindow = () => {
        setPlayAnimationCloseWindow(false);
    }

    const handleSubmit = async (values) => {
        try {
            const response = await fetch('https://66f3b46b77b5e88970967650.mockapi.io/User');
            const users = await response.json();
            const existingUser = users.find(user => user.email === values.email);

            if (existingUser) {
                if (existingUser.password === values.password) {
                    alert(`Hello ${existingUser.userName}, welcome back!`);
                    window.location.href = '/dashboard';
                } else {
                    alert('Your password is incorrect. Please try again.');
                }
            } else {
                alert('You don\'t have an account. Please sign up first.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while checking your account');
        }
    };

    const handleSubmitChanePassword = async (values) => {
        try {
            const response = await fetch('https://66f3b46b77b5e88970967650.mockapi.io/User');
            const users = await response.json();
            const existingUser = users.find(user => user.email === values.email);
    
            if (existingUser) {
                const updateResponse = await fetch(`https://66f3b46b77b5e88970967650.mockapi.io/User/${existingUser.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ password: values.password }), // Send the new password
                });
    
                if (updateResponse.ok) {
                    alert(`Password for ${existingUser.userName} has been updated!`);
                    setChangePass(false);
                } else {
                    alert('Error updating the password. Please try again.');
                }
            } else {
                alert('You don\'t have an account. Please sign up first.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while updating your account');
        }
    };

    return (
        <>
            <main className={`${merriweather.className} ${changePass ? "blur-xl" : "blur-none"} w-full h-[100vh] flex flex-wrap md:flex-nowrap justify-center items-center relative z-10`}>
                <div className="w-full md:w-1/2 h-full bg-[#9bbc89] rounded-b-[2rem] md:rounded-r-[2rem] md:rounded-bl-none flex justify-center items-center">
                    <Lottie animationData={signUpFile} play={playAnimation} loop={false} onComplete={handleAnimationComplete} className='h-[90%]' />
                </div>
                <div className="w-full md:w-1/2 h-full p-5 md:p-14 leading-relaxed xl:leading-loose">
                    <h3 className="uppercase text-gray-500 text-sm md:text-xs lg:text-xl xl:text-2xl xl:py-4">Start your journey</h3>
                    <h1 className="capitalize text-[1.4rem] md:text-[1.3rem] lg:text-[2rem] xl:text-5xl font-bold">Sign In to your Account.</h1>
                    <h3 className="capitalize text-gray-500 text-sm md:text-xs lg:text-base py-2 lg:py-5">Don't have an account? <button className="text-[#1e87f0]"><Link href='/SignUp'>Sign Up.</Link></button></h3>

                    <Formik
                        initialValues={{ email: 'Admin@gmail.com', password: 'Admin@12345678' }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form className='w-full xl:w-1/2 flex flex-wrap my-4 xl:my-0'>

                                <label htmlFor="email" className='w-full font-bold'>E-Mail</label>
                                <Field
                                    id="email"
                                    name="email"
                                    type="email"
                                    className='border border-gray-500 w-full mb-4 mt-2 rounded-md h-10'
                                />
                                {errors.email && touched.email && <div className="text-red-500">{errors.email}</div>}

                                <label htmlFor="password" className='w-full font-bold'>Password</label>
                                <Field
                                    id="password"
                                    name="password"
                                    type="password"
                                    className='border border-gray-500 w-full mb-4 mt-2 rounded-md h-10'
                                />
                                {errors.password && touched.password && <div className="text-red-500">{errors.password}</div>}
                                <h3 className='text-gray-500 text-sm md:text-xs lg:text-base py-2 cursor-pointer underline hover:text-[#1e87f0] transition duration-300 w-full' onClick={() => setChangePass(true)}>Forgot password?</h3>


                                <button type="submit" className='w-full text-[#718964] bg-orange-400 my-4 lg:my-1 rounded-md h-10 uppercase tracking-[0.3rem] transition duration-300 hover:bg-[#9bbc89] hover:text-orange-600'>Sign In</button>
                            </Form>
                        )}
                    </Formik>

                    <p className='text-gray-500 w-full xl:w-2/3 text-sm xl:text-xs leading-6 tracking-widest lg:tracking-normal'>Welcome back to your favorite admin panel.<br></br>The Registration of this site is real and you can Sign Up.</p>
                </div>
            </main>
            {changePass &&
                (
                    <section className="top-[50%] left-[50%] absolute translate-x-[-50%] translate-y-[-50%] bg-white border z-30 flex flex-wrap justify-center pt-20 px-10 rounded-[2rem]">
                        <Lottie animationData={closeWindowFile} play={playAnimationCloseWindow} loop={false} onComplete={handleAnimationCompleteCloseWindow} className='cursor-pointer w-[10.5rem] h-[10.5rem] absolute top-[-2.1rem] right-[-2.2rem]' onClick={() => setChangePass(false)} />
                        <h3 className="capitalize text-[1.4rem] md:text-[1.3rem] lg:text-[2rem] xl:text-5xl font-bold text-center text-nowrap w-full py-4">Password Reset</h3>

                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmitChanePassword}
                        >
                            {({ errors, touched }) => (
                                <Form className='w-full xl:w-1/2 flex flex-wrap my-4 xl:my-0'>

                                    <label htmlFor="email" className='w-full font-bold'>Your E-Mail</label>
                                    <Field
                                        id="email"
                                        name="email"
                                        type="email"
                                        className='border border-gray-500 w-full mb-4 mt-2 rounded-md h-10'
                                    />
                                    {errors.email && touched.email && <div className="text-red-500">{errors.email}</div>}

                                    <label htmlFor="password" className='w-full font-bold'>New Password</label>
                                    <Field
                                        id="password"
                                        name="password"
                                        type="password"
                                        className='border border-gray-500 w-full mb-4 mt-2 rounded-md h-10'
                                    />
                                    {errors.password && touched.password && <div className="text-red-500">{errors.password}</div>}

                                    <button type="submit" className='w-full text-orange-600  bg-[#9bbc89] my-4 lg:my-1 rounded-md h-10 uppercase transition duration-300 hover:bg-orange-400 hover:text-[#718964]'>Change my password</button>
                                </Form>
                            )}
                        </Formik>
                        <h3 className="capitalize text-gray-500 text-sm md:text-xs lg:text-base py-2 lg:py-5 w-full text-center">Don't have an account? <button className="text-[#1e87f0]"><Link href='/SignUp'>Sign Up.</Link></button></h3>
                    </section>
                )}
        </>
    )
}