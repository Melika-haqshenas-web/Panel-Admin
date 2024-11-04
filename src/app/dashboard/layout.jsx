
import Header from './Header'
import Menu from './Menu'
import SettingButtm from './setting'

import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"] , weight: ["300", "400"]});

export default function RootLayout({ children }) {
    return (
        <section className={`${roboto.className} relative flex flex-nowrap bg-[#eee]`}>
            <Menu />
            <section id='layoutmain' className='lg:absolute lg:top-0 lg:left-48 xl:left-[16.9rem] 2xl:left-[18rem] mobileFourK:left-[30rem] p-4 w-full lg:w-[81.25%] bg-[#eee]'>
                <Header />
                {children}
            </section>
            <SettingButtm />

        </section>
    );
}
