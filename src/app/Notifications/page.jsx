'use client'

import { useState, useEffect } from 'react';
import Layout from '../dashboard/layout'
import useSettingStore from "../useSettingStore";
import { FaHeart } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { MdAddAlert } from "react-icons/md";

export default function Notifications() {
    const menuOpen = useSettingStore((state) => state.menuOpen);
    const backgroundColors = ['bg-[#00d3ee]', 'bg-[#5cb860]', 'bg-[#ffa21a]', 'bg-[#f55a4e]', 'bg-[#af2cc5]'];
    const [popups, setPopups] = useState({
        'top-left': [],
        'top-center': [],
        'top-right': [],
        'bottom-left': [],
        'bottom-center': [],
        'bottom-right': [],
    });

    const createPopup = (position) => {
        const randomColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
        const newPopup = {
            id: Date.now(),
            backgroundColor: randomColor,
        };
        setPopups((prev) => ({
            ...prev,
            [position]: [...prev[position], newPopup], // Add new popup to its respective position
        }));

        // Remove the popup after 30 seconds
        setTimeout(() => {
            setPopups((prev) => ({
                ...prev,
                [position]: prev[position].filter((popup) => popup.id !== newPopup.id),
            }));
        }, 5000);
    };

    const closePopup = (id, position) => {
        setPopups((prev) => ({
            ...prev,
            [position]: prev[position].filter((popup) => popup.id !== id),
        }));
    };

    // Function to get the style for each popup's position with proper offset for stacking
    const getPositionStyles = (position, index) => {
        const offset = index * 80; // 80px vertical spacing between popups

        let baseStyle = {
            zIndex: 50,
            color: 'white',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
            position: 'fixed',
        };

        switch (position) {
            case 'top-left':
                return { ...baseStyle, top: `${20 + offset}px`, left: '16px' };
            case 'top-center':
                return { ...baseStyle, top: `${20 + offset}px`, left: '50%', transform: 'translateX(-50%)' };
            case 'top-right':
                return { ...baseStyle, top: `${20 + offset}px`, right: '16px' };
            case 'bottom-left':
                return { ...baseStyle, bottom: `${20 + offset}px`, left: '16px' };
            case 'bottom-center':
                return { ...baseStyle, bottom: `${20 + offset}px`, left: '50%', transform: 'translateX(-50%)' };
            case 'bottom-right':
                return { ...baseStyle, bottom: `${20 + offset}px`, right: '16px' };
            default:
                return baseStyle;
        }
    };
    return (
        <Layout>
            <div className={`${menuOpen ? '-translate-x-[260px]' : 'translate-x-[0px]'} w-[98%] md:mx-2 h-fit px-[15px] bg-[#fff] relative my-[25px] rounded`} style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, .14)' }}>
                <div className="text-[#fff] my-[20px] mr-[15px] p-[15px] absolute -top-10 w-[90%] md:w-[95%] rounded"
                    style={{
                        background: 'linear-gradient(60deg, #66bb6a, #43a047)',
                        boxShadow: '0 12px 20px -10px rgba(76, 175, 80, .28), 0 4px 20px 0 rgba(0, 0, 0, .12), 0 7px 8px -5px rgba(76, 175, 80, .2)',
                    }}>
                    <h4 className="mb-[5px] text-lg">Notifications</h4>
                    <p className="text-[hsla(0,0%,100%,0.62)] text-sm flex justify-start items-center"> Handcrafted by us with <FaHeart className='ml-1' /></p>
                </div>
                <div className="py-[15px] pt-20 text-sm overflow-hidden flex flex-wrap xl:flex-nowrap">
                    <div className='w-full xl:w-1/2 px-[15px]'>
                        <h5 className='font-light leading-[1.5em] text-[1.0625rem] mb-[15px] mt-[10px]'>Notifications Style</h5>
                        <div className='w-full bg-[#00d3ee] text-[#fff] rounded relative py-[20px] px-[15px] leading-[20px] mb-[20px]' style={{ boxShadow: '0 12px 20px -10px rgba(0, 211, 238, .28), 0 4px 20px 0 rgba(0, 0, 0, .12), 0 7px 8px -5px rgba(0, 211, 238, .2)' }}>
                            <span className='max-w-[89%] block md:text-nowrap'>This is a plain notification</span>
                        </div>
                        <div className='w-full bg-[#00d3ee] text-[#fff] rounded relative py-[20px] px-[15px] leading-[20px] mb-[20px] flex justify-start items-center' style={{ boxShadow: '0 12px 20px -10px rgba(0, 211, 238, .28), 0 4px 20px 0 rgba(0, 0, 0, .12), 0 7px 8px -5px rgba(0, 211, 238, .2)' }}>
                            <div className='text-start flex justify-start items-center'>
                                <span className='block text-start md:text-nowrap'>This is a notification with close button.</span>
                            </div>
                            <div className='w-1/2 text-start flex justify-end items-center'>
                                <IoCloseSharp className='cursor-pointer' />
                            </div>
                        </div>
                        <div className='w-full bg-[#00d3ee] text-[#fff] rounded relative py-[20px] px-[15px] leading-[20px] mb-[20px] flex justify-start items-center' style={{ boxShadow: '0 12px 20px -10px rgba(0, 211, 238, .28), 0 4px 20px 0 rgba(0, 0, 0, .12), 0 7px 8px -5px rgba(0, 211, 238, .2)' }}>
                            <div className='w-fit mr-5 text-start flex justify-start items-center'>
                                <MdAddAlert className='text-3xl ' />
                            </div>
                            <div className='text-start flex justify-start items-center'>
                                <span className='block text-start md:text-nowrap'>This is a notification with close button and icon.</span>
                            </div>
                            <div className='w-1/2 text-start flex justify-end items-center'>
                                <IoCloseSharp className='cursor-pointer' />
                            </div>
                        </div>
                        <div className='w-full bg-[#00d3ee] text-[#fff] rounded relative py-[20px] px-[15px] leading-[20px] mb-[20px] flex justify-start items-center' style={{ boxShadow: '0 12px 20px -10px rgba(0, 211, 238, .28), 0 4px 20px 0 rgba(0, 0, 0, .12), 0 7px 8px -5px rgba(0, 211, 238, .2)' }}>
                            <div className='w-fit mr-5 text-start flex justify-start items-center'>
                                <MdAddAlert className='text-3xl ' />
                            </div>
                            <div className='mr-3 text-start flex justify-start items-center'>
                                <span className='w-full block text-start '>This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style</span>
                            </div>
                            <div className=' text-start flex justify-end items-center'>
                                <IoCloseSharp className='cursor-pointer' />
                            </div>
                        </div>
                    </div>

                    <div className='w-full xl:w-1/2 px-[15px]'>
                        <h5 className='font-light leading-[1.5em] text-[1.0625rem] mb-[15px] mt-[10px]'>Notification states</h5>
                        <div className='w-full bg-[#00d3ee] text-[#fff] rounded relative py-[20px] px-[15px] leading-[20px] mb-[20px] flex justify-start items-center' style={{ boxShadow: '0 12px 20px -10px rgba(0, 211, 238, .28), 0 4px 20px 0 rgba(0, 0, 0, .12), 0 7px 8px -5px rgba(0, 211, 238, .2)' }}>
                            <div className='text-start flex justify-start items-center'>
                                <span className='block text-start md:text-nowrap'>
                                    <b className='font-medium uppercase text-[12px]'> Info - </b>
                                    This is a regular notification made with ".alert-info"
                                </span>
                            </div>
                            <div className='w-1/2 text-start flex justify-end items-center'>
                                <IoCloseSharp className='cursor-pointer' />
                            </div>
                        </div>
                        <div className='w-full bg-[#5cb860] text-[#fff] rounded relative py-[20px] px-[15px] leading-[20px] mb-[20px] flex justify-start items-center' style={{ boxShadow: '0 12px 20px -10px rgba(92, 184, 96, .28), 0 4px 20px 0 rgba(0, 0, 0, .12), 0 7px 8px -5px rgba(92, 184, 96, .2)' }}>
                            <div className='text-start flex justify-start items-center'>
                                <span className='block text-start md:text-nowrap'>
                                    <b className='font-medium uppercase text-[12px]'> Success - </b>
                                    This is a regular notification made with ".alert-success"
                                </span>
                            </div>
                            <div className='w-1/2 text-start flex justify-end items-center'>
                                <IoCloseSharp className='cursor-pointer' />
                            </div>
                        </div>
                        <div className='w-full bg-[#ffa21a] text-[#fff] rounded relative py-[20px] px-[15px] leading-[20px] mb-[20px] flex justify-start items-center' style={{ boxShadow: '0 12px 20px -10px rgba(255, 162, 26, .28), 0 4px 20px 0 rgba(0, 0, 0, .12), 0 7px 8px -5px rgba(255, 162, 26, .2)' }}>
                            <div className='text-start flex justify-start items-center'>
                                <span className='block text-start md:text-nowrap'>
                                    <b className='font-medium uppercase text-[12px]'> Warning - </b>
                                    This is a regular notification made with ".alert-warning"
                                </span>
                            </div>
                            <div className='w-1/2 text-start flex justify-end items-center'>
                                <IoCloseSharp className='cursor-pointer' />
                            </div>
                        </div>
                        <div className='w-full bg-[#f55a4e] text-[#fff] rounded relative py-[20px] px-[15px] leading-[20px] mb-[20px] flex justify-start items-center' style={{ boxShadow: '0 12px 20px -10px rgba(92, 184, 96, .28), 0 4px 20px 0 rgba(0, 0, 0, .12), 0 7px 8px -5px rgba(92, 184, 96, .2)' }}>
                            <div className='text-start flex justify-start items-center'>
                                <span className='block text-start md:text-nowrap'>
                                    <b className='font-medium uppercase text-[12px]'> Danger - </b>
                                    This is a regular notification made with ".alert-danger"
                                </span>
                            </div>
                            <div className='w-1/2 text-start flex justify-end items-center'>
                                <IoCloseSharp className='cursor-pointer' />
                            </div>
                        </div>
                        <div className='w-full bg-[#af2cc5] text-[#fff] rounded relative py-[20px] px-[15px] leading-[20px] mb-[20px] flex justify-start items-center' style={{ boxShadow: '0 12px 20px -10px rgba(175, 44, 197, .28), 0 4px 20px 0 rgba(0, 0, 0, .12), 0 7px 8px -5px rgba(175, 44, 197, .2)' }}>
                            <div className='text-start flex justify-start items-center'>
                                <span className='block text-start md:text-nowrap'>
                                    <b className='font-medium uppercase text-[12px]'> Primary - </b>
                                    This is a regular notification made with ".alert-primary"
                                </span>
                            </div>
                            <div className='w-1/2 text-start flex justify-end items-center'>
                                <IoCloseSharp className='cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full px-[15px] text-center'>
                    <h5 className='text-center mb-[15px] mt-2.5 text-[1.0625rem]'>
                        Notifications Places
                        <p className='text-[#999] text-sm'>Click to view notifications</p>
                    </h5>
                    <div className='flex flex-wrap justify-center items-center'>
                        <button onClick={() => createPopup('top-left')} className='w-[45%] md:w-[30%] mx-1 md:mx-2.5 my-2.5 bg-[#9c27b0] text-[#fff] cursor-pointer py-[12px] px-[30px] flex justify-center items-center rounded text-nowrap' style={{ boxShadow: '0 2px 2px 0 rgba(156, 39, 176, .14), 0 3px 1px -2px rgba(156, 39, 176, .2), 0 1px 5px 0 rgba(156, 39, 176, .12)' }}>Top Left</button>
                        <button onClick={() => createPopup('top-center')} className='w-[45%] md:w-[30%] mx-1 md:mx-2.5 my-2.5 bg-[#9c27b0] text-[#fff] cursor-pointer py-[12px] px-[30px] flex justify-center items-center rounded text-nowrap' style={{ boxShadow: '0 2px 2px 0 rgba(156, 39, 176, .14), 0 3px 1px -2px rgba(156, 39, 176, .2), 0 1px 5px 0 rgba(156, 39, 176, .12)' }}>Top Center</button>
                        <button onClick={() => createPopup('top-right')} className='w-[45%] md:w-[30%] mx-1 md:mx-2.5 my-2.5 bg-[#9c27b0] text-[#fff] cursor-pointer py-[12px] px-[30px] flex justify-center items-center rounded text-nowrap' style={{ boxShadow: '0 2px 2px 0 rgba(156, 39, 176, .14), 0 3px 1px -2px rgba(156, 39, 176, .2), 0 1px 5px 0 rgba(156, 39, 176, .12)' }}>Top Right</button>
                        <button onClick={() => createPopup('bottom-left')} className='w-[45%] md:w-[30%] mx-1 md:mx-2.5 my-2.5 bg-[#9c27b0] text-[#fff] cursor-pointer py-[12px] px-[30px] flex justify-center items-center rounded text-nowrap' style={{ boxShadow: '0 2px 2px 0 rgba(156, 39, 176, .14), 0 3px 1px -2px rgba(156, 39, 176, .2), 0 1px 5px 0 rgba(156, 39, 176, .12)' }}>Bottom Left</button>
                        <button onClick={() => createPopup('bottom-center')} className='w-[45%] md:w-[30%] mx-1 md:mx-2.5 my-2.5 bg-[#9c27b0] text-[#fff] cursor-pointer py-[12px] px-[30px] flex justify-center items-center rounded text-nowrap' style={{ boxShadow: '0 2px 2px 0 rgba(156, 39, 176, .14), 0 3px 1px -2px rgba(156, 39, 176, .2), 0 1px 5px 0 rgba(156, 39, 176, .12)' }}>Bottom Center</button>
                        <button onClick={() => createPopup('bottom-right')} className='w-[45%] md:w-[30%] mx-1 md:mx-2.5 my-2.5 bg-[#9c27b0] text-[#fff] cursor-pointer py-[12px] px-[30px] flex justify-center items-center rounded text-nowrap' style={{ boxShadow: '0 2px 2px 0 rgba(156, 39, 176, .14), 0 3px 1px -2px rgba(156, 39, 176, .2), 0 1px 5px 0 rgba(156, 39, 176, .12)' }}>Bottom Right</button>


                    </div>
                </div>
            </div>
            {/* Popup container */}
            {Object.keys(popups).map((position) =>
                popups[position].map((popup, index) => (
                    <div
                        key={popup.id}
                        style={getPositionStyles(position, index)}
                        className={`${popup.backgroundColor} w-fit flex justify-start items-center flex-nowrap`}
                    >
                            <div className='w-fit mr-5 text-start flex justify-start items-center'>
                                <MdAddAlert className='text-3xl ' />
                            </div>
                            <span className='block text-start text-sm font-light md:text-nowrap'>Welcome to <b>Material Dashboard </b> - a beautiful freebie for every web developer.</span>
                        <button
                            className="ml-4 text-white font-bold"
                            onClick={() => closePopup(popup.id, position)}
                        >
                            &times;
                        </button>
                    </div>
                ))
            )}
        </Layout>
    )
}