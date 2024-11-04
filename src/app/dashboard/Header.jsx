'use client';

import useSettingStore from "../useSettingStore";
import Link from "next/link";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { MdNotifications } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect} from "react";


export default function Header() {
    const namePage = useSettingStore((state) => state.namePage);
    const setNamePage = useSettingStore((state) => state.setNamePage);
    const menuOpen = useSettingStore((state) => state.menuOpen);
    const toggleMenu = useSettingStore((state) => state.toggleMenu);

    const links = [
        { href: "/Profile", icon: <FaUserAlt className="text-xl text-[#495057] cursor-pointer" />, name: "User Profile" },
        { href: "/Notifications", icon: <MdNotifications className="text-xl text-[#495057] cursor-pointer" />, name: "Notifications" },
        { href: "/dashboard", icon: <TbLayoutDashboardFilled className="text-xl text-[#495057] cursor-pointer" />, name: "Dashboard" }
    ];

    useEffect(() => {
        const currentPath = window.location.pathname;
        const matchedLink = links.find((link) => link.href.toLowerCase() === currentPath.toLowerCase());
        if (matchedLink) {
            setNamePage(matchedLink.name);
        }
    }, [setNamePage]);

    return (
        <>
            <section className={`${menuOpen ? '-translate-x-[240px]' : 'translate-x-[0px]'} flex flex-nowrap w-full overflow-x-hidden transition duration-300 pb-4`}>
                <div className="w-1/2">
                    <h1 className="text-[#495057] text-lg">{namePage}</h1>
                </div>

                <div className="w-1/2 flex flex-nowrap flex-row-reverse pr-4 md:pr-8">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="hidden lg:flex justify-center items-center mx-4"
                            onClick={() => setNamePage(link.name)}
                        >
                            {link.icon}
                        </Link>
                    ))}

                    <div className="flex justify-center items-center lg:hidden">
                    {menuOpen ? (
                            <IoCloseSharp className="text-2xl cursor-pointer" onClick={toggleMenu} />
                        ) : (
                            <FiMenu className="text-2xl cursor-pointer" onClick={toggleMenu} />
                        )}
                        
                    </div>
                </div>
            </section>
        </>
    );
}
