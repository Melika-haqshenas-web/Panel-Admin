'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import useSettingStore from "../useSettingStore";
import Lottie from 'react-lottie-player';
import logoFile from "./Logo.json";

import { TbLayoutDashboardFilled, TbChartBubbleFilled } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { LiaClipboard } from "react-icons/lia";
import { MdLibraryBooks, MdNotifications } from "react-icons/md";
import { PiMapPinLineFill } from "react-icons/pi";


export default function Menu() {
    const backgroundImage = useSettingStore((state) => state.backgroundImage);
    const backgroundColor = useSettingStore((state) => state.backgroundColor);
    const setNamePage = useSettingStore((state) => state.setNamePage); 
    const [activePath, setActivePath] = useState('');
    const menuOpen = useSettingStore((state) => state.menuOpen);
    const menuItems = [
        { path: "/dashboard", name: "Dashboard", icon: <TbLayoutDashboardFilled className="mr-2 text-2xl" /> },
        { path: "/Profile", name: "User Profile", icon: <FaUserAlt className="mr-2 text-2xl" /> },
        { path: "/Table", name: "Table List", icon: <LiaClipboard className="mr-2 text-2xl" /> },
        { path: "/Typography", name: "Typography", icon: <MdLibraryBooks className="mr-2 text-2xl" /> },
        { path: "/Icons", name: "Icons", icon: <TbChartBubbleFilled className="mr-2 text-2xl" /> },
        { path: "/Maps", name: "Maps", icon: <PiMapPinLineFill className="mr-2 text-2xl" /> },
        { path: "/Notifications", name: "Notifications", icon: <MdNotifications className="mr-2 text-2xl" /> },
    ];

    useEffect(() => {
        setActivePath(window.location.pathname);
        const matchedItem = menuItems.find(item => item.path === window.location.pathname);
        if (matchedItem) {
            setNamePage(matchedItem.name); 
        }
    }, [setNamePage, menuItems]);

    const handleClick = (path, name) => {
        setActivePath(path);
        setNamePage(name); 
    };
    return (
        <section className={`top-0 ${menuOpen ? 'right-0 flex w-[60%] md:w-[35%] lg:hidden' : 'left-0 hidden w-[18.75%] lg:flex'}  h-[100vh]  fixed p-3  flex-wrap justify-center items-start content-start after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:bg-fixed after:z-10 after:bg-[rgba(27,27,27,.87)] after:opacity-85 z-50`}
            style={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 10px 30px -12px rgba(0, 0, 0, .42), 0 4px 25px 0 rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2)'
            }}>
            <div className="w-[90%] h-20 border-b border-b-[hsla(0,0%,70.6%,.3)] flex justify-center items-center px-1 z-20 mb-10">
                <Lottie animationData={logoFile} play loop={true} className='w-full h-full ' />
                <h1 className='text-nowrap text-xl text-white'>Peace Panel</h1>
            </div>
            <div className="w-[90%] z-20">
                <ul className="z-20 w-full flex flex-wrap px-2">
                    {menuItems.map((item, index) => (
                        <Link href={item.path} key={index} onClick={() => handleClick(item.path, item.name)} className={`text-sm w-full p-3 text-white flex items-center rounded my-3 cursor-pointer transition duration-300 hover:bg-[hsla(0,0%,78.4%,0.2)]`} style={{ backgroundColor: activePath === item.path ? backgroundColor : '' }}>
                            <li className="w-full flex items-center">
                                {item.icon}
                                {item.name}
                            </li>
                        </Link>
                    ))}
                </ul>

            </div>
        </section>
    )
}
