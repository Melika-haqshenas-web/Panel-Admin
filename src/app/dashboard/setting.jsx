'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import useSettingStore from "../useSettingStore";

import { IoSettingsOutline } from "react-icons/io5";

import sliderMenu1 from './../../../public/sidebar1-BackMenu.jpg'
import sliderMenu2 from './../../../public/sidebar2-BackMenu.jpg'
import sliderMenu3 from './../../../public/sidebar3-BackMenu.jpg'
import sliderMenu4 from './../../../public/sidebar4-BackMenu.jpg'


export default function Setting() {
    const [active, setActive] = useState(false)
    const [activeIndex, setActiveIndex] = useState(2);
    const [activeIndexImg, setActiveIndexImg] = useState(1)
    const menuOpen = useSettingStore((state) => state.menuOpen);

    const colors = ["#9c27b0", "#00bcd4", "#4caf50", "#ff9800", "#f44336"];
    const imgSliderMenu = [sliderMenu1, sliderMenu2, sliderMenu3, sliderMenu4]

    const setBackgroundImage = useSettingStore((state) => state.setBackgroundImage)
    const setBackgroundColor = useSettingStore((state) => state.setBackgroundColor);

    const handleLiClick = (index, color) => {
        setActiveIndex(index);
        setBackgroundColor(color);
    };
    const handleLiClickImg = (index, img) => {
        setActiveIndexImg(index);
        setBackgroundImage(img); 
    };
    return (
        <>
            <div id="setting" onClick={() => setActive(!active)} className={`${menuOpen ? 'mobiles:-translate-x-[190px] mobileM:-translate-x-[220px] mobileL:-translate-x-[250px] md:-translate-x-[260px]' : 'translate-x-[0px]'} w-12 h-10 bg-black opacity-50 fixed top-36 right-0 justify-center items-center rounded-r-none rounded-l text-white flex font-normal text-2xl leading-6 cursor-pointer z-40 transition duration-[0.4s] hover:opacity-100`}>
                <IoSettingsOutline />
            </div>
            {active && (
                <div className={`${menuOpen ? 'mobiles:-translate-x-[190px] mobileM:-translate-x-[220px] mobileL:-translate-x-[250px] md:-translate-x-[260px] before:top-12 before:-right-6' : 'translate-x-[0px] before:top-12 before:-right-6'} md:w-[290px] ml-2 md:ml-0 bg-white fixed top-24 right-[4.25rem] before:content-['▶'] before:text-4xl before:fixed  before:text-white flex flex-wrap p-2 justify-center shadow-[0_2px_5px_0_rgba(0,0,0,0.26)] rounded`}>
                    <div className="w-full flex flex-wrap justify-center">
                        <h3 className="uppercase text-nowrap text-center text-[#495057] py-3 w-full">Sidebar Filters</h3>
                        <ul className="flex flex-nowrap justify-center w-[90%] border-b border-b-[#ddd] gap-3 pb-4">
                            {colors.map((color, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleLiClick(index, color)}
                                    className={`w-[1.6rem] h-[1.6rem] rounded-full bodrer mr-1 cursor-pointer transition duration-300 flex justify-center items-center hover:bg-[#0bf] ${activeIndex === index ? "bg-[#0bf]" : ""
                                        }`}
                                >
                                    <div
                                        className="w-[1.3rem] h-[1.3rem] rounded-full"
                                        style={{ backgroundColor: color }}
                                    ></div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full flex flex-wrap justify-center">
                        <h3 className="uppercase text-nowrap text-center text-[#495057] py-3 w-full">Images</h3>
                        <ul className="flex flex-nowrap justify-center w-[90%] gap-3 pb-4">
                            {imgSliderMenu.map((imgSliderMenu, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleLiClickImg(index, imgSliderMenu.src)}
                                    className={`w-1/4 h-[100px] rounded mr-1 cursor-pointer transition duration-300 flex justify-center items-center hover:bg-[#0bf] ${activeIndexImg === index ? "bg-[#0bf]" : ""
                                        }`}
                                >
                                    <Image
                                        className="w-[95%] h-[95%] rounded"
                                        src={imgSliderMenu}
                                    ></Image>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

        </>
    )
}