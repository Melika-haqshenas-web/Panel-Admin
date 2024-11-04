'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Field, Form, Formik } from 'formik';
import Lottie from 'react-lottie-player';
import signInFile from "./SignIn.json";
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
    userName: Yup.string()
        .required('Username is required')
        .min(3, 'Username must be at least 3 characters'),
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

export default function Page() {
    const [playAnimation, setPlayAnimation] = useState(false);

    useEffect(() => {
        setPlayAnimation(true);
    }, []);

    const handleAnimationComplete = () => {
        setPlayAnimation(false);
    };

    const handleSubmit = async (values) => {
        try {
            const response = await fetch('https://66f3b46b77b5e88970967650.mockapi.io/User');
            const users = await response.json();
            const existingUser = users.find(user => user.email === values.email);

            if (existingUser) {
                alert('You are already signed in with this email. Please sign in instead.');
            } else {
                const createResponse = await fetch('https://66f3b46b77b5e88970967650.mockapi.io/User', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });

                if (createResponse.ok) {
                    const data = await createResponse.json();
                    console.log('Data successfully submitted:', data);
                    alert('Form submitted successfully!');
                    window.location.href = '/dashboard';
                } else {
                    console.error('Error submitting form:', createResponse.statusText);
                    alert('Failed to submit form');
                }
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting the form');
        }
    };

    return (
        <main className={`${merriweather.className} w-full h-[100vh] flex flex-wrap md:flex-nowrap justify-center items-center`}>

            <div className="w-full md:w-1/2 h-full p-5 md:p-14 leading-relaxed xl:leading-loose">
                <h3 className="uppercase text-gray-500 text-sm md:text-xs lg:text-xl xl:text-2xl xl:py-4">Register now</h3>
                <h1 className="capitalize text-[2rem] md:text-[1.625rem] lg:text-[2.55rem] xl:text-6xl font-bold">Sign Up For Free.</h1>
                <h3 className="capitalize text-gray-500 text-sm md:text-xs lg:text-base py-2 lg:py-5">Already have an account? <button className="text-[#1e87f0]"><Link href='/'>Sign In.</Link></button></h3>

                <Formik
                    initialValues={{ userName: '', email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched }) => (
                        <Form className='w-full xl:w-1/2 flex flex-wrap my-4 xl:my-0'>
                            <label htmlFor="userName" className='w-full font-bold'>Username</label>
                            <Field
                                id="userName"
                                name="userName"
                                type="text"
                                className='border border-gray-500 w-full mb-4 mt-2 rounded-md h-10'
                            />
                            {errors.userName && touched.userName && <div className="text-red-500">{errors.userName}</div>}

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

                            <button type="submit" className='w-full text-orange-600 bg-[#9bbc89] my-4 lg:my-1 rounded-md h-10 uppercase tracking-[0.3rem] transition duration-300 hover:bg-orange-400 hover:text-[#718964]'>Sign up</button>
                        </Form>
                    )}
                </Formik>

                <p className='text-gray-500 w-full xl:w-2/3 text-sm xl:text-xs leading-6 tracking-widest lg:tracking-normal'>Make a new doc to bring your data together and easily grow thw skills and habits that will serve you at work.</p>

            </div>

            <div className="w-full md:w-1/2 h-full bg-orange-400 rounded-t-[2rem] md:rounded-l-[2rem] md:rounded-tr-none flex justify-center items-center">
                <Lottie animationData={signInFile} play={playAnimation} loop={false} onComplete={handleAnimationComplete} className='h-[90%]' />
            </div>
        </main>
    )
}
