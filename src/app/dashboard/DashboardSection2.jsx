'use client'

import { FaStoreAlt , FaTwitter } from "react-icons/fa";
import { MdDateRange , MdOutlineContentCopy , MdInfoOutline , MdLocalOffer  } from "react-icons/md";
import { PiWarningFill , PiClockClockwiseFill  } from "react-icons/pi";

export default function DashboardSection2() {
    return (
        <>

            <div className="w-full h-[120px] md:w-[47%] xl:w-1/4 flex flex-col-reverse flex-wrap bg-white px-3.5 relative xl:mx-5 md:mx-2 rounded mobiles:mb-14 md:mb-9 loptapL:mb-4"
                style={{
                    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, .14)'
                }}
            >
                <div className="absolute -top-1 p-[15px] -mt-[20px] rounded text-white flex justify-center items-center text-4xl w-20 h-20" style={{ background: 'linear-gradient(60deg, #66bb6a, #43a047)', boxShadow: '0 12px 20px -10px rgba(76, 175, 80, .28), 0 4px 20px 0 rgba(0, 0, 0, .12), 0 7px 8px -5px rgba(76, 175, 80, .2)' }}>
                    <FaStoreAlt />
                </div>
                <div className='w-full mb-1'>
                    <div className="w-full">
                        <div className="py-3.5 px-5">
                            <h4 className=" text-sm text-[#999] w-full text-end">Revenue</h4>
                            <p className="text-[rgba(0,0,0,0.87)] text-[1.5625rem] flex justify-end items-center w-full text-end">$34,245</p>
                        </div>
                    </div>
                    <div className="w-full mx-[5px] mb-2.5 pt-2.5 border-t border-t-[#eee] flex justify-start items-center text-[#999] text-xs">
                        <MdDateRange className="text-base ml-3 mr-1" />   Last 24 Hours
                    </div>
                </div>
            </div>

            <div className="w-full h-[120px] md:w-[47%] xl:w-1/4 flex flex-col-reverse flex-wrap bg-white px-3.5 relative xl:mx-5 md:mx-2 rounded mobiles:mb-14 md:mb-9 loptapL:mb-4"
                style={{
                    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, .14)'
                }}
            >
                <div className="absolute -top-1 p-[15px] -mt-[20px] rounded text-white flex justify-center items-center text-4xl w-20 h-20" style={{ background: 'linear-gradient(60deg, #ffa726, #fb8c00)', boxShadow: '0 12px 20px -10px rgba(255, 152, 0, .28), 0 4px 20px 0 rgba(0, 0, 0, .12), 0 7px 8px -5px rgba(255, 152, 0, .2)' }}>
                    <MdOutlineContentCopy />
                </div>
                <div className='w-full mb-1'>
                    <div className="w-full">
                        <div className="py-3.5 px-5">
                            <h4 className=" text-sm text-[#999] w-full text-end">Used Space</h4>
                            <p className="text-[rgba(0,0,0,0.87)] text-[1.5625rem] flex justify-end items-center w-full text-end"> 49/50 <small className="text-[#999] text-[65%]"> GB </small></p>
                        </div>
                    </div>
                    <div className="w-full mx-[5px] mb-2.5 pt-2.5 border-t border-t-[#eee] flex justify-start items-center text-[#9c27b0] text-xs cursor-pointer">
                        <PiWarningFill className="text-base ml-3 mr-1 text-[#f44336]" />   Get More Space...
                    </div>
                </div>
            </div>

            <div className="w-full h-[120px] md:w-[47%] xl:w-1/4 flex flex-col-reverse flex-wrap bg-white px-3.5 relative xl:mx-5 md:mx-2 rounded mobiles:mb-14 md:mb-9 loptapL:mb-4"
                style={{
                    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, .14)'
                }}
            >
                <div className="absolute -top-1 p-[15px] -mt-[20px] rounded text-white flex justify-center items-center text-4xl w-20 h-20" style={{ background: 'linear-gradient(60deg, #ef5350, #e53935)', boxShadow: '0 12px 20px -10px rgba(244, 67, 54, .28), 0 4px 20px 0 rgba(0, 0, 0, .12), 0 7px 8px -5px rgba(244, 67, 54, .2)' }}>
                    <MdInfoOutline  />
                </div>
                <div className='w-full mb-1'>
                    <div className="w-full">
                        <div className="py-3.5 px-5">
                            <h4 className=" text-sm text-[#999] w-full text-end">Fixed Issues</h4>
                            <p className="text-[rgba(0,0,0,0.87)] text-[1.5625rem] flex justify-end items-center w-full text-end">75</p>
                        </div>
                    </div>
                    <div className="w-full mx-[5px] mb-2.5 pt-2.5 border-t border-t-[#eee] flex justify-start items-center text-[#999] text-xs">
                        <MdLocalOffer className="text-base ml-3 mr-1" />    Tracked from Github 
                    </div>
                </div>
            </div>

            <div className="w-full h-[120px] md:w-[47%] xl:w-1/4 flex flex-col-reverse flex-wrap bg-white px-3.5 relative xl:mx-5 md:mx-2 rounded "
                style={{
                    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, .14)'
                }}
            >
                <div className="absolute -top-1 p-[15px] -mt-[20px] rounded text-white flex justify-center items-center text-4xl w-20 h-20" style={{ background: 'linear-gradient(60deg, #26c6da, #00acc1)', boxShadow: '0 12px 20px -10px rgba(0, 188, 212, .28), 0 4px 20px 0 rgba(0, 0, 0, .12), 0 7px 8px -5px rgba(0, 188, 212, .2)' }}>
                    <FaTwitter />
                </div>
                <div className='w-full mb-1'>
                    <div className="w-full">
                        <div className="py-3.5 px-5">
                            <h4 className=" text-sm text-[#999] w-full text-end">Folowers</h4>
                            <p className="text-[rgba(0,0,0,0.87)] text-[1.5625rem] flex justify-end items-center w-full text-end">+245</p>
                        </div>
                    </div>
                    <div className="w-full mx-[5px] mb-2.5 pt-2.5 border-t border-t-[#eee] flex justify-start items-center text-[#999] text-xs">
                        <PiClockClockwiseFill className="text-base ml-3 mr-1" />    Just Updated 
                    </div>
                </div>
            </div>

        </>

    )
}