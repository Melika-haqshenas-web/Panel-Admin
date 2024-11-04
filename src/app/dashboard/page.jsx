'use client';

import useSettingStore from "../useSettingStore";
import DashboardSection1 from "./DashboardSection1";
import DashboardSection2 from "./DashboardSection2";
import DashboardSection3 from "./DashboardSection3";

export default function Dashboard() {
    const menuOpen = useSettingStore((state) => state.menuOpen);
    return (
        <section className={` ${menuOpen ? '-translate-x-[260px]' : 'translate-x-[0px]'} w-full flex-flex-wrap pt-10 overflow-x-hidden transition duration-300`}>
            <div className="w-full flex-1 my-4 flex flex-wrap xl:flex-nowrap">
                <DashboardSection1 />
            </div>
            <div className="w-full flex-1 my-4 flex flex-wrap xl:flex-nowrap">
                <DashboardSection2 />
            </div>
            <div className="w-full flex-1 my-4 flex flex-wrap xl:flex-nowrap">
                <DashboardSection3 />
            </div>
        </section>
    )
}