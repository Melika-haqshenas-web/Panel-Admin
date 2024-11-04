'use client'

import Image from 'next/image';
import Layout from '../dashboard/layout'
import { Field, Form, Formik } from 'formik';
import useSettingStore from "../useSettingStore";

export default function Profile() {
    const menuOpen = useSettingStore((state) => state.menuOpen);
    return (
        <Layout>
            <section className={`${menuOpen ? '-translate-x-[260px]' : 'translate-x-[0px]'} w-full flex flex-wrap xl:flex-nowrap h-fit`}>
                <div className='w-full 2xl:w-2/3 px-3 pt-5'>
                    <div className="w-full md:mx-2  h-fit flex flex-nowrap flex-col-reverse px-[15px] bg-[#fff] relative my-[25px] rounded" style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, .14)' }}>
                        <div className="text-[#fff] my-[20px] mr-[15px] p-[15px] absolute -top-10 w-[90%] md:w-[95%] rounded" style={{ background: 'linear-gradient(60deg, #66bb6a, #43a047)', boxShadow: '0 12px 20px -10px rgba(76, 175, 80, .28), 0 4px 20px 0 rgba(0, 0, 0, .12), 0 7px 8px -5px rgba(76, 175, 80, .2)' }}>
                            <h4 className="mb-[5px] text-lg">Edit Profile</h4>
                            <p className="text-[hsla(0,0%,100%,0.62)] text-sm">Complete your profile</p>
                        </div>
                        <div className='w-full mt-20'>

                            <Formik
                                initialValues={{
                                    company: '',
                                    username: '',
                                    email: '',
                                    firstName: '',
                                    lastName: '',
                                    address: '',
                                    city: '',
                                    country: '',
                                    postalCode: '',
                                    about: "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.",
                                }}
                                onSubmit={(values) => {
                                    console.log(values);
                                }}
                            >
                                {({ handleSubmit, values }) => (
                                    <Form onSubmit={handleSubmit} className="space-y-6 p-8 rounded">
                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                                            <div className="relative">
                                                <Field
                                                    name="company"
                                                    type="text"
                                                    className="peer block w-full border-b-2 border-gray-300 focus:border-[#9c27b0] focus:outline-none pt-6 pb-2 placeholder-transparent cursor-not-allowed"
                                                    placeholder=" "
                                                    disabled
                                                />
                                                <label
                                                    htmlFor="company"
                                                    className="absolute left-0 top-[26px] text-gray-500 text-sm transition-all duration-200 transform pointer-events-none cursor-not-allowed
                                                        peer-placeholder-shown:top-[26px] peer-placeholder-shown:text-gray-500
                                                        peer-focus:top-0 peer-focus:text-[#9c27b0] peer-focus:text-xs"
                                                >
                                                    Company (disabled)
                                                </label>
                                            </div>

                                            {/* Username Field */}
                                            <div className="relative">
                                                <Field
                                                    name="username"
                                                    type="text"
                                                    className="peer block w-full border-b-2 border-gray-300 focus:border-[#9c27b0] focus:outline-none pt-6 pb-2 placeholder-transparent"
                                                    placeholder=" " // Placeholder to trigger focus
                                                />
                                                <label
                                                    htmlFor="username"
                                                    className={`absolute left-0 text-gray-500 text-sm transition-all duration-200 transform pointer-events-none
                                                        ${values.username ? 'top-0 text-xs' : 'top-[26px]'}
                                                        peer-placeholder-shown:top-[26px] peer-placeholder-shown:text-gray-500
                                                        peer-focus:top-0 peer-focus:text-xs`}
                                                >
                                                    User Name
                                                </label>
                                            </div>

                                            {/* Email Field */}
                                            <div className="relative">
                                                <Field
                                                    name="email"
                                                    type="email"
                                                    className="peer block w-full border-b-2 border-gray-300 focus:border-[#9c27b0] focus:outline-none pt-6 pb-2 placeholder-transparent"
                                                    placeholder=" "
                                                />
                                                <label
                                                    htmlFor="email"
                                                    className={`absolute left-0 text-gray-500 text-sm transition-all duration-200 transform pointer-events-none
                                                        ${values.email ? 'top-0 text-xs' : 'top-[26px]'}
                                                        peer-placeholder-shown:top-[26px] peer-placeholder-shown:text-gray-500
                                                        peer-focus:top-0 peer-focus:text-xs`}
                                                >
                                                    Email Address
                                                </label>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            {/* First Name Field */}
                                            <div className="relative">
                                                <Field
                                                    name="firstName"
                                                    type="text"
                                                    className="peer block w-full border-b-2 border-gray-300 focus:border-[#9c27b0] focus:outline-none pt-6 pb-2 placeholder-transparent"
                                                    placeholder=" "
                                                />
                                                <label
                                                    htmlFor="firstName"
                                                    className={`absolute left-0 text-gray-500 text-sm transition-all duration-200 transform pointer-events-none
                                                        ${values.firstName ? 'top-0 text-xs' : 'top-[26px]'}
                                                        peer-placeholder-shown:top-[26px] peer-placeholder-shown:text-gray-500
                                                        peer-focus:top-0 peer-focus:text-xs`}
                                                >
                                                    First Name
                                                </label>
                                            </div>

                                            {/* Last Name Field */}
                                            <div className="relative">
                                                <Field
                                                    name="lastName"
                                                    type="text"
                                                    className="peer block w-full border-b-2 border-gray-300 focus:border-[#9c27b0] focus:outline-none pt-6 pb-2 placeholder-transparent"
                                                    placeholder=" "
                                                />
                                                <label
                                                    htmlFor="lastName"
                                                    className={`absolute left-0 text-gray-500 text-sm transition-all duration-200 transform pointer-events-none
                                                        ${values.lastName ? 'top-0 text-xs' : 'top-[26px]'}
                                                        peer-placeholder-shown:top-[26px] peer-placeholder-shown:text-gray-500
                                                        peer-focus:top-0 peer-focus:text-xs`}
                                                >
                                                    Last Name
                                                </label>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                                            {/* Address Field */}
                                            <div className="relative">
                                                <Field
                                                    name="address"
                                                    type="text"
                                                    className="peer block w-full border-b-2 border-gray-300 focus:border-[#9c27b0] focus:outline-none pt-6 pb-2 placeholder-transparent"
                                                    placeholder=" "
                                                />
                                                <label
                                                    htmlFor="address"
                                                    className={`absolute left-0 text-gray-500 text-sm transition-all duration-200 transform pointer-events-none
                                                        ${values.address ? 'top-0 text-xs' : 'top-[26px]'}
                                                        peer-placeholder-shown:top-[26px] peer-placeholder-shown:text-gray-500
                                                        peer-focus:top-0 peer-focus:text-xs`}
                                                >
                                                    Address
                                                </label>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                                            <div className="relative">
                                                <Field
                                                    name="city"
                                                    type="text"
                                                    className="peer block w-full border-b-2 border-gray-300 focus:border-[#9c27b0] focus:outline-none pt-6 pb-2 placeholder-transparent"
                                                    placeholder=" "
                                                />
                                                <label
                                                    htmlFor="city"
                                                    className={`absolute left-0 text-gray-500 text-sm transition-all duration-200 transform pointer-events-none
                                                        ${values.city ? 'top-0 text-xs' : 'top-[26px]'}
                                                        peer-placeholder-shown:top-[26px] peer-placeholder-shown:text-gray-500
                                                        peer-focus:top-0 peer-focus:text-xs`}
                                                >
                                                    City
                                                </label>
                                            </div>

                                            <div className="relative">
                                                <Field
                                                    name="country"
                                                    type="text"
                                                    className="peer block w-full border-b-2 border-gray-300 focus:border-[#9c27b0] focus:outline-none pt-6 pb-2 placeholder-transparent"
                                                    placeholder=" "
                                                />
                                                <label
                                                    htmlFor="country"
                                                    className={`absolute left-0 text-gray-500 text-sm transition-all duration-200 transform pointer-events-none
                                                        ${values.country ? 'top-0 text-xs' : 'top-[26px]'}
                                                        peer-placeholder-shown:top-[26px] peer-placeholder-shown:text-gray-500
                                                        peer-focus:top-0 peer-focus:text-xs`}
                                                >
                                                    Country
                                                </label>
                                            </div>

                                            <div className="relative">
                                                <Field
                                                    name="postalCode"
                                                    type="text"
                                                    className="peer block w-full border-b-2 border-gray-300 focus:border-[#9c27b0] focus:outline-none pt-6 pb-2 placeholder-transparent"
                                                    placeholder=" "
                                                />
                                                <label
                                                    htmlFor="postalCode"
                                                    className={`absolute left-0 text-gray-500 text-sm transition-all duration-200 transform pointer-events-none
                                                        ${values.postalCode ? 'top-0 text-xs' : 'top-[26px]'}
                                                        peer-placeholder-shown:top-[26px] peer-placeholder-shown:text-gray-500
                                                        peer-focus:top-0 peer-focus:text-xs`}
                                                >
                                                    Postal Code
                                                </label>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                                            {/* About Me Field */}
                                            <div className="relative">
                                                <Field
                                                    name="about"
                                                    type="textarea"
                                                    as="textarea"
                                                    className="peer block w-full border-b-2 border-gray-300 focus:border-[#9c27b0] focus:outline-none pt-6 pb-2 placeholder-transparent"
                                                    placeholder=" "
                                                />
                                                <label
                                                    htmlFor="about"
                                                    className={`absolute left-0 text-gray-500 text-sm transition-all duration-200 transform pointer-events-none
                                                        ${values.about ? 'top-0 text-xs' : 'top-[26px]'}
                                                        peer-placeholder-shown:top-[26px] peer-placeholder-shown:text-gray-500
                                                        peer-focus:top-0 peer-focus:text-xs`}
                                                >
                                                    About Me
                                                </label>
                                            </div>
                                        </div>

                                        <div className='w-full flex justify-end items-center'>
                                            <button
                                                type="submit"
                                                className="bg-[#4caf50] text-white text-xs py-3 px-[30px] flex justify-center items-center rounded mt-4 hover:bg-[#47a44b]"
                                                style={{ boxShadow: "0 2px 2px 0 rgba(76, 175, 80, .14), 0 3px 1px -2px rgba(76, 175, 80, .2), 0 1px 5px 0 rgba(76, 175, 80, .12)" }}
                                            >
                                                Update Profile
                                            </button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>



                <div className='w-full 2xl:w-1/3 px-3 pt-8'>
                    <div className="w-full md:mx-2  h-fit flex flex-nowrap flex-col-reverse px-[15px] bg-[#fff] relative my-[25px] rounded" style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, .14)' }}>
                        <div className='w-[130px] h-[130px] rounded-full absolute -top-10 left-[30%] md:left-[40%] loptapL:left-[35%]' style={{ boxShadow: '0 10px 30px -12px rgba(0, 0, 0, .42), 0 4px 25px 0 rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2)' }}>
                            <Image src='/profile.jpg' width={500} height={500} className='w-full h-full rounded-full'></Image>
                        </div>
                        <div className='mt-28 py-3.5 px-5 text-center flex justify-center items-center flex-wrap'>
                            <h6 className='text-[#999] text-xs uppercase w-full'>CEO / Co-Founder</h6>
                            <h4 className='text-lg my-2.5 text-[rgba(0,0,0,0.87)] w-full'>Alec Thompson</h4>
                            <p className='text-[#999] text-sm mb-2.5'> Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is... </p>
                            <button className='rounded-[30px] bg-[#4caf50] text-[#fff] cursor-pointer py-2.5 px-[30px] flex justify-center items-center' style={{ boxShadow: '0 2px 2px 0 rgba(76, 175, 80, .14), 0 3px 1px -2px rgba(76, 175, 80, .2), 0 1px 5px 0 rgba(76, 175, 80, .12)' }}>Follow</button>
                        </div>
                    </div>

                </div>


            </section>
        </Layout>
    )
}