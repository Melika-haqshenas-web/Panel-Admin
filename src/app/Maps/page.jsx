'use client'

import Layout from '../dashboard/layout'
import useSettingStore from "../useSettingStore";

export default function Maps() {
    const menuOpen = useSettingStore((state) => state.menuOpen);
    return (
        <Layout>
            <div className={`${menuOpen ? '-translate-x-[260px]' : 'translate-x-[0px]'} w-full`}>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25920.6930678396!2d51.34092460575791!3d35.699485658073705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfe05732c2e91%3A0xfcbec017befd15f4!2sShahyad%20Tower!5e0!3m2!1sen!2snl!4v1728389677489!5m2!1sen!2snl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full h-[89vh]'></iframe>
            </div>

        </Layout>
    )
}