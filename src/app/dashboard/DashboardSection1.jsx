'use client'

import React, { PureComponent } from 'react';
import { FaLongArrowAltUp } from "react-icons/fa";
import { BsClock } from "react-icons/bs";
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const data1 = [
    { name: 'M', pv: 10 },
    { name: 'T', pv: 19 },
    { name: 'W', pv: 9 },
    { name: 'T', pv: 19 },
    { name: 'F', pv: 21 },
    { name: 'S', pv: 19 },
    { name: 'S', pv: 39 },
];

const data2 = [
    { name: 'Ja', pv: 580 },
    { name: 'Fe', pv: 410 },
    { name: 'Ma', pv: 370 },
    { name: 'Ap', pv: 795 },
    { name: 'Mai', pv: 580 },
    { name: 'Ju', pv: 500 },
    { name: 'Jul', pv: 360 },
    { name: 'Au', pv: 420 },
    { name: 'Se', pv: 590 },
    { name: 'Oc', pv: 600 },
    { name: 'No', pv: 680 },
    { name: 'De', pv: 850 },
];

const data3 = [
    { name: '12am', pv: 200 },
    { name: '3pm', pv: 790 },
    { name: '6pm', pv: 410 },
    { name: '9pm', pv: 310 },
    { name: '12pm', pv: 300 },
    { name: '3am', pv: 250 },
    { name: '6am', pv: 220 },
    { name: '9am', pv: 200 }
];

const CustomTooltip1 = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', padding: '10px', borderRadius: '5px', color: 'white' }}>
                <p>{`Day: ${label}`}</p>
                <p>{`Value: ${payload[0].value}`}</p>
            </div>
        );
    }
    return null;
};

const CustomTooltip2 = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', padding: '10px', borderRadius: '5px', color: 'white' }}>
                <p>{`Month: ${label}`}</p>
                <p>{`Value: ${payload[0].value}`}</p>
            </div>
        );
    }
    return null;
};
const CustomTooltip3 = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', padding: '10px', borderRadius: '5px', color: 'white' }}>
                <p>{`hour: ${label}`}</p>
                <p>{`Value: ${payload[0].value}`}</p>
            </div>
        );
    }
    return null;
};

export default function DashboardSection1() {
    return (
        <>

            <div className="w-full h-[325px] xl:w-1/3 flex flex-col-reverse flex-wrap bg-white px-3.5 relative xl:mx-5 rounded mobiles:mb-14 md:mb-16 xl:mb-7"
                style={{
                    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, .14)'
                }}
            >
                <div className="w-[90%] absolute -top-10">
                    <div style={{
                        width: '100%',
                        background: 'linear-gradient(180deg, #46c4d3, #7ed9e7)',
                        borderRadius: '10px',
                        padding: '10px 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                    }}>
                        <ResponsiveContainer width="90%" height={200}>
                            <LineChart
                                data={data1}
                            >
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.2)" />
                                <XAxis
                                    type="category"
                                    dataKey="name"
                                    tick={{ fill: 'white', fontSize: 12 }} 
                                    axisLine={{ stroke: 'white' }}
                                    tickLine={{ stroke: 'white' }}
                                />
                                <YAxis
                                    type="number"
                                    dataKey="pv"
                                    domain={[0, 40]}
                                    tickCount={5}
                                    tick={{ fill: 'white', fontSize: 12 }} 
                                    axisLine={{ stroke: 'white' }}
                                    tickLine={{ stroke: 'white' }}
                                />
                                <Tooltip content={<CustomTooltip1 />} />
                                <Line
                                    type="monotone"
                                    dataKey="pv"
                                    stroke="#ffffff"
                                    strokeWidth={2}
                                    dot={{ fill: 'white', r: 4 }}
                                    activeDot={{ r: 6 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className='w-full mb-4'>
                    <div className="w-full">
                        <div className="py-3.5 px-5">
                            <h4 className="mb-[5px] text-[1.125rem] text-[rgba(0,0,0,0.87)]">Daily Sales</h4>
                            <p className="text-[#999] text-sm flex justify-start items-center"><span className="text-[#4caf50] flex justify-start items-center pr-1"><FaLongArrowAltUp className="pr-1" /> 55% </span> increase in today sales. </p>
                        </div>
                    </div>
                    <div className="w-full mx-[5px] mb-2.5 pt-2.5 border-t border-t-[#eee] flex justify-start items-center text-[#999] text-xs">
                        <BsClock className="text-base ml-3 mr-1" />  updated 4 minutes ago
                    </div>
                </div>
            </div>

            <div className="w-full h-[325px] xl:w-1/3 flex flex-col-reverse flex-wrap bg-white px-3.5 relative xl:mx-5 rounded mobiles:mb-14 md:mb-16 xl:mb-7"
                style={{
                    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, .14)'
                }}>
                <div className="w-[90%] absolute -top-10">
                    <div style={{
                        width: '100%',
                        background: 'linear-gradient(180deg, #d32f2f, #ff5252)',
                        borderRadius: '10px',
                        padding: '10px 10px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                    }}>
                        <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={data2} layout="horizontal" barSize={10}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.2)" />
                                <XAxis dataKey="name" stroke="#fff" style={{ fontSize: '12px' }} />
                                <YAxis domain={[0, 800]} stroke="#fff" style={{ fontSize: '12px' }} />
                                <Tooltip content={<CustomTooltip2 />} />
                                <Bar dataKey="pv" fill="#fff" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className='w-full mb-4'>
                    <div className="w-full">
                        <div className="py-3.5 px-5">
                            <h4 className="mb-[5px] text-[1.125rem] text-[rgba(0,0,0,0.87)]">Email Subscription</h4>
                            <p className="text-[#999] text-sm flex justify-start items-center">Last Campaign Performance </p>
                        </div>
                    </div>
                    <div className="w-full mx-[5px] mb-2.5 pt-2.5 border-t border-t-[#eee] flex justify-start items-center text-[#999] text-xs">
                        <BsClock className="text-base ml-3 mr-1" />  updated 10 days ago
                    </div>
                </div>
            </div>

            <div className="w-full h-[325px] xl:w-1/3 flex flex-col-reverse flex-wrap bg-white px-3.5 relative xl:mx-5 rounded mobiles:mb-14 md:mb-7 xl:mb-7"
                style={{
                    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, .14)'
                }}>
                <div className="w-[90%] absolute -top-10">
                    <div style={{
                        width: '100%',
                        background: 'linear-gradient(180deg, #66BB6A, #2ecc71)',
                        borderRadius: '10px',
                        padding: '10px 10px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                    }}>
                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={data3} lineSize={2}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.2)" />
                                <XAxis dataKey="name" tick={{ fill: 'white', fontSize: 12 }} axisLine={{ stroke: 'white' }} tickLine={{ stroke: 'white' }} />
                                <YAxis domain={[0, 800]} tick={{ fill: 'white', fontSize: 12 }} axisLine={{ stroke: 'white' }} tickLine={{ stroke: 'white' }} />
                                <Tooltip content={<CustomTooltip3 />} />
                                <Line type="monotone" dataKey="pv" stroke="#ffffff" strokeWidth={2} activeDot={{ r: 6 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className='w-full mb-4'>
                    <div className="w-full">
                        <div className="py-3.5 px-5">
                            <h4 className="mb-[5px] text-[1.125rem] text-[rgba(0,0,0,0.87)]">Completed Tasks</h4>
                            <p className="text-[#999] text-sm flex justify-start items-center">Last Campaign Performance</p>
                        </div>
                    </div>
                    <div className="w-full mx-[5px] mb-2.5 pt-2.5 border-t border-t-[#eee] flex justify-start items-center text-[#999] text-xs">
                        <BsClock className="text-base ml-3 mr-1" />  campaign sent 26 minutes ago
                    </div>
                </div>

            </div>

        </>

    )
}